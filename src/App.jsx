import { useState } from 'react'
import React from 'react'
import {  Routes } from 'react-router-dom'
import { Route,Router } from 'react-router-dom'


import Navbaar from './assets/Components/Navbaar'
import Recipes from './assets/Components/Recipes.jsx'
import Products from './assets/Components/Products.jsx'
import Carts from './assets/Components/Carts.jsx'
import Hero from './assets/Components/Hero.jsx'


export const App = () => {
  return (
<>
   <Navbaar />
<Routes>
  <Route path='' element={<Hero/>}/>
< Route path='/recipes'  element={<Recipes/>}/>
<Route  path='/products' element={<Products/>}/>
<Route path='/carts' element={<Carts/>}/>
</Routes>
</>

   
  )
}


export default App
