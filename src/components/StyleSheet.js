import React from "react";

// const heading = {
//     fontSize: '72px',
//     color: 'yellow',
// }

// function StyleSheet(props) {
//     return (
//         <div>
//             <h1 style={heading}>Stylesheets</h1>
//         </div>
//     )
// }

// export default StyleSheet

import './MyStyles.css'

function StyleSheet(props){
    let className = props.secondary ? 'secondary' : ''
    return  (
        <div>
            <h1 className={`primary ${className} font-xl`}>Stylesheets</h1>
        </div>
    )
}

export default StyleSheet