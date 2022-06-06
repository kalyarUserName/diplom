import React, {useState} from 'react';
import {AppBar, Avatar, Box, Button, IconButton, Toolbar} from "@mui/material";
import s from './Header.module.css'
import {Link} from "react-router-dom";
import {routes, privateRoutes} from "../../constants/routes";
import {useDispatch} from "react-redux";

const Header = (props) => {
    const [user, setUser] = useState(null);
    const route = props.auth ? privateRoutes : routes;

    return (<Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    {route.map((m) => (
                        <Button key={m.path} variant="h6" component={Link} to={m.path}
                                sx={{
                                    // flexGrow: 1,
                                    mr: 5,
                                    ml: 5,
                                    paddingTop: 1,
                                    paddingBottom: 1
                                }}
                        >
                            {m.desc}
                        </Button>))}
                    {!props.auth ?
                        <div>
                            <Button color="inherit" variant="outlined" component={Link} to={"/login"}>Войти</Button>
                            <Button color="inherit" component={Link} to={"/registration"}>Регистрация</Button>
                        </div>
                        : <div>
                            <IconButton className={s.loginAndReg}>
                                <Avatar component={Link} to="/myprofile">{user}</Avatar>
                            </IconButton>
                        </div>}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;