import React from 'react';
import {Paper, Typography, Box} from "@material-ui/core";
import {currency} from "../../constants/names";
import classes from './EnergyCell.module.scss';


function EnergyCell({name, money, ...rest}) {
    return <Paper elevation={1} {...rest}>
        <Typography style={{fontSize: '32px', paddingTop: '8px', paddingLeft: '8px'}}><b>{name}</b></Typography>
            <Box className={classes.Box}>
                <Box style={{paddingBottom: '8px'}}>
                    <Typography style={{fontFamily: 'Roboto Mono'}} variant='body2'>{`${money}`}</Typography>
                    <Typography variant={'body2'}>{`${currency}`}</Typography>
                </Box>
            </Box>
        </Paper>
}

export default EnergyCell;
