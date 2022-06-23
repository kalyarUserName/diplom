import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {getUserNameFromDBID} from "../../constants/users"
import {Button, Chip, Paper, TextField, Grid, Avatar} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import s from './Chat.module.css'
import {openDialogsActionCreator} from "../../store/actionCreators/messageActionCreator";
import {useDispatch} from "react-redux";

const Chat = ({
                  users, me,
                  getMessages,
                  onChangeMessage, sendMessage, value
              }) => {
    let params = useParams();
    let interlocutor = getUserNameFromDBID(params.chatId);
    const h2ref = useRef(null);
    const [isSend, setIsSend] = useState(false);
    const dispatch = useDispatch();
    const [mess, setMess] = useState([]);
    useEffect(() => {
        if (isSend)
            setMess(getMessages(params.chatId));
        setIsSend(false);
    }, [isSend]);
    useEffect(() => {
        setMess(getMessages(params.chatId));
        setIsSend(false);
        dispatch(openDialogsActionCreator(me.id));
    }, [params.chatId]);
    useLayoutEffect(() => {
        //    h2ref.current.scrollIntoView();
    }, []);

    return (
        <Grid container spacing={2}>
            <Grid item md={9}>
                <div>
                    <div className={s.studsName}>
                        <h1>Чат с {interlocutor.name}</h1>
                        <Avatar className={s.avatar} variant="circular" src={interlocutor.avatar}/>
                    </div>

                    <Paper elevation={7} className={s.dialogs}>
                        {mess.map((mes, index) => (
                            <div ref={h2ref} className={s.dialog} key={index}>
                                <b><p
                                    className={mes.user.userName !== interlocutor.name ? s.me : s.interlocutor}>{mes.user.userName}</p>
                                </b><br/> <br/>
                                <Chip
                                    className={mes.user.userName !== interlocutor.name ? s.me : s.interlocutor}
                                    label={mes.message}
                                    color="primary"/>
                            </div>)
                        )}
                    </Paper>
                    <TextField
                        onChange={(e) => {
                            onChangeMessage(e.target.value);
                        }}
                        name="message" variant="filled" className={s.textBox} value={value}/>
                    <Button
                        onClick={e => {
                            sendMessage(params.chatId, value);
                            setIsSend(true);
                        }}

                        className={s.sendButton}><SendIcon/></Button>
                </div>
            </Grid>
            <Grid item md={3}>
                {
                    users.map((interlocutor, index) =>
                        (
                            <Link key={index} to={`/chats/${interlocutor.id}`}>
                                <Button fullWidth sx={{mt: 1, mb: 1}}
                                        variant={interlocutor.id == params.chatId ? "contained" : "outlined"}>{interlocutor.name}</Button>
                            </Link>
                        ))
                }
            </Grid>
        </Grid>
    );
};

export default Chat;