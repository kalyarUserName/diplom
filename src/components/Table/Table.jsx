import React from 'react';
import {useParams} from "react-router-dom";
import {getUserNameFromDBID} from '../../constants/users'
import ArticleIcon from "@mui/icons-material/Article";
import {IconButton} from "@mui/material";
import Task from "./Task";
import s from "./Table.module.css"
import {getTasks} from "../../constants/table";


const Table = ({name, document, percent}) => {

    let params = useParams();
    let stud = getUserNameFromDBID(params.tableId)
    const tasks = getTasks(params.tableId);

    const onDocClick = () => {
        window.location.assign(document);
    }
    return (
        <div>
            <IconButton onClick={onDocClick} click component={ArticleIcon} className={s.docIcon}></IconButton>

            <h2>Работа {stud.name}</h2>
            <div className={s.tasks}>
                {
                    tasks.map((task, index) => (
                            <Task key={index} name={task.name} status={task.status} desc={task.desc}
                                  startDate={task.startDate}
                                  endDate={task.endDate}/>
                        )
                    )}
            < /div>

        </div>
    );
};

export default Table;