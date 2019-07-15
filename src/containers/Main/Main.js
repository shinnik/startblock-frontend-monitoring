import React from 'react';
import classes from './Main.module.scss';
import InnerPart from "../InnerPart/InnerPart";
import {Box} from "@material-ui/core";
import Net from "../Net/Net";
import classNames from 'classnames';
import { makeStyles } from "@material-ui/styles";
import * as actionCreators from "../../store/actions";
import {connect} from "react-redux";


const useStyles = makeStyles({
    root: {
        zoom: window.innerWidth/2500,
    }
});


function Main({energyCells, connections, onToggle}) {
    const styles = useStyles();

    return (
        <Box className={classNames(styles.root, classes.Main)} >
                <Net/>
                <InnerPart onToggle={onToggle} energyCells={energyCells} connections={connections}/>
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
