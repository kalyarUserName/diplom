import './App.css';
import Header from "./components/Header/Header";
import Switcher from "./components/Switcher/Switcher";
import {useState, useEffect} from "react";
import s from "./components/Home/Home.module.css";
import {Grid, IconButton, Paper} from "@mui/material";
import {ChatOutlined} from '@mui/icons-material';
import store from "./store/store";
import {authActionCreator} from "./store/actionCreators/authActionCreator";
import {useDispatch} from "react-redux";

// import {createTheme} from '@mui/system';

function App() {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState('Гость');
    const dispatch = useDispatch();
    let locAuth = localStorage.getItem('auth');
    if (locAuth && !auth)
        setAuth(true);
    // console.log("APP AUTH in start App> ", auth);
    // useEffect(() => {
    //     // locAuth = localStorage.getItem('auth');
    //     if (localStorage.getItem('auth'))
    //     {
    //         //dispatch(authActionCreator());
    //         setAuth(true);
    //         console.log("APP AUTH < ", auth);
    // }}, [localStorage.getItem('auth')]);
    return (
        <div>
            <Header auth={auth} user={locAuth ? JSON.parse(locAuth).currentUser : 'Гость'}/>
            <Grid align="center">
                <Paper elevation={10} className={s.paper}>
                    <Switcher setAuth={setAuth.bind()}/>
                    {/*<IconButton style={{*/}
                    {/*    background: '#1976d2',*/}
                    {/*    position: 'absolute',*/}
                    {/*    bottom: 16,*/}
                    {/*    right: 16,*/}
                    {/*    height: 60,*/}
                    {/*    width: 60*/}
                    {/*}}>*/}
                    {/*    <ChatOutlined style={{*/}
                    {/*        height: 35, width: 35,*/}
                    {/*        color: '#fff'*/}
                    {/*    }}/>*/}
                    {/*</IconButton>*/}
                </Paper>
            </Grid>
        </div>
    );
}

export default App;
