import { useState } from 'react'
import Header from "../compo/Header";
import Quiz from "../compo/Quiz";
import Tally from "../compo/Tally";
import Footer from "../compo/Footer";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Quiz />
    <Tally />
    <Footer />

  
    </>
  )
}

export default App
