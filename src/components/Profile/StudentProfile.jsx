import React from 'react';
import {Typography} from "@mui/material";

const StudentProfile = () => {
    return (
        <div>
            <Typography align="justify" variant="h6">
                Курс
            </Typography>
            <Typography align="justify" variant="h6">
                Специальность
            </Typography>
            <Typography align="justify" variant="h6">
                Научный руководитель
            </Typography>
        </div>
    );
};

export default StudentProfile;