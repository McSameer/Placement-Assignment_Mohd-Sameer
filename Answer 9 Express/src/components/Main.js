import React from 'react';
import img from '../images/product.jfif';

function Main({ addToCart }) {
  return (
    <main>
      <section id="hero">
        <h1>Welcome to My E-commerce Website</h1>
        <p>Find the best deals on our wide range of products.</p>
        <a href="#" className="btn">Shop Now</a>
      </section>

    <h2>Featured Products</h2>
      <section id="products">
        <div className="product">
          <img src={img} alt="Product 1" />
          <h3>Product 1</h3>
          <p>$2539.99</p>
          <button className="btn" onClick={() => addToCart('Product 1', 19.99)}>
            Add to Cart
          </button>
        </div>
        <div className="product">
          <img src={img} alt="Product 2" />
          <h3>Product 2</h3>
          <p>$3129.99</p>
          <button className="btn" onClick={() => addToCart('Product 2', 29.99)}>
            Add to Cart
          </button>
        </div>
        <div className="product">
          <img src={img} alt="Product 3" />
          <h3>Product 3</h3>
          <p>$2993.99</p>
          <button className="btn" onClick={() => addToCart('Product 3', 24.99)}>
            Add to Cart
          </button>
        </div>
        <div className="product">
          <img src={img} alt="Product 4" />
          <h3>Product 4</h3>
          <p>$3259.99</p>
          <button className="btn" onClick={() => addToCart('Product 4', 39.99)}>
            Add to Cart
          </button>
        </div>
      </section>
    </main>
  );
}

export default Main;
