import React from 'react'
// import style css
import "./StackMenu.scss"
// component import
import StackMenuComp from '../stackMenuComp/stackMenuComp'
// my write data import
import { MenuListDatas} from '../../myWriteSiteDatas/siteData'
import LinkButtonComp from '../linkButtonComp';
console.log(MenuListDatas);

function StackMenu() {
  return (
	<>
	<section id='stackMenu'>
		<div className="container">
			<div className='menu'>
				<h2>TODAY'S A STACKIN' DAY</h2>
			    <LinkButtonComp
				  title={"VIEW OUR MENU"}
				  classType={"btnBlack"}
				/>
				
				<div className='menu-list'>
					{
						MenuListDatas.map( item => (
                       <StackMenuComp
					    key={item.id}
						imgUrl={item.image}
						menuName={item.title}
						menuDescription={item.body}
						/>
						))
					}
				</div>
				
			</div>
		</div>
	</section>
	  
	</>
  )
}

export default StackMenu
