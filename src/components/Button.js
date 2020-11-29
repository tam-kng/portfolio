import React from 'react'
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const COLORS = ['primary', 'blue', 'red', 'green'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) => {
    // functions to display specific style/size/color wanted
    // check if created button has a style/size/color, if nonepassed, picks first style/size/color
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonStyle : SIZES[0];
    const checkButtonColor = COLORS.includes(buttonSize) ? buttonStyle : null;

    return (
        <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} 
            onClick={onClick} 
            type={type}>{children}
        </button>
    )
}