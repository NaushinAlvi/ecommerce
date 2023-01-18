import React from 'react'



import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
  return (
	<div className="navbar">
	<div className="wrapper">
	  <div className="left">
	  <div className="icon">
	  <PersonOutlineOutlinedIcon/>
	  <div className="searchIcon">
	  <SearchIcon/>
	  </div>
	  </div>
	  <div className="item">
		  <Link className ="link" to="/products/1">Home</Link>
		</div>
		<div className="item">
		  <Link className ="link" to="/products/2">About</Link>
		</div>
		<div className="item">
		  <Link className ="link" to="/products/3">Contact</Link>
		</div>
		
	  </div>
	  <div className="center">
		
		
		<Link className ="link" to="/">LAMASTORE</Link>
		
	  </div>
	  <div className="right">
		<div className="item">
		  <Link className ="link" to="/">Hijab</Link>
		</div>
		<div className="item">
		  <Link className ="link" to="/">Abaya</Link>
		</div>
		<div className="item">
		  <Link className ="link" to="/">Accesorries</Link>
		</div>
		
		<div className="icons">
		  
		<FavoriteBorderOutlinedIcon/>
		  
		  <div className="cartIcon" >
			<ShoppingCartOutlinedIcon/>
			<span>0</span>
		  </div>
		</div>
	  </div>
	</div>
	
  </div>

  );
};

export default Navbar;