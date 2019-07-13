import React, {useState} from 'react';
import Tumbler from "../Tumbler/Tumbler";
import './LabeledTumbler.scss';
import {Box, Typography} from "@material-ui/core";
import {watt} from "../../constants/names";


function LabeledTumbler({direction, power, label, type, align, id, dispatch, koeff}) {
    const [state, setState] = useState(power);
    const [labelState, setLabelState] = useState(label);

    return (
        <div className={`LabeledTumbler LabeledTumbler__${direction}`}>
            <Box onMouseOut={() => {
                setLabelState(label);
            }}
                 onMouseEnter={() => {
                     setLabelState(`${label} ${watt}`);
                 }}
                 onMouseMoveCapture={() => {
                     setLabelState(`${label} ${watt}`);
                 }}
                 className={`Arrow__${type}`} >
                <Tumbler direction={direction} power={state} id={id} dispatch={dispatch} hell={setState} koeff={koeff}/>
            </Box>
            <Box hidden={!state} className={`Label__${type} Align_${align}`}>
                <Typography variant='body2' color='secondary'>{`${labelState}`}</Typography>
            </Box>
        </div>
    );
}

export default LabeledTumbler;
