import React, {useState} from 'react';
import {Avatar, Typography, Box, Grid, Paper, TextField, Button} from "@mui/material";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {StaticDatePicker} from '@mui/x-date-pickers/StaticDatePicker';
import s from './MyProfile.module.css'
import TeacherProfile from "./TeacherProfile";
import StudentProfile from "./StudentProfile";
import store from "../../store/store";
import {getUserFromDBWithoutPass} from "../../constants/users";
import {useDispatch} from "react-redux";
import {logoutActionCreator} from "../../store/actionCreators/authActionCreator";
import {Navigate} from "react-router-dom";

const MyProfile = (props) => {
    let state = store.getState().general;
    const [isTeacher, setTeacher] = useState(state.Teacher);
    const [value, setValue] = React.useState(new Date());
    console.log("MYPROFILE GEN", state);
    let curUser = getUserFromDBWithoutPass(state.currentUser.userName);
    console.log("MYPROFILE curUser", curUser);
    const [auth, setAuth] = useState(false);
    const addStudent = () => {

    }
    let dispatch = useDispatch();
    const logout = () => {
        dispatch(logoutActionCreator())
        return <Navigate to={"/login"}/>
    }
    return (
        <Box>
            <Grid container spacing={4}>
                <Grid container md={4} direction="column" spacing={3} className={s.gridContainer}>
                    <Grid item>
                        <Paper className={s.paper} elevation={5}>
                            <Avatar
                                alt="Avatar"
                                variant="circular"
                                sx={{
                                    width: 200, height: 200, mb: 3
                                }}
                            />
                            <Typography align="center" variant="h5">
                                <b>{curUser.name}</b>
                            </Typography>
                            <Typography align="justify" variant="h6">
                                {curUser.aboutUser.kafedra}
                            </Typography>
                            {isTeacher ? <div>
                                <Typography align="justify" variant="h6">
                                    Должность
                                </Typography>
                                <Typography align="justify" variant="h6">
                                    Звание
                                </Typography>
                            </div> : <div></div>
                            }
                            <Button variant="outlined" onClick={logout}>
                                Выйти
                            </Button>
                        </Paper>
                    </Grid>

                    <Grid item>
                        <Paper className={[s.paper, s.calendarPaper].join(' ')} elevation={5}>
                            <LocalizationProvider dateAdapter={AdapterDateFns} className={s.calendar}>
                                <StaticDatePicker
                                    displayStaticWrapperAs="desktop"
                                    openTo="day"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid item xs={6} md={8}>
                    <Paper className={s.paper} elevation={5}>
                        <Typography variant="h5" align="center">
                            Южный Федеральный Университет
                        </Typography>

                        {
                            isTeacher ? <div>
                                    <Button variant="outlined" onClick={addStudent}>
                                        Добавить ученика
                                    </Button>
                                    <TeacherProfile users={props.users}/>
                                </div> :
                                <StudentProfile users={props.users} me={curUser}/>
                        }
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MyProfile;