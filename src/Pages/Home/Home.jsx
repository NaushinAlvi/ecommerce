import React from 'react'
import Slider from '../../Components/Slider/Slider';

const Home = () => {
  return (
<div className='home'>
	<Slider/>
  <FeatureProducts type="featured"/>
  <FeatureProducts type="trending"/>
</div>
  )
}

export default Home