import React, {useState} from 'react';
import Tumbler from "../Tumbler/Tumbler";
import './LabeledTumbler.scss';
import {Box, Typography} from "@material-ui/core";
import {watt} from "../../constants/names";


function LabeledTumbler({direction, power: state, label, type, align, id, dispatch, koeff}) {
    const [labelState, setLabelState] = useState('');
    const [hovered, setHovered] = useState(false);

    return (
        <div className={`LabeledTumbler LabeledTumbler__${direction}`}>

                <Box onMouseLeave={() => {
                    setLabelState('');
                    setHovered(false);
                }}
                     onMouseEnter={() => {
                         setLabelState(` ${watt}`);
                         setHovered(true);
                     }}
                     className={`Arrow__${type}`} >
                    <Tumbler direction={direction} power={state} id={id} dispatch={dispatch} koeff={koeff} hovered={hovered}/>
                </Box>
            <Box hidden={!state} className={`Label__${type} Align_${align}`}>
                <Typography variant='body2' color='secondary'>{`${label}${labelState}`}</Typography>
            </Box>
        </div>
    );
}

export default LabeledTumbler;
