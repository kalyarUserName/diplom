import './App.css';
import Header from "./components/Header/Header";
import Switcher from "./components/Switcher/Switcher";
import {useState} from "react";
import s from "./components/Home/Home.module.css";
import {Grid, Paper} from "@mui/material";
import {authActionCreator} from "./store/actionCreators/authActionCreator";
import {useDispatch, useStore} from "react-redux";

import {collection, doc, setDoc, getDoc} from "firebase/firestore";
import {db} from "./firebase";
import {getTask, getUserName, messages, users} from "./constants/users";
import {tasks} from "./constants/table";


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

    // async function addDataToDB(event) {
    //     // const usersRef = collection(db, "users");
    //     // const usersRef = collection(db, "dialogs");
    //     const tasksRef = collection(db, "tasks");
    //     users.forEach(async (user)=> {
    //         await setDoc(doc(tasksRef, user.userName ), {
    //             tasks:
    //                 getTask(user.id)
    //         })});
    // users.forEach(async (user)=> {
    //     await setDoc(doc(usersRef, user.userName ), {
    //         id: user.id,
    //         userName: user.userName,
    //         name: user.name,
    //         email: user.email,
    //         password: user.password,
    //         Teacher: user.Teacher,
    //         aboutUser: user.aboutUser,
    //         avatar: user.avatar,
    //     });
    // messages.forEach(async (mes)=>{
    //     await setDoc(doc(usersRef, mes.userfrom.id ), {
    //                messages: []
    //             });
    // })
    // })
    // await setDoc(doc(usersRef, 'zavr'), {
    //     messages: messages
    // });
    // await setDoc(doc(usersRef, 'mayer'), {
    //     messages: messages
    // });

    // }

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
                    {/*<button onClick={(event) => addDataToDB(event)}>add to db</button>*/}
                </Paper>
            </Grid>
        </div>
    );
}

export default App;
