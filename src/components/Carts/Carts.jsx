import { useEffect, useState } from "react";




const Carts = ({cooks, setCooks}) => {
    


  const [foods, setFoods] = useState([])
  const [cooking, setCooking] = useState([])
 
  useEffect(() => {
    if(cooks){
      setFoods(cooks);
    }
  },[cooks])

  const prepare = food => {
    const preparing = foods.filter(prepared => prepared.recipe_id !== food.recipe_id)
    setFoods(preparing)
    setCooks(preparing)
    setCooking([...cooking, food])
  }


  return (
   
      
    <div>
     
     <h2>Want to cook:{foods?.length} </h2>
     <div className="flex">
      <h2>NAme </h2>
      <h2>Time</h2>
      <h2>Calories</h2>
     </div>
     
     {
      foods?.map(food=> <div className="flex" key={food.recipe_id}>
          <h2>{food?.recipe_name}</h2>
          <h2>{food?.preparing_time}</h2>
          <h2>{food?.calories}</h2>
          <button onClick={() => prepare(food)}>Preparing</button>
      </div>)
     }

     <h2>Hello Chudir bhai</h2>
     
     {
      cooking?.map(cooked => <div className="flex" key={cooked.recipe_id}>
      <h2>{cooked?.recipe_name}</h2>
      <h2>{cooked?.preparing_time}</h2>
      <h2>{cooked?.calories}</h2>
      
  </div>)
     }
    </div>
  );
};

export default Carts;