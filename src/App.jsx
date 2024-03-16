import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Recipes from './components/Recipe/Recipes'
import Carts from './components/Carts/Carts'



function App() {

  const [cooks, setCooks] = useState(0);

  const handleAddToCook = cook => {
    const newCooks = [...cooks, cook];
    setCooks(newCooks);
  }

  return (
    <>
     <Header></Header>
     <Banner></Banner>
     <Recipes handleAddToCook = {handleAddToCook}></Recipes>
    <Carts cooks={cooks}></Carts>
     
    </>
  )
}

export default App
