import React from 'react';
import {Box, Typography} from "@material-ui/core";
import classes from './Net.module.scss';
import {currency, power} from "../../constants/names";
import {connect} from "react-redux";
import EnergyRouterIcon from "../../components/Icon/EnergyRouterIcon/EnergyRouterIcon";

class Net extends React.Component {

    render() {
        return (
            <div className={classes.Net}>
                <Typography variant={'h4'} className={classes.Cell1}>
                    <b>Сеть</b>
                </Typography>
                <div className={classes.Cell2}/>
                <div className={classes.Cell3}>
                    <EnergyRouterIcon/>
                </div>
                <div className={classes.Cell4}/>
                <Typography style={{fontFamily: 'Roboto Mono'}} variant={'body2'} color={'secondary'} className={classes.Cell8}>
                    {this.props.sumPerformance}
                </Typography>
                <Box className={classes.Cell7}>
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
                <Box className={classes.Cell5}>
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
