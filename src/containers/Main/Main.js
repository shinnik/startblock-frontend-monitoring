import React from 'react';
import classes from './Main.module.scss';
import InnerPart from "../InnerPart/InnerPart";
import {Box} from "@material-ui/core";

function Main() {
    return (
        <Box>
            <div className={classes.Main}>
                <InnerPart/>
            </div>
        </Box>
    );
}

export default Main;
