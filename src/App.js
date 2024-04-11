import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css'; // Import the regular CSS file

// Import your existing components
import { Navbar } from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/cart';
import Order from './Components/order/order';
import Product from './pages/Product';
import { ProductDetails } from './pages/ProductDetails';

// Import UserContextProvider if not already imported
import { UserContextProvider } from './userContext';
import { Header } from './Components/Home/Header';
import { Control } from './Components/route/Control';
import Search from './Components/Home/Search';

function App() {
  const [showWallpaper, setShowWallpaper] = useState(true);

  const handleAnimationEnd = () => {
    setShowWallpaper(false);
  };

  return (
    <div className="main"> {/* Update class name */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Busy Buy</title>
        <meta name="description" content="Busy buy is an e-commerce website where we purchase any items." />
      </Helmet>

      {/* Render the WallpaperComponent */}
      {/* {showWallpaper && (
        <div
          className="wallpaper-container"
          onAnimationEnd={handleAnimationEnd}
        >
          <div
            className="wallpaper fade-in"
            style={{
              backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWg0pFUup4I5zk6ofaEYAXjkv1E6K_fVbAwdGeU6HdOGjnehwqj4vVvDxTbqpL1VEn5yg&usqp=CAU')`
            }}
          />
        </div>
      )} */}

      {/* Render the router provider */}
      <Router>
        <UserContextProvider>
       <Navbar/>
          <Routes>
           
            <Route path="/"  element={<Control/>} />
            <Route path='/search' element={Search}/>
            
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/product" element={<Product />} >
            <Route path="/product/:productId" element={<ProductDetails />} />
          </Route>
          </Routes>
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;
