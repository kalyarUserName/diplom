import React from 'react';
import {useParams} from "react-router-dom";
import {getStudent} from "../../constants/users"

const Chat = () => {
    let params = useParams();
    let stud = getStudent(params.chatId);
    return (
        <div>
            <h1>Chat with {stud.userName}</h1>

        </div>
    );
};

export default Chat;