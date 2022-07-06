import React, {useState} from 'react';
import Chat from "./Chat";
import {useDispatch, useSelector} from "react-redux";
import {changeMessageActionCreator} from "../../store/actionCreators/changeMessageActionCreator";
import {sendMessageActionCreator} from "../../store/actionCreators/sendMessageCreator";
import {getMessageMatchFromDB, getUserFromDBID} from "../../constants/users";
import {openDialogsActionCreator} from "../../store/actionCreators/messageActionCreator";

const Chats = ({users}) => {
    const value = useSelector((store) => store.dialog.newMessage);
    const myUser = useSelector((store) => store.general.currentUser)
    const messages = useSelector((store) => store.dialog.messages);
    const dispatch = useDispatch();
    const [mes, setMes] = useState(value);


    const onChangeMessage = (message) => {
        dispatch(changeMessageActionCreator(message));
        setMes(message);
    }
    const sendMessage = (to, message) => {
        let userTo = getUserFromDBID(to);
        dispatch(sendMessageActionCreator({id: myUser.id, userName: myUser.name}, {
            id: userTo.id,
            userName: userTo.name
        }, message));
        setMes('');
        dispatch(openDialogsActionCreator(myUser.id));
    }
    const getMessages = (idInterlocutor) => {
        return getMessageMatchFromDB(myUser.id, idInterlocutor);
    }
    return (<Chat me={myUser}
                  messages={messages}
                  getMessages={getMessages}
                  users={users} onChangeMessage={onChangeMessage} sendMessage={sendMessage}
                  value={value}/>
    );
};

export default Chats;