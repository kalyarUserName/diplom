import React, {useState} from 'react';
import {Button, Checkbox, FormControlLabel, FormGroup, Grid, Link, Paper, TextField, Typography} from "@mui/material";
import s from "./Registration.module.css";
import {Link as LinkRouterDom, Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {registerActionCreator} from "../../store/actionCreators/authActionCreator";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const Registration = (props) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [teacher, setTeacher] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const handleSubmit = (e) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log('user from Firebase', user);
                const regData = {
                    id: user.uid,
                    name: name,
                    userName: userName,
                    email: email,
                    password: password,
                    teacher: teacher,
                    token: user.accessToken,
                };
                dispatch(registerActionCreator(regData));
                props.setAuth(true);
                setIsAuth(true);
                localStorage.setItem('auth', JSON.stringify(regData));
                return <Navigate to={"/myprofile"}/>
            })
            .catch((error) => {
                alert('Пользовательные данные некорректны');
            });

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
                               type="text"
                               fullWidth required onChange={(e) => setName(e.target.value)} value={name}/>
                    <TextField margin="dense" label="Email" placeholder="Введите email"
                               type="email"
                               fullWidth required onChange={(e) => setEmail(e.target.value)} value={email}/>
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
                            fullWidth>Регистрация</Button>
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