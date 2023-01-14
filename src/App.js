
import './App.css';

import {  RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Products from './Pages/Products/Products';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';




const Layout = () =>{
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}




const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
    ]
  },



])
function App() {
 
  
  return (
    <div>
  <RouterProvider router={router} />
  </div>

  );
}

export default App;
