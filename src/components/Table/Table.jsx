import React from 'react';
import {useParams} from "react-router-dom";
import {getUserNameFromDBID} from '../../constants/users'
import ArticleIcon from "@mui/icons-material/Article";
import {Avatar, Grid, IconButton, SvgIcon, Typography} from "@mui/material";
import Task from "./Task";
import s from "./Table.module.css"
import {getCountSplitTask, getPercent, getTasks} from "../../constants/table";
import CircleIcon from "@mui/icons-material/Circle";
import sTask from "./Task.module.css"

const Table = ({document}) => {

    let params = useParams();
    let stud = getUserNameFromDBID(params.tableId)
    const tasks = getTasks(params.tableId);
    const splitTasks = getCountSplitTask(params.tableId);
    const onDocClick = () => {
        window.location.assign(document);
    }
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item md={9} xs={5}>
                    <IconButton onClick={onDocClick} click component={ArticleIcon} className={s.docIcon}></IconButton>
                    <div className={s.studsName}>

                        <h2>Задачи {stud.name}</h2>
                        <Avatar className={s.docIcon} variant="circular" src={stud.avatar}/>
                    </div>

                    <div className={s.tasks}>
                        {
                            tasks.map((task, index) => (
                                    <Task key={index} name={task.name} status={task.status} desc={task.desc}
                                          startDate={task.startDate}
                                          endDate={task.endDate}/>
                                )
                            )}
                    < /div>
                </Grid>
                <Grid item md={3} xs={5}>
                    <Typography align="left" variant="h6">Всего заданий: {tasks.length}</Typography>
                    <Typography align="left" variant="h6">Задачи готовы на {getPercent(params.tableId)}% </Typography>
                    <hr/>
                    <div className={s.splitTasks}>
                        <SvgIcon component={CircleIcon} className={[sTask.done, s.taskIcon].join(" ")}/>
                        <Typography align="left"
                                    variant="h6">Выполнено: {splitTasks.done}</Typography>
                    </div>
                    <div className={s.splitTasks}>
                        <SvgIcon component={CircleIcon} className={[sTask.edit, s.taskIcon].join(" ")}/>
                        <Typography align="left" variant="h6">Нужно доработать: {splitTasks.edit} </Typography>
                    </div>
                    <div className={s.splitTasks}>
                        <SvgIcon component={CircleIcon} className={[sTask.cancel, s.taskIcon].join(" ")}/>
                        <Typography align="left" variant="h6">Нужно переделать: {splitTasks.cancel} </Typography>
                    </div>
                    <div className={s.splitTasks}>
                        <SvgIcon component={CircleIcon} className={[sTask.none, s.taskIcon].join(" ")}/>
                        <Typography align="left" variant="h6">Не тронуто: {splitTasks.none} </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Table;