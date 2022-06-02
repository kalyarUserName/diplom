import React, {useState} from 'react';
import {Avatar, Typography, Box, Grid, Paper, TextField, Button} from "@mui/material";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {StaticDatePicker} from '@mui/x-date-pickers/StaticDatePicker';
import s from './MyProfile.module.css'
import TeacherProfile from "./TeacherProfile";
import StudentProfile from "./StudentProfile";
import {useSelector} from "react-redux";
import store from "../../store/store";

const MyProfile = (props) => {
    let state = store.getState().general;
    const [isTeacher, setTeacher] = useState(state.Teacher);
    const [value, setValue] = React.useState(new Date());

    const addStudent = () => {

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
                                <b>Фамилия Имя Отчество</b>
                            </Typography>
                            <Typography align="justify" variant="h6">
                                Кафедра
                            </Typography>
                            <Typography align="justify" variant="h6">
                                Должность
                            </Typography>
                            <Typography align="justify" variant="h6">
                                Звание
                            </Typography>
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
                        <Button variant="outlined" onClick={addStudent}>
                            Добавить ученика
                        </Button>
                        {
                            isTeacher ? <TeacherProfile users={props.users}/> : <StudentProfile users={props.users}/>
                        }
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MyProfile;