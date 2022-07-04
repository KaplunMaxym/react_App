import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context";
import ButtonOne from "../button/ButtonOne";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = (event) => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <div className="navbar">
            <div className="navbar-elems">
                {isAuth
                    ?
                    <ButtonOne onClick={logout} >
                        LogOut
                    </ButtonOne>
                    :<br/>
                }
                <Link to="/about" >About</Link>
                <Link to="/posts" >Pages</Link>
            </div>
        </div>
    );
};

export default Navbar;