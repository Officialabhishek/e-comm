import React from 'react'
import "./Categories.scss"

const Categories = () => {

    const data = [
        "https://images.pexels.com/photos/3019349/pexels-photo-3019349.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=600",
    ];

    return (
        <div className='categories'>
            <div className='col'>
                <div className='row'>
                    <img src={data[0]} alt='' />
                    <button>Men</button>
                </div>
                <div className='row'>
                    <img src={data[1]} alt='' />
                    <button>women</button>
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    <img src={data[2]} alt='' />
                    <button>Sale</button>
                </div>
            </div>
            <div className='col col-large'>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <img src={data[3]} alt='' />
                            <button>Kids</button>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <img src={data[4]} alt='' />
                            <button>Accessories</button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <img src={data[5]} alt='' />
                    <button>New Arrivals</button>
                </div>
            </div>
        </div>
    )
}

export default Categories;