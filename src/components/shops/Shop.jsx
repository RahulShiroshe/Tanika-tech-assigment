import React from "react"
import ShopCart from "./ShopCart"
import "./style.css"

const Shop = ({ addToCart, addToLike }) => {
  return (
      <section className='shop'>
        <div className='container '>
          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Shop</h2>
              </div>
              <div className='heading-right row '>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} addToLike={addToLike} />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Shop
