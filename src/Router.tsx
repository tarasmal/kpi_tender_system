import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./components/pages/SignUp/SignUp";
import SignIn from "./components/pages/SignIn/SignIn";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/signup'} element={<SignUp />} />
                <Route path={'/signin'} element={<SignIn />} />
                <Route path={'*'} element={<SignUp />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
