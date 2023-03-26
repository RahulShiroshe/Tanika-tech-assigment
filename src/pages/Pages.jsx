import React from "react"
import Shop from "../components/shops/Shop"

const Pages = ({ addToCart, addToLike }) => {
  return (
    <>
      
      <Shop addToCart={addToCart} addToLike={addToLike} />
      
    </>
  )
}

export default Pages
