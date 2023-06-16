import React from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Anim, ScrollAnim } from "./components/AnimatedCont"
import ChangeLang from "./components/ChangeLang"

const Back = styled(motion.div)`
  background-color: ${props => props.backColor};
`

function App() {

  return (
    <div className="App">
      <Anim zIndex="100" duration="0.6">
        <Nav />
      </Anim>
      <Anim duration="0.7">
        <Hero />
      </Anim>
      <Back backColor="#212529">
        <Anim duration="0.8">
          <About />
        </Anim>
      </Back>
      <ScrollAnim duration="0.6">
        <Projects />
      </ScrollAnim>
      <ScrollAnim duration="0.6">
        <Contact />
      </ScrollAnim>
      <Back backColor="#212529">
        <ScrollAnim duration="0.6">
          <Footer />
        </ScrollAnim>
      </Back>
      <ChangeLang />
    </div>
  )
}

export default App
