import React from "react";
// import style
import "./style.scss";

function LinkButtonComp({ title, btnUrl, classType }) {
	

	let classList = {
		"btnYellow": 'link-btn yellow-white',
		"btnWhite": "link-btn white-yellow",
		"btnBlack":"link-btn black-yellow",
		"btnWhtBlack":"link-btn white-black",
	}
     
    return (  
        <>
            <a className={classType ? `${classList[classType]}` : ""}
			target="_blank"
			href={btnUrl ? `${btnUrl}` : null} 
			>
                {title}
            </a>
        </>
    );
}

export default LinkButtonComp;

// let colorList = {
	// 	'black': '#000',
	// 	'white': '#fff',
	// 	'yellow': 'orange'
	// };

// style={{ 'background': `${colorType ? colorList[colorType] : 'orange'}` }}