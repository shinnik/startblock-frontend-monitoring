import React, {useState} from 'react';
import Tumbler from "../Tumbler/Tumbler";
import './LabeledTumbler.scss';
import {Box, Typography} from "@material-ui/core";
import {power} from "../../constants/names";


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
                         setLabelState(` ${power}`);
                         setHovered(true);
                     }}
                     className={`Arrow__${type}`} >
                    <Tumbler direction={direction} power={state} id={id} dispatch={dispatch} koeff={koeff} hovered={hovered}/>
                </Box>
            <Box hidden={!state} className={`Label__${type} Align_${align}`}>
                <Typography style={{fontFamily: 'Roboto Mono'}} display={"inline"} variant='body2' color='secondary'>{`${label}`}</Typography>
                <Typography display={"inline"} variant='body2' color='secondary' >{`${labelState}`}</Typography>
            </Box>
        </div>
    );
}

export default LabeledTumbler;
