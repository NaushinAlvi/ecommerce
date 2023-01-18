import React from 'react'
import "./FeaturedProducts.scss"
import Card from "../Card/Card";

const FeaturedProducts = (type) => {

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      img2: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      title: "Long sleeve graphic t-shirt",
      isNew:true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3bddkiuBvxsbvGHOFvtZzCyt3wR1fs66fWjrZ2Iu0axBuNoCNrjBXFH5hwJh55nUVh8&usqp=CAU",
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvtuwzmb0CwIXYEd4ffnFZp7_PMScZaMmXmofo4Q82nrHgVUm12sK9mJB3ggDzj06zBU&usqp=CAU",
      title: "Shirt",
      isNew:true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThahkPvzhsaqfkCgENp9RfhN2WR7wOfm8gT_qF563wnobEVhsv04BtHSaW_kYCz6yYAug&usqp=CAU",
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJLY2J7pFplMhwS-zEpVHVkltZdCzQ-c7LBHX8jUazCEalfIU8WPx-syGLacmq7xJKfY&usqp=CAU",
      title: "Hat",
      isNew:true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
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
    
        {data.map(item=>(
          <Card item={item} key={item.id}/>
        ))}
    </div>
  </div>
  );
};

export default FeaturedProducts;