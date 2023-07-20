import React from 'react';

import Slider from "../../components/Slider/Slider";
import './Home.scss';
import Featured from '../../components/Featured/Featured';
import Categories from '../../components/Categories/Categories';
import Newsletter from '../../components/Newsletter/Newsletter';

function Home() {
  return (
    <div className='home'>
      <Slider />
      <Featured title="Featured Items" />
      <Categories />
      <Featured title="Trending Items" />
      <Newsletter />
    </div>
  );
}

export default Home;