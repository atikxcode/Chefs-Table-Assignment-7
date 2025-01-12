import { useEffect, useState } from "react";




const Carts = ({cooks, setCooks}) => {
    


  const [foods, setFoods] = useState([])
  const [cooking, setCooking] = useState([])
  const [cookingCount, setCookingCount] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
 
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
    setCookingCount(cookingCount + 1);
    setTotalTime(totalTime + food.preparing_time);
    setTotalCalories(totalCalories + food.calories);
  }


  return (
   
      
    <div className="flex flex-col items-center border-[1px] border-[#28282833] rounded-xl w-[100%] lg:w-[514px] h-auto p-4 mt-10 lg:mt-0">
     
     <h2 className="text-[#282828] text-[20px] lg:text-[24px] font-semibold mb-[40px]">Want to cook: {foods?.length} </h2>
    
     <div className="flex w-full text-[#878787] text-[16px] font-medium mb-[16px]">
      <h2 className="lg:ml-10 mr-16 lg:mr-28">Name </h2>
      <h2 className="mr-8 lg:mr-12">Time</h2>
      <h2>Calories</h2>
     </div>
     
     {
      foods?.map((food, index)=> <div className="flex w-full text-[#878787] text-[16px] font-medium mb-[16px] justify-between p-4 rounded-xl bg-[#28282808] items-center" key={food.recipe_id}>
          
          <h2><span className="text-black">{index+1}</span> <span className="ml-4">{food?.recipe_name}</span> </h2>
          <h2>{food?.preparing_time} min</h2>
          <h2>{food?.calories} calories</h2>
          <button onClick={() => prepare(food)} className="bg-[#0BE58A] text-black p-1 text-[14px] lg:text-[16px] lg:p-2 rounded-[20px] font-semibold">Preparing</button>
      </div>)
     }

     <h2 className="text-[#282828] text-[20px] lg:text-[24px] font-semibold mb-[40px]">Currently Cooking: {cookingCount}</h2>
     <div className="flex w-full text-[#878787] text-[16px] font-medium mb-[16px]">
      <h2 className="lg:ml-10 mr-20 lg:mr-28">Name </h2>
      <h2 className="ml-12 mr-2 lg:mr-14">Time</h2>
      <h2 className="ml-10">Calories</h2>
     </div>

     {
      cooking?.map((cooked, index) => <div className="flex w-full text-[#878787] text-[16px] font-medium mb-[16px] justify-between p-4 rounded-xl bg-[#28282808] items-center" key={cooked.recipe_id}>
      <h2><span className="text-black">{index+1}</span> <span className="ml-4">{cooked?.recipe_name}</span></h2>
      <h2>{cooked?.preparing_time} min</h2>
      <h2>{cooked?.calories} calories</h2>
      
  </div>
  
  )
  
     }
     <div className="flex flex-row justify-end w-full gap-8 text-[#282828CC] text-[16px] font-medium">
     <p>Total Time = <br />{totalTime} minutes</p>
      <p>Total Calories = <br />{totalCalories} calories</p>
     </div>
     
     
    </div>
  );
};

export default Carts;