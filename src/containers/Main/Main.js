import React, {useEffect} from 'react';
import classes from './Main.module.scss';
import InnerPart from "../InnerPart/InnerPart";
import {Box} from "@material-ui/core";
import Net from "../Net/Net";
import * as actionCreators from "../../store/actions";
import {connect} from "react-redux";
import useWindowSize from '@rehooks/window-size';
import {WEBSOCKET_URIS} from "../../constants/endpoints";
import WebSocketClients from "../../middlewares/WebSocketClients/WebSocketClients";

const WS = new WebSocketClients(WEBSOCKET_URIS);

function Main({energyCells, connections, onMessage}) {
    let windowSize = useWindowSize();  // this hook makes component responsive to viewport width
    useEffect(() => {
        WS.init();
        WS.setHandler(onMessage);
        return () => WS.close();
    }, []);

    return (
        <Box style={{zoom: Math.min(windowSize.innerWidth/2800, 1)}} className={classes.Main} >
                <Net/>
                <InnerPart onToggle={args => WS.sendSpecific(args)} energyCells={energyCells} connections={connections}/>
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
        onMessage: message => dispatch(actionCreators.onWebsocketMessage(message))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
