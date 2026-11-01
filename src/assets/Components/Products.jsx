import React from 'react'

import API from './API.jsx'
import ProductUI from './ProductUI.jsx'

export const Products = () => {
  return (
<>
    <API  apiLink={'https://dummyjson.com/products'} apiName={'products'}>

{(productdata) => <ProductUI  product={productdata} />}

</API>

</>  )
}
export default Products