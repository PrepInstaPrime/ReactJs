import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useParams, useSearchParams } from 'react-router-dom'
// useParams for path param and useSearchParam is for query param ( things which comes after ?)
export default function Products() {
    let [queryParams, setQueryParams]=useSearchParams();
    let productList=[
        {name:"Rich dad and poor dad",price:100,category:'book'},{name:"atomic habit",price:200, category:'book'},{name:"Pshychology of Money", price:150, category:'book'},{name:"Samsung",price:10000, category:'mobile'},{name:"Redmi",price:8000,category:'mobile'},{name:"iphone",price:12000,category:'mobile'},{category:'laptop'},{category:'smartwatch'}
    ]
    let [products,setProducts]=useState(productList);
    let {product}=useParams();
    console.log(product)// if no path param then u will have undefined in product
    useEffect(()=>{
        product&&setProducts((val)=>val.filter(prod=>prod.category===product));
    },[])
    let productcheck="products";
    let handleClick=(val)=>{
        setQueryParams({price:val})
    }
    console.log(queryParams)
    useEffect(()=>{
        let price=parseInt(queryParams.get('price'))||0;
        setProducts((val) => val.filter(prod => prod.price > price));
    }, [queryParams])


  return (
    <div>
        <NavBar/>
        {<h1>All the {product||productcheck}</h1>}
        <button onClick={()=>handleClick(50)}>Above 50</button>
        <button onClick={()=>handleClick(100)} >Above 100</button>
        <button onClick={()=>handleClick(200)}>Above 200</button>
        {products.map((obj,idx)=>{
            return(
                <li key={idx}> {obj.name} : {obj.price}</li>
            )
        })}
        Products
    </div>
  )
}
