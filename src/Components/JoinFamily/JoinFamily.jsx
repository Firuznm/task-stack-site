import React from 'react'
// IMPORT COMPONENTS
import ImageDescriptionComp from '../imageDescriptionComp/ImageDescriptionComp'
// import my write data
import { JoinFamilyData } from '../../myWriteSiteDatas/siteData'


function JoinFamily() {
  return (
	<>
	<section id='joinFamily'>
     <ImageDescriptionComp
	 title={JoinFamilyData.header}
	 description={JoinFamilyData.body}
	 image={JoinFamilyData.resImage}
    ClassType={"BgBlack"}
	 />
	</section>
	  
	</>
  )
}

export default JoinFamily
