import React, {useState} from 'react';
import Chat from "./Chat";
import {useDispatch, useSelector, useStore} from "react-redux";
import {changeMessageActionCreator} from "../../store/actionCreators/changeMessageActionCreator";
import {sendMessageActionCreator} from "../../store/actionCreators/sendMessageCreator";

const Chats = ({users}) => {
    const store = useStore();
    const value = useSelector((store) => store.dialog.newMessage);
    const myUser = useSelector((store) => store.general.currentUser)
    const messages = useSelector((store) => store.dialog.messages);
    const dispatch = useDispatch();
    const [mes, setMes] = useState(value);

    const onChangeMessage = (message) => {
        dispatch(changeMessageActionCreator(message));
        setMes(message);
    }
    const sendMessage = (message) => {
        dispatch(sendMessageActionCreator({id: myUser.id, userName: myUser.name}, message));
        setMes('');
    }
    return (<Chat me={myUser}
                  messages={messages}
                  users={users} onChangeMessage={onChangeMessage} sendMessage={sendMessage}
                  value={value}/>
    );
};

export default Chats;