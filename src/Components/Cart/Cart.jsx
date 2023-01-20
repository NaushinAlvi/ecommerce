import React from 'react'
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
    const data = [
        {
          id: 1,
          img: "/images/i3.jpg",
          img2: "/images/i4.jpg",
          title: "Long sleeve graphic t-shirt",
          desc: "Long sleeve graphic t-shirt",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
        {
          id: 2,
          img: "/images/i5.jpg",
          img2: "/images/i6.jpg",
          title: "Shirt",
          desc: "Shirt",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },

    ]
  return (
    <div className="cart">
        <h1>Products in your cart</h1>
        {data?.map((item)=> (
            <div className="item" key={item.id} >
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0, 100)}</p>
                    <div className="price">
                        1 x ₹{item.price}
                    </div>
                </div>
                <DeleteOutlinedIcon className="delete"/>
            </div>
        ))}
        <div className="total">
            <span>SUB TOTAL</span>
            <span>₹700</span>
        </div>
        <button>CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart