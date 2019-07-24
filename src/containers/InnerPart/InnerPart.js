import React from 'react';
import classes from './InnerPart.module.scss';
import EnergyCell from "../../components/EnergyCell/EnergyCell";
import LabeledTumbler from "../../components/LabeledTumbler/LabeledTumbler";
import {Box} from "@material-ui/core";
import Branch from "../Branch/Branch";

const energyCellClassNames = [classes.Item8, classes.Item10, classes.Item21, classes.Item23];
const energyCellNetClassNames = [classes.Item3, classes.Item5, classes.Item27, classes.Item29];
const energyCellConnections = [classes.Item9, classes.Item15, classes.Item16, classes.Item160, classes.Item17, classes.Item22];
const energyCellGeneratorClassNames = [classes.Item7, classes.Item11, classes.Item19, classes.Item24];
const energyCellLoadClassNames = [classes.Item12, classes.Item13, classes.Item20, classes.Item25];
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

function koeffs(id) {
    switch (id) {
        case 1:
        case 6:
            return 1.3;
        case 3:
        case 4:
            return 1.68;
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
                            id={[9, 15, 16, 160, 17, 22][index]}
                            dispatch={onToggle}
                            koeff={koeffs(index+1)}
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
                            id={[3, 5, 27, 29][index]}
                            dispatch={onToggle}
                            koeff={0.6}
                        />
                    </Box>)
                }
                {
                    energyCells.map((value, index) => <Box key={index} className={energyCellGeneratorClassNames[index]}>
                        <Branch
                            type={value.generator.type}
                            id={[7, 11, 19, 24][index]}
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
                            type={3}
                            id={[12, 13, 20, 25][index]}
                            label={value.load.performance}
                            dispatch={onToggle}
                            power={value.load.active}
                            direction={index % 2 === 0 ? ('l') : ('r')}
                            reversed={index % 2 !== 0}
                        />
                        </Box>)
                }
                <div  className={classes.Item1} />
            </div>
        );
}

export default InnerPart;
