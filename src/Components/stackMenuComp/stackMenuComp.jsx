import React from 'react'
// import style css
import "./stackMenuComp.scss"

function StackMenuComp({imgUrl, menuName, menuDescription }) {
  return (
	<>
	<div className='cart'>
		<img src={imgUrl} alt="burada yemek sekli var" />
		<h5>{menuName}</h5>
		<p>{menuDescription}</p>
	</div>
	  
	</>
  )
}

export default StackMenuComp
