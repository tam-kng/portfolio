import React from 'react'
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const COLORS = ['primary', 'blue', 'red', 'green'];

/* Create button component */
export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) => {
    // check, display the wanted style/size/color (if none, shows first style/size/color)
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