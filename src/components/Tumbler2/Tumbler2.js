import React from 'react';
import Hover from "../Hover/Hover";
import Tumbler from "../Tumbler/Tumbler";
import {Typography} from "@material-ui/core";
import ReactHover from 'react-hover';

function handle() {

}

function Tumbler2() {
    return (
        <Hover component={<div>
            <Tumbler koeff={1} direction={'r'} power={true} dispatch={handle} id={1} hell={() => {}} />
            <Typography align={'center'}>
                123 Вт
            </Typography>
        </div>}>
            <div>
                <Tumbler koeff={1} direction={'r'} power={true} dispatch={handle} id={1} hell={() => {}} />
                <Typography align={'center'}>
                    123
                </Typography>
            </div>
        </Hover>
    );
}

export default Tumbler2;
