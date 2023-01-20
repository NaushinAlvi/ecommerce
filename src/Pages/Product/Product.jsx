import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import BalanceIcon from '@mui/icons-material/Balance';
// import from "/img/"
// import { height, width } from '@mui/system';

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const images = [
    "https://littleblackhijab.com/wp-content/uploads/2022/12/BLUEBERRYCREME.jpg",
    "https://littleblackhijab.com/wp-content/uploads/2022/12/TULLE.jpg",
  ];
  return (
    <div className="Product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />

          <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, commodi voluptates in laborum explicabo facere culpa doloribus optio harum. Eveniet animi id a dolorum officiis quo quam commodi, culpa laudantium.</p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon />ADD TO WISH LIST
          </div>
          
        </div>
        <div className="Info">
          <span>Vendor:Espresso</span>
          <span>Product Type:Hijab</span>
          <span>Tag:Hijab,Women</span>
        </div>
        <hr />
        <div className="Info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;


