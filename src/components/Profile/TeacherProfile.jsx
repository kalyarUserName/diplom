import React from 'react';
import {Typography} from "@mui/material";
import UserBar from "./Userbar";
import s from "./MyProfile.module.css";

const TeacherProfile = (props) => {
    return (
        <div>
            <Typography align="justify" variant="h5">
                Студенты:
            </Typography>
            <Typography align="justify" variant="h6">
                Курс 1
            </Typography>
            {
                props.users.map((stud) =>
                    (<UserBar key={stud.id} id={stud.id} userName={stud.userName}/>))
            }
            {/*<hr/>*/}
            {/*<Typography align="justify" variant="h6">*/}
            {/*    Курс 2*/}
            {/*</Typography>*/}
            {/*{*/}
            {/*    students2.map((stud) =>*/}
            {/*        (<UserBar key={stud.id} id={stud.id} userName={stud.userName}/>))*/}
            {/*}*/}
        </div>
    );
};

export default TeacherProfile;