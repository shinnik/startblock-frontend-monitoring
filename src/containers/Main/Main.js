import React, {useEffect} from 'react';
import classes from './Main.module.scss';
import InnerPart from "../InnerPart/InnerPart";
import {Box, Typography} from "@material-ui/core";
import Net from "../Net/Net";
import * as actionCreators from "../../store/actions";
import {connect} from "react-redux";
import useWindowSize from '@rehooks/window-size';
import {power} from "../../constants/names";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {WEBSOCKET_SERVER, WEBSOCKET_URIS} from "../../constants/endpoints";


function Main({energyCells, connections, onToggle, onMessage}) {
    let windowSize = useWindowSize();
    useEffect(() => {
        let webSocketClients = [];
        WEBSOCKET_URIS.forEach(value => {
            const i = webSocketClients.push(new W3CWebSocket(`${WEBSOCKET_SERVER}/${value}`)) - 1;
            webSocketClients[i].onopen = () => {
                console.log(`Websocket connection to ${WEBSOCKET_SERVER}/${value} has been established.`);
            };
            webSocketClients[i].onmessage = (message) => {
                try {
                    const json = JSON.parse(message.data);
                    onMessage({payload: {uri: value, data: json} });
                } catch (e) {
                    console.log(e);
                }
            };
        })
    }, []);

    return (
        <Box style={{zoom: Math.min(windowSize.innerWidth/2800, 1)}} className={classes.Main} >
                <Net/>
                <InnerPart onToggle={onToggle} energyCells={energyCells} connections={connections}/>
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
        onToggle: (tumbler) => dispatch(actionCreators.onToggle(tumbler)),
        onMessage: message => dispatch(actionCreators.onWebsocketMessage(message))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
