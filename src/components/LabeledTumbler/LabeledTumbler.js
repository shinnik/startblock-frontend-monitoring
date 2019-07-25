import React, {useState} from 'react';
import Tumbler from "../Tumbler/Tumbler";
import './LabeledTumbler.scss';
import {Box, Typography} from "@material-ui/core";
import {power} from "../../constants/names";


function LabeledTumbler({direction, power: state, label, type, align, id, dispatch, koeff}) {
    const [labelOpacity, setLabelOpacity] = useState(0);
    const [hovered, setHovered] = useState(false);

    return (
        <div className={`LabeledTumbler LabeledTumbler__${direction}`}>

                <Box onMouseLeave={() => {
                    setLabelOpacity(0);
                    setHovered(false);
                }}
                     onMouseEnter={() => {
                         setLabelOpacity(1);
                         setHovered(true);
                     }}
                     className={`Arrow__${type}`} >
                    <Tumbler direction={direction} power={state} id={id} dispatch={dispatch} koeff={koeff} hovered={hovered}/>
                </Box>
            <Box hidden={!state} className={id === 15 ? `Label__special Label__${type} Align_${align}` : `Label__${type} Align_${align}`}>
                <Typography style={{fontFamily: 'Roboto Mono'}} display={"inline"} variant='body2' color='secondary'>{`${label}`}</Typography>
                <Typography style={{opacity: labelOpacity}} display={"inline"} variant='body2' color='secondary' >{` ${power}`}</Typography>
            </Box>
        </div>
    );
}

export default LabeledTumbler;
