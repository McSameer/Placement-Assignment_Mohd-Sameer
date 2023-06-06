import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (productName, price) => {
    const newItem = {
      productName: productName,
      price: price
    };

    setCartItems([...cartItems, newItem]);

    alert('Item added to cart!');
  };


  const showCart = () => {
    setIsCartOpen(true);
  };

 
  return (
    <div>
      <Navbar cartItems={cartItems} showCart={showCart} />
      <Main addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;
