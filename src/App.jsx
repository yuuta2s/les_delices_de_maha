import { useState } from 'react'
import './App.css'
import Hero from "./composants/Hero/Hero";
import Services from './composants/Services/Services';
import Cosmetic from './composants/Cosmetic/Cosmetic';
import Offres from './composants/Offres/Offres';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200"></div>
<Hero/>
<Services/>
<Cosmetic/>
<Offres/>
    </>
  )
}

export default App;
