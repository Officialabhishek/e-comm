import React, { useState } from 'react'
import "./Products.scss";
import { useParams } from "react-router-dom";

import ItemList from "../../components/ItemList/ItemList";

function Products() {

  const param = parseInt(useParams().id);

  const [currRange, setCurrRange] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className='products'>
      <div className='pricing'>
        <div className='category'>
          <h2>Item Categories</h2>
          <div>
            <input type='checkbox' id='1' value={1} />
            <label htmlFor='1'>Shirts</label>
          </div>
          <div>
            <input type='checkbox' id='2' value={2} />
            <label htmlFor='2'>Jeans</label>
          </div>
          <div>
            <input type='checkbox' id='3' value={3} />
            <label htmlFor='3'>Hats</label>
          </div>
        </div>
        <div className='filter'>
          <h2>Filter by Price</h2>
          <div>
            <span>$0</span>
            <input type='range' min={0} max={1000} onChange={(e) => setCurrRange(e.target.value)} />
            <span>${currRange}</span>
          </div>
        </div>
        <div className='sort'>
          <h2>Sort by</h2>
          <div>
            <input type='radio' id='asc' value='asc' onChange={(e) => setSort("asc")} />
            <label htmlFor="asc">Price (low to high)</label>
          </div>
          <div>
            <input type='radio' id='desc' value='desc' onChange={(e) => setSort("desc")} />
            <label htmlFor="desc">Price (high to low)</label>
          </div>
        </div>
      </div>
      <div className='listing'>
        <div className='fixed-image'>
          <img src='https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        </div>
        <div className='list-item'>
          <ItemList param={param} currRange={currRange} sort={sort} />
        </div>
      </div>
    </div>
  )
}

export default Products;
