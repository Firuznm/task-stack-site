import React from 'react'
// import style
import "./style.scss"
// import hamburger menu icons
import { RxHamburgerMenu } from 'react-icons/rx';
// components import
import LinkButtonComp from '../linkButtonComp';


function StackHeader() {
  return (
	<>
	<nav>
		<header>  
	<div className='header-btn'>
        <LinkButtonComp
		title={"ORDER NOW"} 
		classType={"btnYellow"}
		btnUrl={"https://www.ubereats.com/gb/store/stack-shack/H2bcP4P8Ur2hfkQ_WyZtwQ"}
		/>
	</div>
		<a href="/">
		<img src="https://stackshack.co.uk/wp-content/uploads/2023/03/stachshack-logo-updated-1536x218.png" alt="burada loga sekli var" />
		</a>
		<RxHamburgerMenu className='hamburger-menu'/>
		</header>
	</nav>
	</>
  )
}

export default StackHeader


