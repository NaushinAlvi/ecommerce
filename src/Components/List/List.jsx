import React from 'react'
import "./List.scss";
import Card from "../Card/Card"

const List = () => {

    const data = [
        {
          id: 1,
          img: "/images/i3.jpg",
          img2: "/images/i4.jpg",
          title: "Long sleeve graphic t-shirt",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
        {
          id: 2,
          img: "/images/i5.jpg",
          img2: "/images/i6.jpg",
          title: "Shirt",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
        {
          id: 3,
          img: "/images/i7.jpg",
          img2: "/images/i8.jpg",
          title: "Hat",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
        {
          id: 4,
          img: "/images/i9.jpg",
          img2: "/images/NEUTRAL.jpg",
          title: "Coat",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
    ]



  return (
    <div className="list">{data?.map(item=>(
    <Card item={item} key={item.id}/>

    ))}</div>
  )
}

export default List