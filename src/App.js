import './App.css';
import Header from "./components/Header/Header";
import Switcher from "./components/Switcher/Switcher";
import {useState, useEffect} from "react";
import s from "./components/Home/Home.module.css";
import {Grid, IconButton, Paper} from "@mui/material";
import {ChatOutlined} from '@mui/icons-material';
import store from "./store/store";

// import {createTheme} from '@mui/system';

function App() {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState('Гость');
    let locAuth = localStorage.getItem('auth');
    ;
    //setIsAuth(store.getState().general.authS)
    // const theme = createTheme({
    //     palette: {
    //         primary: '#1976d2',
    //         secondary: '#fff',
    //     },
    // });
    useEffect(() => {
        // locAuth = localStorage.getItem('auth');
        if (localStorage.getItem('auth'))
            setAuth(true);
    }, [localStorage.getItem('auth')]);
    return (
        <div>
            <Header auth={auth} user={JSON.parse(locAuth).currentUser}/>
            <Grid align="center">
                <Paper elevation={10} className={s.paper}>
                    <Switcher/>
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
