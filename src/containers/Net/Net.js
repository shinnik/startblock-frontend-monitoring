import React from 'react';
import {Box, Typography} from "@material-ui/core";
import classes from './Net.module.scss';
import {currency, power} from "../../constants/names";
import {connect} from "react-redux";

class Net extends React.Component {

    render() {
        return (
            <div className={classes.Net}>
                <Typography variant={'h4'} className={classes.Item1}>
                    <b>Сеть</b>
                </Typography>
                <div className={classes.Item2}/>
                <div className={classes.Item3}/>
                <div className={classes.Item4}/>
                <Typography style={{fontFamily: 'Roboto Mono'}} variant={'body2'} color={'secondary'} className={classes.Item8}>
                    {this.props.sumPerformance}
                </Typography>
                <Box className={classes.Item7}>
                    <Typography>
                        Энергороутер
                    </Typography>
                    <Typography display={"inline"} style={{fontFamily: 'Roboto Mono'}} variant={"body2"} color={'secondary'}>
                        {`${this.props.performance}`}
                    </Typography>
                    <Typography display={"inline"} variant={"body2"} color={'secondary'}>
                        {` ${power}`}
                    </Typography>
                </Box>
                <Box className={classes.Item5}>
                    <Typography style={{fontFamily: 'Roboto Mono'}}>
                        {`${this.props.money}`}
                    </Typography>
                    <Typography >
                        {`${currency}`}
                    </Typography>
                </Box>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state._net,
        energyCells: state.energyCells
    }
};

export default connect(mapStateToProps)(Net);
