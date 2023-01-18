import React from 'react'
import "./FeaturedProducts.scss"
import Card from "../Card/Card";

const FeaturedProducts = (type) => {

  const data = [
    {
      id: 1,
      img: "",
      img2: "",
      title: "Long sleeve graphic t-shirt",
      isNew:true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 1,
      img: "",
      img2: "",
      title: "Shirt",
      isNew:true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 1,
      img: "",
      img2: "",
      title: "Hat",
      isNew:true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "",
      img2: "",
      title: "Coat",
      isNew:true,
      oldPrice: 19,
      price: 12,
    },
  ]


  return (
    <div className="featuredProducts">
    <div className="top">
      <h1>{type} products</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas.
      </p>
    </div>
    <div className="bottom">
      {/* {error
        ? "Something went wrong!"
        : loading
        ? "loading" */}
        {data.map((item) => <Card item={item} key={item.id} />)}
    </div>
  </div>
  );
};

export default FeaturedProducts;