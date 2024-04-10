import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styles from './App.module.css';

// Import your existing components
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/cart';
import Order from './Components/order/order';
import Product from './pages/Product';
import { ProductDetails } from './pages/ProductDetails';

// Import UserContextProvider if not already imported
import { UserContextProvider } from './userContext';

// Import the CSS file
import './App.module.css';

function App() {
  const [showWallpaper, setShowWallpaper] = useState(true);

  const handleAnimationEnd = () => {
    setShowWallpaper(false);
  };

  const router = createBrowserRouter([
    // Your routes configuration
    {
      path: '/',
      element: (
        <UserContextProvider>
          <Navbar />
          <Home />
        </UserContextProvider>
      )
    },
    {
      path: '/login',
      element: (
        <UserContextProvider>
          <Navbar />
          <Login />
        </UserContextProvider>
      )
    },
    {
      path: '/signup',
      element: (
        <UserContextProvider>
          <Navbar />
          <SignUp />
        </UserContextProvider>
      )
    },
    {
      path: '/cart',
      element: (
        <UserContextProvider>
          <Navbar />
          <Cart />
        </UserContextProvider>
      )
    },
    {
      path: '/orders',
      element: (
        <UserContextProvider>
          <Navbar />
          <Order />
        </UserContextProvider>
      )
    },
    {
      path: '/product',
      children: [
        {
          index: true,
          element: (
            <UserContextProvider>
              <Navbar />
              <Product />
            </UserContextProvider>
          )
        },
        {
          path: ':productId',
          element: (
            <UserContextProvider>
              <Navbar />
              <Product />
            </UserContextProvider>
          )
        }
      ]
    }
  ]);

  return (
    <div className={styles.main}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Busy Buy</title>
        <meta name="description" content="Busy buy is an e-commerce website where we purchase any items." />
      </Helmet>

      {/* Render the WallpaperComponent */}
      {showWallpaper && (
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
      )}

      {/* Render the router provider */}
      {!showWallpaper && <RouterProvider router={router} />}
    </div>
  );
}

export default App;
