import React from 'react';
import classes from './Branch.module.scss';
import {Box, Typography} from "@material-ui/core";
import LabeledTumbler from "../../components/LabeledTumbler/LabeledTumbler";
import * as typeNames from "../../constants/generatorTypeNames";

const imageData = {
    [typeNames.ACCUMULATOR]: {
        name: 'Аккумуля-тор',
        src: 'images/acc.png',
    },
    [typeNames.BENZOGENERATOR]: {
        name: 'Бензо-генератор',
        src: 'images/benz.png',
    },
    [typeNames.LOAD]: {
        name: 'Нагрузка',
        src: 'images/gulp.png',
    },
    [typeNames.SOLAR_PANEL]: {
        name: 'Солнечная панель',
        src: 'images/solar_mini.png',
    },
    [typeNames.SOLAR_PANEL_DOUBLE]: {
        name: 'Солнечная панель',
        src: 'images/solar.png',
    }
};

function Branch({type, dispatch, power, label, cell_id, direction, reversed}) {
    return (
        <div className={!reversed ? classes.Branch : classes.BranchReversed}>
            <Box className={reversed ? classes.Cell1_r : classes.Cell1}>
                <Typography variant='h5'>
                    {imageData[type].name}
                </Typography>
            </Box>
            <Box className={reversed ? classes.Cell2_r : classes.Cell2}>
                <img style={{maxWidth: '100%', maxHeight: '100%'}} src={imageData[type].src} alt={imageData[type].name}/>
            </Box>
            <Box className={reversed ? classes.Cell3_r : classes.Cell3}>
                <LabeledTumbler noHover={type === typeNames.LOAD} type={'hu'} dispatch={dispatch} power={power} align={'c'} label={label} direction={direction} cell_id={cell_id} koeff={0.82} />
            </Box>
        </div>
    );
}

export default Branch;
