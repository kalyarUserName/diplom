import React from 'react';
import {Typography} from "@mui/material";
import UserBar from "./Userbar";

const StudentProfile = (props) => {
    console.log('props.me', props.me);
    return (
        <div>
            <Typography align="justify" variant="h6">
                {props.me.aboutUser === {} ? props.me.aboutUser.course : ""}
            </Typography>
            <Typography align="justify" variant="h6">
                {props.me.aboutUser.spec === {} ? props.me.aboutUser.spec : ""}
            </Typography>
            <Typography align="justify" variant="h6">
                Научный руководитель: <br/>
                {props.me.aboutUser.supervisor === {} ? props.me.aboutUser.supervisor : ""}
            </Typography>
            {
                props.users.map((user) =>
                    (<UserBar key={user.id} id={user.id} userName={user.name}/>))
            }
        </div>
    );
};

export default StudentProfile;