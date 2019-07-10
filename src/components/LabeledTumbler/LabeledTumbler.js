import React from 'react';
import Tumbler from "../Tumbler/Tumbler";
import './LabeledTumbler.css';
import {Typography} from "@material-ui/core";

function LabeledTumbler({direction, power, label, ...rest}) {
    return (
        <div {...rest}>
            <Tumbler direction={direction} power={power} />
            {/*<Typography variant='body2' color='secondary'>{label}</Typography>*/}
        </div>
    );
}

export default LabeledTumbler;
