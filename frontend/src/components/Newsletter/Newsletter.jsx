import React from 'react';
import "./Newsletter.scss";

const Newsletter = () => {
    return (
        <div className='letter'>
            <div className='left'>Subscribe to our <br /> <span>Newsletter</span></div>
            <div className='right'>
                <input type='email' placeholder='Enter your email' />
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Newsletter;