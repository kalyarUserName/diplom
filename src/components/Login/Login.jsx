import React, {useState} from 'react';
import {Avatar, Button, Grid, Paper, TextField, Typography, Link} from "@mui/material";
import s from "./Login.module.css"
import {LockOutlined} from "@mui/icons-material";
import {Link as LinkRouterDom, Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authActionCreator} from "../../store/actionCreators/authActionCreator";
import store from "../../store/store";

const Login = (props) => {
    const dispatch = useDispatch();
    const [User, setUser] = useState(store.getState().general);
    const [isAuth, setIsAuth] = useState(false);
    const [regData, setRegData] = useState({
        user: "",
        password: "",
        email: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setRegData({...regData, [name]: value});
    };
    const handleSubmit = () => {
        dispatch(authActionCreator(regData));
        setUser(store.getState().general);
        // console.log("LOGIN auth before", isAuth, regData)
        setIsAuth(User.authS);
        // console.log("LOGIN auth before", isAuth, regData)
        props.setAuth(true);
        localStorage.setItem("auth", JSON.stringify(regData));

    };
    if(isAuth) {
        console.log("LOGIN isAUTH", isAuth, regData)
        localStorage.setItem("auth", JSON.stringify(regData));
        return <Navigate to={"/myprofile"}/>
    }
    return (
        <div>
            <Grid align="left">
                <Paper elevation={10} className={s.pagerStyle}>
                    <Grid align="center">
                        <Avatar className={s.avatarLock}><LockOutlined/></Avatar>
                        <h2>Вход в DiplomaHelper</h2>
                    </Grid>
                    <TextField onChange={handleChange} name="user" margin="dense" label="Имя пользователя"
                               placeholder="Введите имя пользователя"
                               fullWidth required/>
                    <TextField onChange={handleChange} name="email" margin="dense" label="Email"
                               placeholder="Введите email"
                               fullWidth required/>
                    <TextField onChange={handleChange} name="password" margin="dense" label="Пароль"
                               placeholder="Введите пароль" type="password"
                               fullWidth required/>
                    {/*<FormControlLabel control={*/}
                    {/*    <Checkbox name="checkedB"*/}
                    {/*              color="primary"*/}
                    {/*    />*/}
                    {/*} label="Запомнить пароль"/>*/}
                    <Button className={s.button} onClick={handleSubmit} type="submit" color="primary"
                            variant="contained" fullWidth>
                        Войти
                    </Button>
                    <Typography className={s.createAcc}>
                        Нет аккаунта?
                        <Link component={LinkRouterDom} to="/registration"> Зарегистрировать</Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    );
};

export default Login;