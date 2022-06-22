import React from 'react';
import {Typography} from "@mui/material";
import UserBar from "./Userbar";

const TeacherProfile = (props) => {
    console.log("TeacherProfile props", props);
    return (
        <div>
            <Typography align="justify" variant="h5">
                Студенты:
            </Typography>
            {
                props.users.map((stud) =>
                    (<UserBar key={stud.id} id={stud.id} userName={stud.name} percent={stud.percent}
                              avatar={stud.avatar}
                              notification={props.notification.find((id) => id === stud.id) !== undefined}/>)
                )}
        </div>
    );
};
// props.users.map((stud) => {
//     props.notifications.find((user) => user.id === stud.id) ? (
//             <UserBar key={stud.id} id={stud.id} userName={stud.name} percent={stud.percent}
//                      avatar={stud.avatar}/>) :
//         (<UserBar key={stud.id} id={stud.id} userName={stud.name} percent={stud.percent}
//                   avatar={stud.avatar}/>)
// })

// props.users.map((stud) =>
//     (<UserBar key={stud.id} id={stud.id} userName={stud.name} percent={stud.percent} avatar={stud.avatar}/>))


export default TeacherProfile;