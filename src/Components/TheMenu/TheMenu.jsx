import React from 'react'
import ImageDescriptionComp from '../imageDescriptionComp/ImageDescriptionComp'
//  my write datas import
import {TheMenu} from "../../myWriteSiteDatas/siteData"

function Menu() {
  return (
	<>
	<section id='theMenu'>
		<ImageDescriptionComp
		   title={TheMenu.header}
		   description={TheMenu.body}
		   image={TheMenu.menuImage}
		   ClassType={"BgYellow"}  
		/>
	</section>
	  
	</>
  )
}

export default Menu
