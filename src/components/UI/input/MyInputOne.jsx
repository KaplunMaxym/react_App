import React from 'react';
import classes from "./MyInput.module.css";

const MyInputOne = (props) => {
    return (
        <input className={classes.MyInputOne} {...props} />
    );
};

export default MyInputOne;