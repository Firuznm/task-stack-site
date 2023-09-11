import React from 'react'
// import style scss
import "./ImageDescriptionComp.scss"
import LinkButtonComp from '../linkButtonComp'


function ImageDescriptionComp({title,description,image,ClassType=false}) { 

	  let ClassList={ 
		"BgYellow":"bgColor-yellow img-descrition",
		"BgBlack":"bgColor-black img-descrition",      
	}

  return (
	<>
	<div className="container">
	<div className={ClassType ? `${ClassList[ClassType]}`: ""}>
		<div className='description'>
			<h4>{title}</h4>
			<p>{description}</p>
			<div className='btn-menu'>
			<LinkButtonComp 
			title={"CHECK IT OUT"}
			classType={"btnWhtBlack"}
			/>
			</div>
		</div>
		<div className='image'>
		<img src={image} alt="burada stack aid sekil var"/>
		</div>
	</div>
	</div>
	</>
  )
}

export default ImageDescriptionComp
