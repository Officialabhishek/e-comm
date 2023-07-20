import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "../Navbar/Navbar.scss";
import Cart from "../Cart/Cart";

const Navbar = () => {

  const [cart, setCart] = useState(false);

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='name' >Kapde</div>
        <div className='links'>
          <div className='link'> <Link className='llink' to='/'>Home</Link> </div>
          <div className='link'> <Link className='llink' to='/about'>About</Link> </div>
          <div className='link'> <Link className='llink' to='/contact'>Contact</Link> </div>
          <div className='link'> <Link className='llink' to='/store'>Store</Link> </div>
          <div className='icons'>
            {/* <FavoriteBorderIcon /> */}
            <SearchIcon className='cursor' />
            <div className='cartIcon' onClick={() => setCart(!cart)}>
              <ShoppingCartIcon className='cursor' />
              <span>0</span>
            </div>
            <AccountCircleIcon className='cursor' />
          </div>
        </div>
      </div>
      <div className='showCart'>{cart && <Cart />}</div>
    </div>
  )
}

export default Navbar;
