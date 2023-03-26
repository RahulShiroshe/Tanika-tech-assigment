import React from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem, LikeItem }) => {
  return (
    <>
      <Head/>
      <Search CartItem={CartItem} LikeItem={LikeItem} />
      <Navbar/>
    </>
  )
}

export default Header
