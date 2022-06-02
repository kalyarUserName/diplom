import React, {useEffect, useState} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import UserProfile from "../Profile/UserProfile";
import Home from "../Home/Home";
import About from "../About/About";
import HowToUse from "../HowToUse/HowToUse";
import Chat from "../Chat/Chat";
import Table from "../Table/Table";
import Chats from "../Chat/Chats";
import Tables from "../Table/Tables";
import MyProfileContainer from "../Profile/MyProfileContainer";
import store from "../../store/store";

const Switcher = () => {
    let authS = store.getState().general.authS;
    const [auth, setAuth] = useState(authS);
    // useEffect(()=> {
    //     if(localStorage.getItem('auth'))
    //         setAuth(true);
    // },[localStorage.getItem('auth')]);
    // console.log('Свитчер локал = ',localStorage.getItem('auth'));
    // if(localStorage.getItem('auth'))
    //     setAuth(true);
    //console.log("свитчер auth = ", auth);
    return auth ? (<Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/howtouse" element={<HowToUse/>}/>
                <Route path="/chats" element={<Chats/>}>
                    <Route path=":chatId" element={<Chat/>}/>
                </Route>
                <Route path="/tables" element={<Tables/>}>
                    <Route path=":tableId" element={<Table/>}/>
                </Route>
                <Route path="/myprofile" element={<MyProfileContainer/>}/>
                <Route path={`/profile`} element={<UserProfile/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Navigate replace to="/myprofile"/>}/>
                <Route path="/registration" element={<Navigate replace to="/myprofile"/>}/>
                <Route path="*" element={<div>Страница не найдена!</div>}/>
            </Routes>
        )
        : (<Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/howtouse" element={<HowToUse/>}/>
            <Route path="/myprofile" element={<Navigate replace to="/login"/>}/>
            <Route path="/profile" element={<UserProfile/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<div>Страница не найдена!</div>}/>
        </Routes>);
};

export default Switcher;