import React, {useContext} from 'react';
import MyInputOne from "../components/UI/input/MyInputOne";
import ButtonOne from "../components/UI/button/ButtonOne";
import {AuthContext} from "../context/index"

const LoginPage = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const submit = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={submit}>
                <MyInputOne type="text" placeholder="login"/>
                <MyInputOne type="password" placeholder="pas"/>
                <ButtonOne>LogIn</ButtonOne>
            </form>
            <br/>
            <h4>Just Click "LogIn" btn</h4>
        </div>
    );
};

export default LoginPage;