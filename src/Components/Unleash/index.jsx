import React from 'react'
// import style css
import "./style.scss"
import LinkButtonComp from '../linkButtonComp'

function Unlesh() {
  return (
	<>
	<section id='unlaesh'>
    <div className="container">
		<div className='unlaesh-header'>
           <h2>UNLEASH THE FLAVOUR</h2>
		   <p>Stack Shack is a unique and independent quick service brand. Stack Shack burgers and shakes are made pretty hot and tasty. The ultimate “melt in your mouth” experience. We are a fast-casual operation with dine in and take-away elements.</p>
		   <button className='btn'>
		    <LinkButtonComp
			 title={"SIGN UP TO OUR NEWSLETTER"}
			 classType={"btnBlack"}
			 />
			 </button>
		</div>
	</div>
	</section>
	  
	</>
  )
}

export default Unlesh
