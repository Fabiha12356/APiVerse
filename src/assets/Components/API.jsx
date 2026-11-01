import React, { Children } from 'react'
import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import "./RecipeUI.jsx"
import RecipeUI from './RecipeUI.jsx';

export const API = ({apiLink,apiName,children}) => {

    let[greet,setGreet] =useState([])

    useEffect(
        ()=>{

            async function Recipes() {
                let data = await fetch(`${apiLink}`)
                let get =  await data.json()


                setGreet(get[apiName])
                console.log(greet);
            }
            Recipes();
        
    },[])



  return (
<>
   {children(greet)}
</>
  )
}
 export default API