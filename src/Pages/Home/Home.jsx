import React from 'react'
import Slider from '../../Components/Slider/Slider';
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
const Home = () => {
  return (
<div className='home'>
	<Slider/>
  <FeaturedProducts type="featured"/>
  <FeaturedProducts type="trending"/>
</div>
  )
}

export default Home