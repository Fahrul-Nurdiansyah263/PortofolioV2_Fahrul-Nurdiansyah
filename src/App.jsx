import React, { useEffect, useState, lazy, Suspense } from 'react'
import { Routes, Route } from "react-router-dom";

// Section ringan / above-the-fold — diload langsung
import Home from './sections/Hero'
import NavbarContainer from "./components/common/NavbarContainer"
import LoadingScreen from './sections/LoadingScreen'
import FloatingControls from './components/common/FloatingControls'
import Footer from './sections/Footer'

// Section berat — diload lazy sehingga tidak masuk bundle awal
// dan Three.js / Rapier / GSAP cuma didownload kalau sudah dibutuhkan
const About = lazy(() => import('./sections/About'))
const Projects = lazy(() => import('./sections/Projects'))
const TimelineDemo = lazy(() => import('./sections/TimeLine').then(m => ({ default: m.TimelineDemo })))
const Achievement = lazy(() => import('./sections/Achievement'))

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  const LOADING_DURATION = 3000

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true)

      const timer = setTimeout(() => {
        setIsLoading(false)
      }, LOADING_DURATION)

      return () => clearTimeout(timer)
    } else {
      setIsMobile(false)
      setIsLoading(false)
    }
  }, [])

  if (isMobile && isLoading) {
    return <LoadingScreen duration={LOADING_DURATION} />
  }

  return (
    <div className="relative dark:bg-black min-h-screen">
      <Routes>
        <Route path="/" element={<>
          <nav className="sticky top-5 inset-x-0 z-50">
            <NavbarContainer />
          </nav>

          <main>
            {/* Hero — tidak dilazy karena ini pertama yang dilihat user */}
            <section id="home"><Home /></section>

            {/* Section berikutnya dilazy — browser fetch chunk-nya pas user mulai scroll */}
            <Suspense fallback={null}>
              <section id="about"><About /></section>
            </Suspense>

            <Suspense fallback={null}>
              <section id="projects"><Projects limit={8} showFilter={false} /></section>
            </Suspense>

            <Suspense fallback={null}>
              <section id="timeline"><TimelineDemo /></section>
            </Suspense>

            <Suspense fallback={null}>
              <section id="achievement"><Achievement /></section>
            </Suspense>
          </main>

          <footer>
            <Footer />
          </footer>
        </>} />

        <Route path="/projects" element={
          <>
            <Suspense fallback={null}>
              <Projects />
            </Suspense>
            <Footer />
          </>
        } />
      </Routes>
      <FloatingControls />
    </div>
  )
}
