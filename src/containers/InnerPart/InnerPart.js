import React from 'react';
import classes from './InnerPart.module.scss';
import EnergyCell from "../../components/EnergyCell/EnergyCell";
import LabeledTumbler from "../../components/LabeledTumbler/LabeledTumbler";
import {Box, Typography} from "@material-ui/core";
import Branch from "../Branch/Branch";
import {power} from "../../constants/names";
import {LOAD} from "../Branch/typeNames";

const energyCellClassNames = [classes.Cell8, classes.Cell10, classes.Cell21, classes.Cell23];
const energyCellNetClassNames = [classes.Cell3, classes.Cell5, classes.Cell27, classes.Cell29];
const energyCellConnections = [classes.Cell9, classes.Cell15, classes.Cell16, classes.Cell160, classes.Cell17, classes.Cell22];
const energyCellGeneratorClassNames = [classes.Cell7, classes.Cell11, classes.Cell19, classes.Cell24];
const energyCellLoadClassNames = [classes.Cell12, classes.Cell13, classes.Cell20, classes.Cell25];
const connectionTypes = [() => 'hu', () => 'vl', x => x, x => x, () => 'vr', () => 'hd'];
const connectionAlignments = [() => 'c', x => x ? 'up' : 'down', () => undefined, () => undefined, x => x ? 'up' : 'down', () => 'c'];
const connectionDirections = [
    x => x ? 'r' : 'l',
    x => x ? 'd' : 'u',
    x => x ? 'rd' : 'lu',
    x => x ? 'ld' : 'ru',
    x => x ? 'd' : 'u',
    x => x ? 'r' : 'l'
];

function arrowLengthCoefficients(cell_id) {
    switch (cell_id) {
        case 9:
        case 22:
            return 1.12;
        case 16:
        case 160:
            return 1.55;
        case 15:
        case 17:
            return 0.97;
        default:
            return 1;
    }
}


function InnerPart({onToggle, connections, energyCells}) {
    return (
            <div className={classes.InnerPart}>
                {
                    energyCells.map((value, index) => <EnergyCell
                        key={index}
                        {...value.profile}
                        className={energyCellClassNames[index]}
                    >
                    </EnergyCell>)
                }
                {
                    connections.map((value, index) => <Box key={index} className={energyCellConnections[index]}>
                        <LabeledTumbler
                            power={value.active}
                            type={connectionTypes[index](connectionDirections[index](value.output))}
                            align={connectionAlignments[index](connectionDirections[index](value.output))}
                            label={`${value.performance}`}
                            direction={connectionDirections[index](value.output)}
                            cell_id={[9, 15, 16, 160, 17, 22][index]}
                            dispatch={onToggle}
                            koeff={arrowLengthCoefficients([9, 15, 16, 160, 17, 22][index])}
                        />
                    </Box>)
                }
                {
                    energyCells.map((value, index) => <Box key={index} className={energyCellNetClassNames[index]}>
                        <LabeledTumbler
                            direction={index <= 1 ? 'd' : 'u'}
                            label={value.net.performance}
                            align={index <= 1 ? 'down' : 'up'}
                            type={'vr'}
                            power={value.net.active}
                            cell_id={[3, 5, 27, 29][index]}
                            dispatch={onToggle}
                            koeff={0.67}
                        />
                    </Box>)
                }
                {
                    energyCells.map((value, index) => <Box key={index} className={energyCellGeneratorClassNames[index]}>
                        <Branch
                            type={value.generator.type}
                            cell_id={[7, 11, 19, 24][index]}
                            label={value.generator.performance}
                            dispatch={onToggle}
                            power={value.generator.active}
                            direction={index % 2 === 0 ? (value.generator.output ? 'l' : 'r') : (value.generator.output ? 'r' : 'l')}
                            reversed={index % 2 !== 0}
                        />
                        </Box>)
                }
                {
                    energyCells.map((value, index) => <Box key={index} className={energyCellLoadClassNames[index]}>
                        <Branch
                            type={LOAD}
                            cell_id={[12, 13, 20, 25][index]}
                            label={value.load.performance}
                            dispatch={onToggle}
                            power={value.load.active}
                            direction={index % 2 === 0 ? ('l') : ('r')}
                            reversed={index % 2 !== 0}
                        />
                        </Box>)
                }
                <div className={classes.Cell1} >
                    <Typography variant={'body2'} color={"secondary"}>
                        Все значения в {power}
                    </Typography>
                </div>
            </div>
        );
}

export default InnerPart;
