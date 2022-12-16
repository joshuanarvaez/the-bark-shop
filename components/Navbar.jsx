import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from './'
import { useStateContext } from '../context/StateContext';
import Image from 'next/image';
import logo from '../assets/logo.png';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/"><Image src={logo} className="homeLogo" alt="logo" width="200" height="60" style={{cursor: 'pointer'}}/></Link>
      </p>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
      <AiOutlineShopping />
      <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />} 
    </div>
        //only show cart when showCart is set to true - when user clicks it

  )
}

export default Navbar;