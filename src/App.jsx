
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Recipes from './components/Recipe/Recipes'




function App() {


  // useEffect(() => {
  //   const handleAddToCook = cook => {
  //     // console.log(cook)
  //     setCooks(cook);
  //     console.log(cooks);
  //     // console.log(setCooks);
  //   }
  // },[cooks])
  const handleAddToCook = cook => {
    // console.log(cook)
    setCooks(cook);
    console.log(cooks);
    // console.log(setCooks);
  }

  return (
    <>
     <Header></Header>
     <Banner></Banner>
     <Recipes></Recipes>
    
     
    </>
  )
}

export default App
