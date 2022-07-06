import React from 'react';
import {Avatar, Box, Link, Paper, Stack, SvgIcon} from "@mui/material";
import {Chat, CalendarMonth} from "@mui/icons-material";
import {Link as L} from "react-router-dom"
import s from "./UserBar.module.css"
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const UserBar = (props) => {

    let statusIcon;
    if (props.percent <= 20)
        statusIcon = <SentimentDissatisfiedIcon sx={{color: 'red'}}/>;
    else if (props.percent <= 55)
        statusIcon = <SentimentNeutralIcon sx={{color: '#e2d500'}}/>;
    else statusIcon = <SentimentSatisfiedIcon sx={{color: 'green'}}/>;
    return (
        <Box sx={{p: 2}} className={s.userBar} bgcolor={props.notification ? "#FFCBDB" : ""}>
            <Stack spacing={0.5} width="100%">
                <Avatar alt="Avatar"
                        variant="circular"
                        sx={{width: 50, height: 50, alignSelf: "center"}}
                        src={props.avatar}
                />
                <Link href="#" sx={{
                    fontSize: 18
                }}>{props.userName}</Link>
                <Box className={s.icons}>
                    <Paper>
                        {/*<SentimentSatisfiedIcon sx={{color: 'green'}}/>*/}
                        {/*12%*/}
                        {
                            statusIcon
                        }
                        {
                            !isNaN(props.percent) ? props.percent + "%" : ""
                        }
                        <L to={`/tables/${props.id}`} sx={{width: 30}}>
                            <SvgIcon component={CalendarMonth}/>
                        </L>
                        <L to={`/chats/${props.id}`}>
                            <SvgIcon component={Chat} sx={{width: 30, mt: 1}}/>
                        </L>
                    </Paper>
                </Box>
            </Stack>
        </Box>
    );
};

export default UserBar;