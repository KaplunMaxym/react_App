import React from 'react';
import classes from "./ButtonOne.module.css";

const ButtonOne = ({children, ...props}) => {
    return (
        <button {...props} className={classes.buttonOne}>
            {children}
        </button>
    );
};

export default ButtonOne;