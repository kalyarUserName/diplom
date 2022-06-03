import React from 'react';
import {useParams} from "react-router-dom";
import {getStudent} from "../../constants/users"
import {Chip} from "@mui/material";

const Chat = (props) => {
    let params = useParams();
    let stud = getStudent(params.chatId);
    return (
        <div>
            <h1>Chat with {stud.userName}</h1>
            {props.messages.map((mes) => {
                <Chip label={mes.message}>{mes.user.userName}</Chip>
            })}
        </div>
    );
};

export default Chat;