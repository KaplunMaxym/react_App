import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {Navigate} from "react-router";
import {privateRoutes, publicRoutes} from "../router/routes";
import {AuthContext} from "../context/index";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading){
        return <Loader/>
    }

    return (
        <div>
            {isAuth
                ?
                <Routes>
                    {privateRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={<route.component/>}
                            key={route.path}
                        />
                    )}
                    <Route path="/*" element={<Navigate to="/posts" replace/>}/>
                </Routes>
                :
                <Routes>
                    {publicRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={<route.component/>}
                            key={route.path}
                        />
                    )}
                    <Route path="/*" element={<Navigate to="/login" replace/>}/>
                </Routes>
            }
        </div>
    );
};

export default AppRouter;