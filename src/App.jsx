import { useState } from 'react'
import './App.css'
import NavBar from './composants/NavBar/Navbar';
import Hero from "./composants/Hero/Hero";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Hero></Hero>
    </>
  )
}

export default App;
