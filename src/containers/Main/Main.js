import React from 'react';
import classes from './Main.module.scss';
import InnerPart from "../InnerPart/InnerPart";
import {Box} from "@material-ui/core";
import Net from "../Net/Net";

function Main() {
    return (
        <Box className={classes.Main}>
            <Net/>
            <InnerPart/>
        </Box>
    );
}

export default Main;
