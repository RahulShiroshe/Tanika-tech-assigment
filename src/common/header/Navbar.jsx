import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [MobileCat, setMobileCat] = useState(false)

  return (
      <header className='header'>
        <div className='container-h d_flex'>
         <div className='navlink'>
            <ul className="link f_flex capitalize cartsy-menu-drawer" >
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/Contact'>Contact</Link>
              </li>
              <li>
                <Link to='/user'> Account</Link>
              </li>
              <li>
                <Link to='/track'>track my order</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
  )
}

export default Navbar
