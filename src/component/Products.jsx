import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Styles from '../component/products.module.css'
const Products = () => {

    const[products,setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts= async() =>{
            fetch("http://localhost:8080/products")
            .then((r)=>r.json())
            .then((d)=>{
                setProducts(d);
            })
        }
        fetchProducts();
    },[]);
  return (
    <>
    <p>Find the list of Products here</p>
    <div className={Styles.box}>
       <table style={{width:"90%",margin:'auto'}}>
        <thead>
            <tr>
                <td>Id</td>
                <td>Product</td>
                <td>Price</td>
                <td>Know More</td>
            </tr>
        </thead>
        <tbody>
            {products.map((p)=>(
                <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>₹{p.price}</td>
                    <td>
                        <Link to={`/products/${p.id}`}>See More</Link>
                    </td>
                </tr>
            ))}
        </tbody>
       </table>
    </div>
    </>
  )
}

export default Products