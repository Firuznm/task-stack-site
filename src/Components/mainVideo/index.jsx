import React from 'react'
// import style scss
import "./style.scss"
import LinkButtonComp from '../linkButtonComp'

import MainImageMobil from "../../assets/images/stackMenuImage.jpg"

function MainVideo() {
  return (
	<>
	<section id='main-video'>
		<video className='video' autoPlay loop muted>  
			<source  src='/stackVideo.mp4'/>
		</video>
		<div className='mobil-main-image'>
			<img src={MainImageMobil} alt="burada main image var" />
		</div>
		<div className='overlay'>
			<h1>TODAY'S A STACKIN' DAY</h1>
			<h6>Secret family recipes are the stuff of legends and Stack Shack burger blend is no exception.</h6>
			<LinkButtonComp 
			title={"ORDER ONLINE"}
			classType={"btnWhite"}
			btnUrl={"https://www.ubereats.com/gb/store/stack-shack/H2bcP4P8Ur2hfkQ_WyZtwQ"}
			/>
		</div>
	</section>
	  
	</>
  )
}

export default MainVideo
