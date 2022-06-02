import React from 'react';
import {useParams} from "react-router-dom";
import {getStudent} from '../../constants/users'

const Table = () => {
    let params = useParams();
    let stud = getStudent(params.tableId)
    return (
        <div>
            <h2>Table of you and {stud.userName}</h2>
        </div>
    );
};

export default Table;