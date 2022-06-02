import React from 'react';
import {Button, Grid, Link, Paper, TextField, Typography} from "@mui/material";
import s from "./Registration.module.css";
import {Link as LinkRouterDom, useNavigate} from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Grid align="left">
                <Paper elevation={10} className={s.pagerStyle}>
                    <Grid align="center">
                        <h2>Регистрация</h2>
                    </Grid>
                    <TextField label="Имя пользователя" placeholder="Введите имя пользователя"
                               margin="dense" fullWidth required/>
                    <TextField margin="dense" label="Email" placeholder="Введите email" type="email"
                               fullWidth required/>
                    <TextField margin="dense" label="Пароль" placeholder="Введите пароль" type="password"
                               fullWidth required/>
                    <TextField margin="dense" label="Повтор пароля" placeholder="Повторите пароль"
                               type="password"
                               fullWidth required/>
                    <Button className={s.button} type="submit" color="primary" variant="contained"
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