import './App.css';
import Header from "./components/Header/Header";
import Switcher from "./components/Switcher/Switcher";
import {useState} from "react";
import s from "./components/Home/Home.module.css";
import {Grid, Paper} from "@mui/material";
import {authActionCreator} from "./store/actionCreators/authActionCreator";
import {useDispatch, useStore} from "react-redux";

function App() {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState('');
    const store = useStore();
    const dispatch = useDispatch();
    let locAuth = localStorage.getItem('auth');
    if (locAuth && !auth) {
        let AuthUser = JSON.parse(locAuth);
        dispatch(authActionCreator({user: AuthUser.user, password: AuthUser.password}));
        setAuth(store.getState().general.authS);
        if (!store.getState().general.authS) {
            localStorage.removeItem('auth')
        }
    }
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
