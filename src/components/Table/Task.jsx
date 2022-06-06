import React, {useState} from 'react';
import {
    Box,
    FormControl, FormControlLabel,
    FormLabel,
    IconButton,
    Paper, Radio,
    RadioGroup,
    SvgIcon,
    TextField,
    Typography
} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import EditIcon from '@mui/icons-material/Edit';
import s from "./Task.module.css"


const Task = ({name, desc, startDate, endDate, status}) => {
    const [nameF, setNameF] = useState(name);
    const [descF, setDescF] = useState(desc);
    const [statusF, setStatusF] = useState(status);
    const [startDateF, setStartDateF] = useState(startDate);
    const [endDateF, setEndDateF] = useState(endDate);
    const [edit, setEdit] = useState(false);
    const getStatus = (statusF) => {
        switch (statusF) {
            case 'done':
                return s.done;
            case 'edit':
                return s.edit;
            case 'cancel':
                return s.cancel;
            default:
                return s.none;
        }
    }
    const onEdit = (e) => {
        setEdit(!edit);
    }
    return (
        <Box className={s.task}>
            {!edit ?
                <Paper elevation={5} className={s.taskInside}>

                    <SvgIcon component={CircleIcon} className={getStatus(statusF)}/>
                    <Typography align="center" variant="h5" className={s.name}>
                        {nameF}
                    </Typography>
                    <IconButton component={EditIcon} onClick={(e) => onEdit(e)} className={s.editIcon}/>
                    <Typography align="justify" variant="h6" className={s.desc}>
                        Описание: {descF}
                    </Typography>
                    <Typography align="justify" variant="p">
                        Начало {startDateF} {" "}
                    </Typography>
                    <Typography align="left" variant="p">
                        Конец {endDateF}
                    </Typography>
                </Paper>
                :
                <Paper elevation={5} className={s.taskInside}>
                    <IconButton component={EditIcon} onClick={(e) => onEdit(e)} className={s.editIcon}/>
                    <TextField label="Название задачи" placeholder="Введите название задачи"
                               margin="dense" fullWidth onChange={(e) => setNameF(e.target.value)} value={nameF}/>
                    <TextField label="Описание задачи задачи" placeholder="Введите описание задачи"
                               margin="dense" fullWidth onChange={(e) => setDescF(e.target.value)} value={descF}/>
                    <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">Статус</FormLabel>
                        <RadioGroup
                            value={statusF}
                            onChange={(e) => setStatusF(e.target.value)}
                            className={s.status}
                        >
                            <FormControlLabel value="done" control={<Radio/>} label="выполнено"/>
                            <FormControlLabel value="none" control={<Radio/>} label="не тронуто"/>
                            <FormControlLabel value="cancel" control={<Radio/>} label="переделать"/>
                            <FormControlLabel value="edit" control={<Radio/>} label="доработать"/>
                        </RadioGroup>
                    </FormControl>
                    <div className={s.dates}>
                        <TextField
                            id="date"
                            label="Дата начала"
                            type="date"
                            value={startDateF}
                            sx={{width: 220}}
                            InputLabelProps={
                                {
                                    shrink: true,

                                }
                            }
                        />
                        <TextField
                            id="date"
                            label="Дата окончания"
                            type="date"
                            defaultValue={endDateF}
                            sx={{width: 220}}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                </Paper>
            }

        </Box>
    );
};

export default Task;