import React, {useState} from 'react';
import Tumbler from "../Tumbler/Tumbler";
import './LabeledTumbler.scss';
import {Box, Typography} from "@material-ui/core";
import {watt} from "../../constants/names";


function LabeledTumbler({direction, power, label, type, align, id, dispatch, koeff}) {
    const [state, setState] = useState(power);
    const [labelState, setLabelState] = useState(label);
    const [hovered, setHovered] = useState(false);

    return (
        <div className={`LabeledTumbler LabeledTumbler__${direction}`}>

                <Box onMouseLeave={() => {
                    setLabelState(label);
                    setHovered(false);
                }}
                     onMouseEnter={() => {
                         setLabelState(`${label} ${watt}`);
                         setHovered(true);
                     }}
                     className={`Arrow__${type}`} >
                    <Tumbler direction={direction} power={state} id={id} dispatch={dispatch} hell={setState} koeff={koeff} hovered={hovered}/>
                </Box>
            <Box hidden={!state} className={`Label__${type} Align_${align}`}>
                <Typography variant='body2' color='secondary'>{`${labelState}`}</Typography>
            </Box>
        </div>
    );
}

export default LabeledTumbler;
