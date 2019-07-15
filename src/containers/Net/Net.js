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
                <Typography variant={'body2'} color={'secondary'} className={classes.Item8}>
                    {this.props.energyCells.reduce((acc, curr) => acc + curr.net.performance*curr.net.active, 0)}
                </Typography>
                <Box className={classes.Item7}>
                    <Typography>
                        Энергороутер
                    </Typography>
                    <Typography variant={"body2"} color={'secondary'}>
                        {`${this.props.maxPerformance} ${power}`}
                    </Typography>
                </Box>
                <Typography className={classes.Item5}>
                    {`${this.props.money} ${currency}`}
                </Typography>
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
