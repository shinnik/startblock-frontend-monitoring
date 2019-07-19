import React from 'react';
import classes from './Main.module.scss';
import InnerPart from "../InnerPart/InnerPart";
import {Box, Typography} from "@material-ui/core";
import Net from "../Net/Net";
import * as actionCreators from "../../store/actions";
import {connect} from "react-redux";
import useWindowSize from '@rehooks/window-size';


function Main({energyCells, connections, onToggle}) {
    let windowSize = useWindowSize();

    return (
        <Box style={{zoom: Math.min(windowSize.innerWidth/2500, 1)}} className={classes.Main} >
                <Net/>
                <InnerPart onToggle={onToggle} energyCells={energyCells} connections={connections}/>
                <Typography className={classes.Label}>
                    Все значения указаны в Ваттах
                </Typography>
        </Box>
    );
}

const mapStateToProps = store => {
    return {
        energyCells: store.energyCells,
        connections: store.connections
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggle: (tumbler) => dispatch(actionCreators.onToggle(tumbler)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
