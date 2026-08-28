import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './sections/Hero'
import About from './sections/About'
import NavbarContainer from "./components/common/NavbarContainer"
import Projects from './sections/Projects'
import Achievement from './sections/Achievement'
import Footer from './sections/Footer'
import LoadingScreen from './sections/LoadingScreen'
import { TimelineDemo } from './sections/TimeLine'
import FloatingControls from './components/common/FloatingControls'


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
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="projects"><Projects limit={8} showFilter={false} /></section>
            <section id="timeline"><TimelineDemo /></section>
            <section id="achievement"><Achievement /></section>
          </main>

          <footer>
            <Footer />
          </footer>
        </>} />
        <Route path="/projects" element={
          <>
            <Projects />
            <Footer />
          </>
        } />
      </Routes>
      <FloatingControls />
    </div>
  )
}
