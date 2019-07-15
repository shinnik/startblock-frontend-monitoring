import React from 'react';
import classes from './Main.module.scss';
import InnerPart from "../InnerPart/InnerPart";
import {Box} from "@material-ui/core";
import Net from "../Net/Net";
import classNames from 'classnames';

import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
    root: {
        zoom: window.innerWidth/2500,
    }
});

function Main() {
    const styles = useStyles();

    return (
        <Box className={classNames(styles.root, classes.Main)} >
            <Net/>
            <InnerPart/>
        </Box>
    );
}

export default Main;
