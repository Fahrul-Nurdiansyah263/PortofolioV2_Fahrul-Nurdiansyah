import React, { useState, useEffect } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// const App = () => {
//   return (
//    
//   );
// };

export default function LoadingScreen({ duration }) {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const intervalTime = Math.floor(duration / 100)

    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev < 100) {
          return prev + 1
        }
        clearInterval(interval)
        return 100;
      });
    }, intervalTime)

    return () => clearInterval(interval)
  }, [duration])

  return (
    <div className="fixed inset-0 bg-slate-900 flex flex-col justify-center items-center z-50 text-white">
      <DotLottieReact
        src="lottie/Cute Monster.lottie"
        loop={true}
        autoplay
        className='w-64 h-64'
      />

      <p className='text-2xl font-semibold text-slate-200 mt-2 mb-4'>
        {percentage}%
      </p>

      <p className='text-base text-slate-300 text-center px-4'>
        Lihat di dekstop/pc untuk tampilan yang lebih baik
      </p>
    </div>
  )
}
