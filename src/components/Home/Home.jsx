import React from 'react';
import {Button} from "@mui/material";
import s from "./Home.module.css"

const Home = () => {
    return (
        <div>
            <h1> DiplomaHelper - помогает эффективно работать над дипломными и курсовыми проектами.</h1>
            <h2>Данное приложение является дипломной работой.
                Оно создано для удобной коммуникации между студентами и их научными руководителями для
                комфортной
                работы над дипломным и курсовыми проектами.</h2>
            <Button variant="contained">Начать работу</Button>
        </div>
    );
};

export default Home;