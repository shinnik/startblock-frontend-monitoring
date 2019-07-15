import React from 'react';
import {Paper, Typography, Box} from "@material-ui/core";
import {currency} from "../../constants/names";
import classes from './EnergyCell.module.scss';



function EnergyCell({name, money, ...rest}) {
    return <Paper elevation={1} {...rest}>
        <Typography variant='body1'><b>{name}</b></Typography>
        <Box className={classes.Addition}/>
            <Box className={classes.Box}>
                <Typography variant='body2'>{`${money}`}</Typography>
                <Typography variant={'body2'}>{`${currency}`}</Typography>
            </Box>
        </Paper>
}

export default EnergyCell;
