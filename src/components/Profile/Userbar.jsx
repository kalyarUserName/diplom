import React from 'react';
import {Avatar, Box, Link, Paper, Stack, SvgIcon} from "@mui/material";
import {Chat, CalendarMonth} from "@mui/icons-material";
import {Link as L} from "react-router-dom"
import s from "./UserBar.module.css"
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';

const UserBar = (props) => {
    console.log(props);
    return (
        <Box sx={{p: 2}} className={s.userBar}>
            <Stack spacing={0.5} width="100%">
                <Avatar alt="Avatar"
                        variant="circular"
                        sx={{width: 50, height: 50, alignSelf: "center"}}
                />
                <Link href="#" sx={{
                    fontSize: 18
                }}>{props.userName}</Link>
                <Box className={s.icons}>
                    <Paper>
                        <SentimentSatisfiedIcon sx={{color: 'green'}}/>12%
                        <L key="table" to={`/tables/${props.id}`} sx={{width: 30}}>
                            <SvgIcon component={CalendarMonth}/>
                        </L>
                        <L key="chat" to={`/chats/${props.id}`}>
                            <SvgIcon component={Chat} sx={{width: 30, mt: 1}}/>
                        </L>
                    </Paper>
                </Box>
            </Stack>
        </Box>
    );
};

export default UserBar;