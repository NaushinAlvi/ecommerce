import React from 'react'
import { useState } from 'react';
import { Data } from "../src/Data.js"



const Product = () => {
  const [product] = useState(Data);
  const [value,setValue] = useState(0)

  const {mainImage} = product[value]


  return (
    <section className= "max-w-7xl mx-auto">
      <article>
        <img src={mainImage} alt="" className="" />

        <ul className="flex items-center justify-start gap-3 flex-wrap" >
          {Product.map((item, index) => (
            <li key={item.id} onclick={() => setValue(index)}>
              <img src={item.thumbnail} alt="" />
            </li>


          ))}

        </ul>
      </article>
      
    </section>
  )
}

export default Product