import React, {useState} from 'react';
import {Button, Checkbox, FormControlLabel, FormGroup, Grid, Link, Paper, TextField, Typography} from "@mui/material";
import s from "./Registration.module.css";
import {Link as LinkRouterDom, Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {registerActionCreator} from "../../store/actionCreators/authActionCreator";

const Registration = (props) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [teacher, setTeacher] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const handleSubmit = (e) => {
        const regData = {
            name: name,
            userName: userName,
            password: password,
            teacher: teacher
        };
        console.log(regData)
        dispatch(registerActionCreator(regData));
        props.setAuth(true);
        setIsAuth(true);
        localStorage.setItem('auth', JSON.stringify(regData));
        return <Navigate to={"/myprofile"}/>
    };

    return (
        <div>
            <Grid align="left">
                <Paper elevation={10} className={s.pagerStyle}>
                    <Grid align="center">
                        <h2>Регистрация</h2>
                    </Grid>

                    <TextField label="Имя пользователя" placeholder="Введите имя пользователя"
                               margin="dense" fullWidth required onChange={(e) => setUserName(e.target.value)}
                               value={userName}/>
                    <TextField margin="dense" label="Фамилия Имя Отчество" placeholder="Введите Фамилию Имя Отчество"
                               type="email"
                               fullWidth required onChange={(e) => setName(e.target.value)} value={name}/>
                    <TextField margin="dense" label="Пароль" placeholder="Введите пароль" type="password"
                               fullWidth required onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <TextField margin="dense" label="Повтор пароля" placeholder="Повторите пароль"
                               type="password"
                               fullWidth required/>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={teacher} onChange={(e) => setTeacher(e.target.checked)}/>}
                            label="Вы учитель"/>
                    </FormGroup>
                    <Button className={s.button} type="submit" color="primary" variant="contained"
                            onClick={(e) => handleSubmit(e)}
                            fullWidth>Войти</Button>
                    <Typography className={s.existAcc}>
                        Уже есть аккаунт?
                        <Link component={LinkRouterDom} to="/login"> Войти </Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    );
};

export default Registration;