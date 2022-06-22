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
import {useStore} from "react-redux";
import NotFound from "../NotFound/NotFound";

//Компонент, осуществляющий маршрутизацию по различным компонентам, в зависимости от url
// без перезагрузки страницы
const Switcher = (props) => {
    const store = useStore();
    let authS = store.getState().general.authS;
    const [auth, setAuth] = useState(authS);
    let dialog = store.getState().dialog;

    if (authS && !auth)
        setAuth(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setAuth(true);
        }
    }, [localStorage.getItem('auth')]);

    return auth ? (
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/howtouse" element={<HowToUse/>}/>
                <Route path="/chats" element={<Chats messages={dialog.messages} users={store.getState().profile.users}/>}>
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
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        )
        : (<Routes>
            <Route path="/login" element={<Login setAuth={props.setAuth}/>}/>
            <Route path="/registration" element={<Registration setAuth={props.setAuth}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/howtouse" element={<HowToUse/>}/>
            <Route path="/myprofile" element={<Navigate replace to="/login"/>}/>
            <Route path="/profile" element={<UserProfile/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>);
};

export default Switcher;