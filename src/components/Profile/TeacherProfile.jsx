import React from 'react';
import {Typography} from "@mui/material";
import UserBar from "./Userbar";

const TeacherProfile = (props) => {
    return (
        <div>
            <Typography align="justify" variant="h5">
                Студенты:
            </Typography>
            {
                props.users.map((stud) =>
                    (<UserBar key={stud.id} id={stud.id} userName={stud.name}/>))
            }
        </div>
    );
};

export default TeacherProfile;