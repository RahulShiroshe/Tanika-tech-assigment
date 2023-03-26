import React from "react"
import {Link} from "react-router-dom";

const Mobilemenu = ({ CartItem, LikeItem }) => {
      return (
            <div className='mobile-footer'>
                <Link to='/' className="css-fm">
                    <i className="fa fa-home css-j" aria-hidden="true"/>
                    Home
                </Link>
                <Link to='/like' className="css-fm">
                    <i className='fa-regular fa-heart css-j'>
                      <span className="number">{LikeItem.length === 0 ? "0" : LikeItem.length}</span>
                    </i>
                    Like
                </Link>
                <Link to='/cart' className="css-fm">
                    <i className='fa fa-shopping-bag css-j'>
                      <span className="number">{CartItem.length === 0 ? "0" : CartItem.length}</span>
                    </i>
                    Cart
                </Link>
                <Link to="/contact" className="css-fm">
                    <i className='fa fa-user css-j' aria-hidden="true"/>
                    Contact
                </Link>
            </div>
    )
}

export default Mobilemenu
