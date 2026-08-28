import { useEffect, useRef, useState, useMemo, useCallback } from 'react';

const getAttr = (distance, maxDist, minVal, maxVal) => {
  const val = maxVal - Math.abs((maxVal * distance) / maxDist);
  return Math.max(minVal, val + minVal);
};

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

const TextPressure = ({
  text = 'Compressa',
  fontFamily = 'Roboto Flex',
  fontUrl = 'https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&display=swap',
  width = true,
  weight = true,
  italic = true,
  alpha = false,
  flex = true,
  stroke = false,
  scale = false,
  textColor = '#FFFFFF',
  strokeColor = '#FF0000',
  strokeWidth = 2,
  className = '',
  minFontSize = 24,
  fps = 30 // throttle animasi, dulunya nempel di 60fps browser
}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const spansRef = useRef([]);

  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const lastMouseRef = useRef({ x: -9999, y: -9999 }); // buat cek "mouse hampir gak gerak"

  // cache posisi center tiap karakter relatif ke title, di-hitung ulang cuma saat resize
  const charCentersRef = useRef([]);
  const maxDistRef = useRef(1);

  const [fontSize, setFontSize] = useState(minFontSize);
  const [scaleY, setScaleY] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);

  const chars = text.split('');

  // === setup posisi mouse awal ===
  useEffect(() => {
    const handleMouseMove = e => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };
    const handleTouchMove = e => {
      const t = e.touches[0];
      cursorRef.current.x = t.clientX;
      cursorRef.current.y = t.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + width / 2;
      mouseRef.current.y = top + height / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // === hitung ulang cache posisi karakter, cuma saat resize/mount ===
  const measureCharCenters = useCallback(() => {
    if (!titleRef.current) return;
    const titleRect = titleRef.current.getBoundingClientRect();
    maxDistRef.current = titleRect.width / 2 || 1;

    charCentersRef.current = spansRef.current.map(span => {
      if (!span) return { x: 0, y: 0 };
      const rect = span.getBoundingClientRect();
      return {
        x: rect.x + rect.width / 2 - titleRect.x, // relatif ke title, biar gampang di-offset ulang
        y: rect.y + rect.height / 2 - titleRect.y
      };
    });
  }, []);

  const setSize = useCallback(() => {
    if (!containerRef.current || !titleRef.current) return;

    const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();

    let newFontSize = containerW / (chars.length / 2);
    newFontSize = Math.max(newFontSize, minFontSize);

    setFontSize(newFontSize);
    setScaleY(1);
    setLineHeight(1);

    requestAnimationFrame(() => {
      if (!titleRef.current) return;
      const textRect = titleRef.current.getBoundingClientRect();

      if (scale && textRect.height > 0) {
        const yRatio = containerH / textRect.height;
        setScaleY(yRatio);
        setLineHeight(yRatio);
      }

      // ukur ulang posisi char setelah layout settle
      measureCharCenters();
    });
  }, [chars.length, minFontSize, scale, measureCharCenters]);

  useEffect(() => {
    const debouncedSetSize = debounce(setSize, 100);
    debouncedSetSize();
    window.addEventListener('resize', debouncedSetSize);
    return () => window.removeEventListener('resize', debouncedSetSize);
  }, [setSize]);

  // === IntersectionObserver: pause animasi kalau di luar viewport ===
  const isVisibleRef = useRef(true);
  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // === main animation loop, throttled + tanpa getBoundingClientRect per frame ===
  useEffect(() => {
    let rafId;
    let lastTime = 0;
    const frameInterval = 1000 / fps;
    const MOVE_THRESHOLD = 0.5; // px, skip update kalau mouse gerak dikit banget

    const animate = time => {
      rafId = requestAnimationFrame(animate);

      if (!isVisibleRef.current) return;

      if (time - lastTime < frameInterval) return;
      lastTime = time;

      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

      const dx = mouseRef.current.x - lastMouseRef.current.x;
      const dy = mouseRef.current.y - lastMouseRef.current.y;
      if (Math.abs(dx) < MOVE_THRESHOLD && Math.abs(dy) < MOVE_THRESHOLD) return;
      lastMouseRef.current.x = mouseRef.current.x;
      lastMouseRef.current.y = mouseRef.current.y;

      if (!titleRef.current) return;
      const titleRect = titleRef.current.getBoundingClientRect(); // cuma 1x per frame, bukan per-char
      const maxDist = maxDistRef.current;

      spansRef.current.forEach((span, i) => {
        if (!span) return;
        const center = charCentersRef.current[i];
        if (!center) return;

        // posisi absolut char = posisi title (yang baru diukur 1x) + offset cache
        const charAbsX = titleRect.x + center.x;
        const charAbsY = titleRect.y + center.y;

        const ddx = mouseRef.current.x - charAbsX;
        const ddy = mouseRef.current.y - charAbsY;
        const d = Math.sqrt(ddx * ddx + ddy * ddy);

        const wdth = width ? Math.floor(getAttr(d, maxDist, 5, 200)) : 100;
        const wght = weight ? Math.floor(getAttr(d, maxDist, 100, 900)) : 400;
        const italVal = italic ? getAttr(d, maxDist, 0, 1).toFixed(2) : 0;
        const alphaVal = alpha ? getAttr(d, maxDist, 0, 1).toFixed(2) : 1;

        const newFontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;

        if (span.style.fontVariationSettings !== newFontVariationSettings) {
          span.style.fontVariationSettings = newFontVariationSettings;
        }
        if (alpha && span.style.opacity !== alphaVal) {
          span.style.opacity = alphaVal;
        }
      });
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [width, weight, italic, alpha, fps]);

  const styleElement = useMemo(() => {
    return (
      <style>{`
        @import url('${fontUrl}');
        .stroke span {
          position: relative;
          color: ${textColor};
        }
        .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: ${strokeWidth}px;
          -webkit-text-stroke-color: ${strokeColor};
        }
      `}</style>
    );
  }, [fontFamily, fontUrl, textColor, strokeColor, strokeWidth]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden bg-transparent">
      {styleElement}
      <h1
        ref={titleRef}
        className={`text-pressure-title ${className} ${
          flex ? 'flex justify-between' : ''
        } ${stroke ? 'stroke' : ''} uppercase text-center`}
        style={{
          fontFamily,
          fontSize: fontSize,
          lineHeight,
          transform: `scale(1, ${scaleY})`,
          transformOrigin: 'center top',
          margin: 0,
          fontWeight: 100,
          color: stroke ? undefined : textColor
        }}
      >
        {chars.map((char, i) => (
          <span key={i} ref={el => (spansRef.current[i] = el)} data-char={char} className="inline-block">
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TextPressure;