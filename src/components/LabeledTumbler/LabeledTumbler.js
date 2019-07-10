import React from 'react';
import Tumbler from "../Tumbler/Tumbler";
import './LabeledTumbler.scss';
import {Box, Typography} from "@material-ui/core";

function LabeledTumbler({direction, power, label, type, align}) {
    return (
        <div className={`LabeledTumbler LabeledTumbler__${direction}`}>
            <Box className={`Arrow__${type}`}>
                <Tumbler direction={direction} power={power} />
            </Box>
            <Box className={`Label__${type} Align_${align}`}>
                <Typography variant='body2' color='secondary'>{`${label}_${direction}`}</Typography>
            </Box>
        </div>
    );
}

export default LabeledTumbler;
