import React from 'react'

import"./ProductUI.css"

export const ProductUI = () => {
  return (
   

    <div className="products-container">

      <div className="products-heading">
        <h2>Explore Products</h2>
        <p>Discover amazing products for your needs.</p>
      </div>

      <div className="products-grid">

        {/* Product Card 1 */}
        <div className="product-card">

          <div className="product-image">
            <img
              src="https://dummyjson.com/image/400x300/eeeeee/333333?text=Product"
              alt="Product"
            />
          </div>

          <div className="product-content">
            <span className="product-category">Electronics</span>

            <h3>Wireless Headphones</h3>

            <p>
              High quality wireless headphones with amazing sound.
            </p>

            <div className="product-bottom">
              <h4>$99.99</h4>
              <button>View Details</button>
            </div>
          </div>

        </div>


        {/* Product Card 2 */}
        <div className="product-card">

          <div className="product-image">
            <img
              src="https://dummyjson.com/image/400x300/eeeeee/333333?text=Product"
              alt="Product"
            />
          </div>

          <div className="product-content">
            <span className="product-category">Fashion</span>

            <h3>Classic T-Shirt</h3>

            <p>
              Comfortable and stylish everyday casual wear.
            </p>

            <div className="product-bottom">
              <h4>$29.99</h4>
              <button>View Details</button>
            </div>
          </div>

        </div>


        {/* Product Card 3 */}
        <div className="product-card">

          <div className="product-image">
            <img
              src="https://dummyjson.com/image/400x300/eeeeee/333333?text=Product"
              alt="Product"
            />
          </div>

          <div className="product-content">
            <span className="product-category">Beauty</span>

            <h3>Beauty Cream</h3>

            <p>
              A premium skincare product for daily use.
            </p>

            <div className="product-bottom">
              <h4>$49.99</h4>
              <button>View Details</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ProductUI