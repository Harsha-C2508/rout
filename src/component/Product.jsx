import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import Style from "../component/product.module.css"

const Product = () => {
    const [product,setProduct] = useState({});
    const {id} = useParams();
   useEffect(()=>{
    if(id){
        fetch(`http://localhost:8080/products/${id}`)
        .then((r)=>r.json())
        .then((d)=>setProduct(d))
    }
   },[id])
  return (
    <div>
      <div>
        <h2>{product.name}</h2>
        <img src={product.url} alt={product.name} className={Style.size} />
        <p style={{width:"70%",margin:"auto"}}>{product.discribution}</p>
      </div>
    </div>
  )
}

export default Product