import React, {useState} from 'react';
import {AppBar, Avatar, Box, Button, Grid, IconButton, Toolbar} from "@mui/material";
import s from './Header.module.css'
import {Link} from "react-router-dom";
import {routes, privateRoutes} from "../../constants/routes";
import store from "../../store/store";
import {getUserFromDBWithoutPass} from "../../constants/users";

const Header = (props) => {
    const [user, setUser] = useState(null);
    const route = props.auth ? privateRoutes : routes;
    let state = store.getState().general;
    let curUser = getUserFromDBWithoutPass(state.currentUser.userName);
    // setUser(getUserFromDBWithoutPass(state.currentUser.userName));
    return (<Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                        <Grid item md={9} xs={5}>
                            {route.map((m) => (
                                <Button key={m.path} variant="h6" component={Link} to={m.path}
                                        sx={{
                                            // flexGrow: 1,
                                            mr: 1,
                                            ml: 1,
                                            paddingTop: 2,
                                            paddingBottom: 2,
                                            paddingLeft: 8,
                                            paddingRight: 8
                                        }}
                                >
                                    {m.desc}
                                </Button>))}
                        </Grid>
                        <Grid item md={3}>
                            {!props.auth ?
                                <div className={s.loginAndReg}>
                                    <Button color="inherit" variant="outlined" component={Link}
                                            to={"/login"}>Войти</Button>
                                    <Button color="inherit" component={Link} to={"/registration"}>Регистрация</Button>
                                </div>
                                : <div>
                                    <IconButton className={s.loginAndReg}>
                                        <Avatar component={Link} to="/myprofile" src={curUser.avatar}/>
                                    </IconButton>
                                </div>}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;