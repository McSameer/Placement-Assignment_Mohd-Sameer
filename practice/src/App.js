import React, { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productName, price) => {
    const newItem = {
      productName: productName,
      price: price
    };

    setCartItems([...cartItems, newItem]);

    // Alert the user that the item has been added to the cart (you can customize this with a modal or other UI)
    alert('Item added to cart!');
  };

  const clearCart = () => {
    setCartItems([]);
    alert('Cart cleared!');
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Cart ({cartItems.length})</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <h1>Welcome to My E-commerce Website</h1>
          <p>Find the best deals on our wide range of products.</p>
          <a href="#" className="btn">Shop Now</a>
        </section>

        <section id="products">
          <h2>Featured Products</h2>
          <div className="product">
            <img src="product1.jpg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$19.99</p>
            <button className="btn" onClick={() => addToCart('Product 1', 19.99)}>
              Add to Cart
            </button>
          </div>
          <div className="product">
            <img src="product2.jpg" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$29.99</p>
            <button className="btn" onClick={() => addToCart('Product 2', 29.99)}>
              Add to Cart
            </button>
          </div>
          <div className="product">
            <img src="product3.jpg" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$24.99</p>
            <button className="btn" onClick={() => addToCart('Product 3', 24.99)}>
              Add to Cart
            </button>
          </div>
          <div className="product">
            <img src="product4.jpg" alt="Product 4" />
            <h3>Product 4</h3>
            <p>$39.99</p>
            <button className="btn" onClick={() => addToCart('Product 4', 39.99)}>
              Add to Cart
            </button>
          </div>
        </section>

        <section id="cart">
          <h2>Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <span>{item.productName}</span>
                  <span>${item.price}</span>
                </div>
              ))}
              <button className="btn" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          )}
        </section>
      </main>

      <footer>
        <p>&copy; 2023 My E-commerce Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
