import React, {useState} from 'react';
import Tumbler from "../Tumbler/Tumbler";
import './LabeledTumbler.scss';
import {Box, Typography} from "@material-ui/core";
import {power} from "../../constants/names";


function LabeledTumbler({direction, power: state, label, type, align, cell_id, dispatch, koeff, noHover}) {
    const [labelOpacity, setLabelOpacity] = useState(0);
    const [hovered, setHovered] = useState(false);

    return (
        <div className={`LabeledTumbler LabeledTumbler__${direction}`}>

                <Box onMouseLeave={() => {
                    !noHover && setLabelOpacity(0);
                    !noHover && setHovered(false);
                }}
                     onMouseEnter={() => {
                         !noHover && setLabelOpacity(1);
                         !noHover && setHovered(true);
                     }}
                     className={`Arrow__${type}`} >
                    <Tumbler noHover={noHover} direction={direction} power={state} id={cell_id} dispatch={dispatch} koeff={koeff} hovered={hovered}/>
                </Box>
            <Box hidden={!state} className={cell_id === 15 ? `Label__special Label__${type} Align_${align}` : `Label__${type} Align_${align}`}>
                <Typography style={{fontFamily: 'Roboto Mono'}} display={"inline"} variant='caption' color='secondary'>{`${label}`}</Typography>
                <Typography style={{opacity: labelOpacity}} display={"inline"} variant='caption' color='secondary' >{` ${power}`}</Typography>
            </Box>
        </div>
    );
}

export default LabeledTumbler;
