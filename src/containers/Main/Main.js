import React, {useEffect} from 'react';
import classes from './Main.module.scss';
import InnerPart from "../InnerPart/InnerPart";
import {Box, Typography} from "@material-ui/core";
import Net from "../Net/Net";
import * as actionCreators from "../../store/actions";
import {connect} from "react-redux";
import useWindowSize from '@rehooks/window-size';
import {power} from "../../constants/names";
import {WEBSOCKET_URIS} from "../../constants/endpoints";
import WebSocketClients from "./WebSocketClients";

const WS = new WebSocketClients(WEBSOCKET_URIS);

function Main({energyCells, connections, onMessage}) {
    let windowSize = useWindowSize();
    useEffect(() => {
        WS.setHandler(onMessage);
    }, []);

    return (
        <Box style={{height: '60%', zoom: Math.min(windowSize.innerWidth/2800, 1)}} className={classes.Main} >
                <Net/>
                <InnerPart onToggle={args => WS.sendSpecific(args)} energyCells={energyCells} connections={connections}/>
                <Typography className={classes.Label}>
                    Все значения указаны в {power}
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
        // onToggle: (tumbler) => dispatch(actionCreators.onToggle(tumbler)),
        onMessage: message => dispatch(actionCreators.onWebsocketMessage(message))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
