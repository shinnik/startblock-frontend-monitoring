import React, {useState} from 'react';
import Tumbler from "../Tumbler/Tumbler";
import './LabeledTumbler.scss';
import {Box, Typography} from "@material-ui/core";

function LabeledTumbler({direction, power, label, type, align, id, dispatch, koeff}) {
    const [state, setState] = useState(power);

    return (
        <div className={`LabeledTumbler LabeledTumbler__${direction}`}>
            <Box className={`Arrow__${type}`} >
                <Tumbler direction={direction} power={state} id={id} dispatch={dispatch} hell={setState} koeff={koeff}/>
            </Box>
            <Box className={`Label__${type} Align_${align}`}>
                { state && <Typography variant='body2' color='secondary'>{`${label}`}</Typography> }
            </Box>
        </div>
    );
}

export default LabeledTumbler;
