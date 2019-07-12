import React from 'react';
import {Box, Typography} from "@material-ui/core";
import classes from './Net.module.scss';
import {currency, power} from "../../constants/names";
import {connect} from "react-redux";

function Net({money, maxPerformance, performance}) {

    return (
        <div className={classes.Net}>
            <Typography variant={'h4'} className={classes.Item1}>
                <b>Сеть</b>
            </Typography>
            <div className={classes.Item2}/>
            <div className={classes.Item3}/>
            <div className={classes.Item4}/>
            <Typography variant={'body2'} color={'secondary'} className={classes.Item8}>
                {performance}
            </Typography>
            <Box className={classes.Item7}>
                <Typography>
                    Энергороутер
                </Typography>
                <Typography variant={"body2"} color={'secondary'}>
                    {`${maxPerformance} ${power}`}
                </Typography>
            </Box>
            <Typography className={classes.Item5}>
                {`${money} ${currency}`}
            </Typography>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ...state.innerPart._net,
        performance: state.innerPart.energyCells.reduce((acc, curr) => acc + curr.net.performance, 0)
    }
};

export default connect(mapStateToProps)(Net);
