import React, {useEffect, useState} from 'react';
import {
    Avatar,
    Typography,
    Box,
    Grid,
    Paper,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from "@mui/material";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {StaticDatePicker} from '@mui/x-date-pickers/StaticDatePicker';
import s from './MyProfile.module.css'
import TeacherProfile from "./TeacherProfile";
import StudentProfile from "./StudentProfile";
import store from "../../store/store";
import {getFreeStudents, getSupervisors, getUserFromDBWithoutPass} from "../../constants/users";
import {useDispatch} from "react-redux";
import {logoutActionCreator} from "../../store/actionCreators/authActionCreator";
import {Navigate} from "react-router-dom";
import {
    addStudentActionCreator,
    addSupervisorActionCreator,
    editProfileActionCreator
} from "../../store/actionCreators/profileActionCreator";

const MyProfile = (props) => {
    let state = store.getState().general;
    const [isTeacher, setTeacher] = useState(state.Teacher);
    const [value, setValue] = React.useState(new Date());
    let curUser = getUserFromDBWithoutPass(state.currentUser.userName);
    const [auth, setAuth] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState(curUser.name);
    const [rank, setRank] = useState(curUser.aboutUser.rank);
    const [kafedra, setKafedra] = useState(curUser.aboutUser.kafedra);
    const [newStudent, setNewStudent] = useState('');
    const [isAddStudent, setIsAddStudent] = useState(false);
    const [potentialUsers, setPotentialUsers] = useState([]);
    useEffect(() => {
        if (isTeacher)
            setPotentialUsers(getFreeStudents())
        else
            setPotentialUsers(getSupervisors());
    }, [isAddStudent])
    let dispatch = useDispatch();
    const logout = () => {
        dispatch(logoutActionCreator())
        return <Navigate to={"/login"}/>
    }
    const addStudent = () => {
        if (isAddStudent) {
            dispatch(addStudentActionCreator(potentialUsers.find(stud => stud.name === newStudent)));
            setNewStudent('');
        }
        setIsAddStudent(!isAddStudent);
    }
    const changeSelector = (event) => {
        setNewStudent(event.target.value);
    }
    const addSupervisor = () => {
        if (isAddStudent) {
            dispatch(addSupervisorActionCreator(potentialUsers.find(stud => stud.name === newStudent)))
            setNewStudent('');
        }
        setIsAddStudent(!isAddStudent);
    }
    const edition = (event) => {
        if (isEdit) {
            dispatch(editProfileActionCreator({name: name, rank: rank, kafedra: kafedra}));
        }
        setIsEdit(!isEdit);

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
                                src={curUser.avatar}
                            />
                            {
                                isEdit ? <div>
                                    <TextField label="ФИО" placeholder="Введите ФИО"
                                               margin="dense" fullWidth onChange={(e) => setName(e.target.value)}
                                               value={name}/>
                                    {isTeacher && <TextField label="Звание" placeholder="Введите звание"
                                                             margin="dense" fullWidth
                                                             onChange={(e) => setRank(e.target.value)} value={rank}/>
                                    }
                                    <TextField label="Кафедра" placeholder="Введите кафедру"
                                               margin="dense" fullWidth onChange={(e) => setKafedra(e.target.value)}
                                               value={kafedra}/>
                                </div> : <div>
                                    <Typography align="center" variant="h5">
                                        <b>{name}</b>
                                    </Typography>
                                    {isTeacher && <div>
                                        <Typography align="justify" variant="h6">
                                            {rank}
                                        </Typography>
                                    </div>
                                    }
                                    <Typography align="left" variant="h6">
                                        {kafedra}
                                    </Typography>
                                </div>
                            }
                            <br/>
                            <Button variant="contained" onClick={edition} sx={{mr: 1}}>
                                {isEdit ? "Сохранить" : "Редактировать"}
                            </Button>
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
                        {isAddStudent && <FormControl sx={{m: 2, minWidth: 200}}>
                            <InputLabel id="FIO_label">Фамилия Имя Отчество</InputLabel>
                            <Select
                                labelId="FIO_label"
                                id="FIO"
                                value={newStudent}
                                onChange={changeSelector}
                                autoWidth
                                label="ФИО"
                            >
                                {potentialUsers.map((stud, index) =>
                                    (<MenuItem key={index} value={stud.name}>{stud.name}</MenuItem>)
                                )}
                            </Select>
                        </FormControl>}
                        {
                            isTeacher ? <div>
                                    <Button variant="outlined" onClick={addStudent} className={s.addButton}>
                                        Добавить ученика
                                    </Button>
                                    <TeacherProfile users={props.users} notification={props.notifications}/>
                                </div> :
                                <div>
                                    <Button variant="outlined" onClick={addSupervisor} className={s.addButton}>
                                        Добавить научного руководителя
                                    </Button>
                                    <StudentProfile users={props.users} me={curUser}/>
                                </div>
                        }
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MyProfile;