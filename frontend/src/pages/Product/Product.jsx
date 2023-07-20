import React, { useState } from 'react';
import "./Product.scss";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareOutlinedIcon from '@mui/icons-material/CompareOutlined';

function Product() {

  const [imgIndex, setImgIndex] = useState(0);
  const [num, setNum] = useState(1);

  const image = [
    "https://images.pexels.com/photos/17035511/pexels-photo-17035511/free-photo-of-black-and-white-portrait-of-handsome-model.png?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/17035514/pexels-photo-17035514/free-photo-of-studio-shot-of-model-in-striped-shirt.png?auto=compress&cs=tinysrgb&w=600"
  ]
  return (
    <div className='product'>
      <div className='left'>
        <div className='small-img'>
          <div className='small-img1'>
            <img src={image[0]} alt='' onClick={e => setImgIndex(0)} />
          </div>
          <div className='small-img1'>
            <img src={image[1]} alt='' onClick={e => setImgIndex(1)} />
          </div>
        </div>
        <div className='big-img'>
          <img src={image[imgIndex]} alt='' />
        </div>
      </div>
      <div className='right'>
        <div className='title'>
          <h2>Shirt</h2>
          <h3>$19.5</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='value'>
          <button className='box' onClick={() => setNum((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
          <span>{num}</span>
          <button className='box' onClick={() => setNum((prev) => prev + 1)}>+</button>
        </div>
        <div className='cart'>
          <button className='addcart'><ShoppingCartOutlinedIcon /> <span>Add to cart</span></button>
        </div>
        <div className='wish'>
          <button><FavoriteBorderOutlinedIcon /> Add to wishlist</button>
          <button><CompareOutlinedIcon /> Add to compare</button>
        </div>
        <div className='aboutProduct'>
          <span>Vendor: Polo</span>
          <span>Product type: Shirt</span>
          <span>Tag: Shirt, Men, top</span>
        </div>
      </div>
    </div>
  )
}

export default Product;