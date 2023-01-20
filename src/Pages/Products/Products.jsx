import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Products.scss"
import List from '../../Components/List/List';


const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice,setMaxPrice] = useState(3000)
  const [sort,setSort] = useState(null)

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
          <input type="checkbox" id="1" value={1} />
          <label htmlFor="1"> Hijab</label>
          </div>
          <div className="inputItem">
          <input type="checkbox" id="2" value={2} />
          <label htmlFor="2"> Abaya</label>
          </div>
          <div className="inputItem">
          <input type="checkbox" id="3" value={3} />
          <label htmlFor="3"> Accessories</label>
          </div>
          
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={3000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>3000</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" name="price" onChange={e=>setSort("asc")}/>
            <label htmlFor="asc">Price(Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" name="price" onChange={e=>setSort("asc")} />
            <label htmlFor="desc">Price(Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="catImg" src="https://i.pinimg.com/564x/33/83/31/338331f9f8ee2e70e08fcf601ea3e9a4.jpg" alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  );
};

export default Products;