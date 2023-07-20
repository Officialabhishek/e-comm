import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./Cart.scss";

const Cart = () => {

    const cartitem = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Shirt",
            descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            oldPrice: 150,
            newPrice: 100
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/2881785/pexels-photo-2881785.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Pant",
            descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            oldPrice: 250,
            newPrice: 200
        },
    ];

    return (
        <div className='cartadded'>
            <h2>Items in your cart</h2>
            {cartitem.map((item) => (
                <div className='itemdetail'>
                    <div className='item-img'><img src={item.img} alt='' /></div>
                    <div className='item-detail'>
                        <div className='title'>{item.name}</div>
                        <div className='detail'>
                            <p>{item.descr.substring(0, 100)}</p>
                            <span><DeleteOutlineIcon /></span>
                        </div>
                        <div className='xprice'>1 x ${item.newPrice}</div>
                    </div>
                </div>
            ))}
            <div className='subtotal'>
                <span>Subtotal</span>
                <span>$120</span>
            </div>
            <div className='checkout'>
                <button>Proceed to checkout</button>
            </div>
            <div className='reset'>Reset cart</div>

        </div>
    )
}

export default Cart;