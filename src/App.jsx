import { useState } from 'react'
import './App.css'
import Hero from "./composants/Hero/Hero";
import Services from './composants/Services/Services';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200"></div>
<Hero/>
<Services/>
    </>
  )
}

export default App;
