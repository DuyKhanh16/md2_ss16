import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addProduct } from '../../store';
export default function Product() {
    // const [products,setProducts]=useState();
    const [product,setProduct] =useState();
    const dispatch=useDispatch();
    const data =useSelector(state=>{
        // console.log("11111",state.productReducer.products);
        return state.productReducer.products
    })
    const handleClick=()=>{
        // console.log("11111111",product);
        dispatch(addProduct(product));
        setProduct("");
    }
  return (
    <>
        list product
      {data.map((item)=>(
        <li> Name: {item.name} ----- Price: {item.price}</li>
      ))}
        <input
            onChange={(e)=>setProduct(e.target.value)}
         type="text"
         value={product}
         />
      <button onClick={handleClick}>Add</button>
    </>
  )
}
