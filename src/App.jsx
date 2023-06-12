import React from 'react'
import Navbar from './sections/navbar/navbar'
import Header from './sections/header/Header'
import About from './sections/About/about'
import Projects from './sections/Projects/projects'
import Contact from './sections/contact/contact'
import Footer from './sections/footer/Footer'
import FloatingNav from './sections/floating-nav/FloatingNav'
import Sketch from './components/sketches'
import SplineViewer from './components/guy'
const App = () => {
  return (
    <main>
        <Navbar/>
        <SplineViewer />
        <Header />
        <Sketch />
        <Projects />
        <Sketch />
        <About />
        <Sketch />
        <Contact />
        {/* <FloatingNav /> */}

    </main>
  )
}

export default App
