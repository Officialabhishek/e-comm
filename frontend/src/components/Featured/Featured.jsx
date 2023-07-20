import React from 'react'
import "./Featured.scss"
import Card from "../Card/Card";

const Featured = ({ title }) => {

    const items = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Shirt",
            oldPrice: 150,
            newPrice: 100
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/2881785/pexels-photo-2881785.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Pant",
            oldPrice: 250,
            newPrice: 200
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Kurti",
            oldPrice: 200,
            newPrice: 180
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Hats",
            oldPrice: 80,
            newPrice: 50
        }
    ];


    return (
        <div className='featuredItems'>
            <div className='top'>
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='bottom'>
                {items.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default Featured;