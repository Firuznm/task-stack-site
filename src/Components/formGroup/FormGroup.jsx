import React from 'react'
// import style
import "./FormGroup.scss"


function FormGroup() {
  return (
	<>
	<section id='form-group'>
		<div className="container">
			<div className="form">
				<h2>SIGN UP TO OUR NEWSLETTER</h2>
				<h6>DON'T WORRY WE WILL NOT SPAM YOU</h6>
				<form action="">
					<div className='inp'>
						<label htmlFor="name">NAME</label>
						<input type="text" />
					</div>
					<div className='inp'>
						<label htmlFor="email">EMAIL</label>
						<input type="email" />
					</div>
					<div className='inp'>
						<label htmlFor="tel">TELEPHONE</label>
						<input type="tel"  placeholder='07'/>
					</div>
					<div className='inp'>
						<label htmlFor="name">WHEN IS IT YOUR BIRTHDAY?</label>
						<input type="date" />
					</div>
				</form>
			</div>
		</div>
	</section>
	  
	</>
  )
}

export default FormGroup
