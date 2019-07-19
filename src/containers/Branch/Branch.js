import React from 'react';
import classes from './Branch.module.scss';
import {Box, Typography} from "@material-ui/core";
import LabeledTumbler from "../../components/LabeledTumbler/LabeledTumbler";

const imageData = [
    {
        name: 'Солнечная панель',
        src: 'images/solar.png',
    },
    {
        name: 'Бензо-генератор',
        src: 'images/benz.png',
    },
    {
        name: 'Аккумулятор',
        src: 'images/acc.png',
    },
    {
        name: 'Нагрузка',
        src: 'images/gulp.png',
    },
];

function Branch({type, dispatch, power, label, id, direction, reversed}) {
    return (
        <div className={!reversed ? classes.Branch : classes.BranchReversed}>
            <Box className={reversed ? classes.Item1_r : classes.Item1}>
                <Typography variant='body1'>
                    {imageData[type].name}
                </Typography>
            </Box>
            <Box className={reversed ? classes.Item2_r : classes.Item2}>
                <img src={imageData[type].src} alt={imageData[type].name}/>
            </Box>
            <Box className={reversed ? classes.Item3_r : classes.Item3}>
                <LabeledTumbler type={'hu'} dispatch={dispatch} power={power} align={'c'} label={label} direction={direction} id={id} koeff={0.7} />
            </Box>
        </div>
    );
}

export default Branch;
