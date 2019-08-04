import React from 'react';
import {Paper, Typography, Box} from "@material-ui/core";
import {currency} from "../../constants/names";
import classes from './EnergyCell.module.scss';


function EnergyCell({name, money, active, ...rest}) {
    return <Paper elevation={active ? 1 : 2} {...rest}>
        <Typography style={{display: active ? 'inline' : 'none', fontSize: '32px', paddingTop: '8px', paddingLeft: '10px'}}><b>{name}</b></Typography>
            <Box style={{display: active ? 'inline' : 'none',}} className={classes.Box}>
                <Box style={{paddingBottom: '8px'}}>
                    <Typography style={{fontFamily: 'Roboto Mono'}} variant='body2'>{`${money}`}</Typography>
                    <Typography variant={'body2'}>{`${currency}`}</Typography>
                </Box>
            </Box>
        </Paper>
}

export default EnergyCell;
