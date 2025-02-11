import React from "react";
import './mystyles.css';
// Inline StyleSheet
const heading ={
    fontSize:'30px',
    color:'blue',
}
// Functional component named Sheet1 that receives props
function Sheet1(props) {
    // Assigns 'primary' as a class name if props.primary is true; otherwise, an empty string
    let className = props.primary ? 'primary' : '';

    return (
        <div>
            {/* Applies a dynamic class and a fixed class to the h1 element */}
            <h1 className={`${className} font-xl`}>StyleSheet</h1>

            {/* Applies an inline style (assuming 'heading' is defined somewhere in the code) */}
            <h1 style={heading}>HI Everyone</h1> 
        </div>
    );
}
 
export default Sheet1;