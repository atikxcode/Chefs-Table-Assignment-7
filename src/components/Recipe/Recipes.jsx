import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";
import Carts from "../Carts/Carts";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const notify = () => {
  toast('Items already selected');
}

const Recipes = () => {


  const [cooks, setCooks] = useState([]);

  const handleAddToCook = cook => {
    // console.log(cook)
    
    const existingCooks = cooks.find(food => food?.recipe_id === cook?.recipe_id)
    if(existingCooks){
      notify();
    }
    else{
      setCooks([...cooks, cook]);
    }
    
    // console.log(cooks);
    // console.log(setCooks);
  }

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch('menu.json')
    .then(res => res.json())
    .then(data => setMenus(data))
  }, [])
  return (
    <div className="container mx-auto mb-10">
      
      
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-[40px] font-semibold mb-6">Out Recipes</h2>
        <p className="text-center w-[823px] text-[16px] leading-[26px] text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
      </div>
     <div className="flex justify-between">
      <div className="grid grid-cols-2 gap-10">
      {
        menus.map(menu => <Recipe 
          key={menu.recipe_id}
          handleAddToCook={handleAddToCook}
           menu={menu}></Recipe>)
      }
      </div>
      <div>
        <Carts cooks={cooks}
        setCooks={setCooks}></Carts>
      </div>
     </div>

     
      

      <ToastContainer></ToastContainer>
    </div>
    
  );
};

export default Recipes;