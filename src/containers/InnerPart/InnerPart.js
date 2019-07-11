import React from 'react';
import classes from './InnerPart.module.scss';
import EnergyCell from "../../components/EnergyCell/EnergyCell";
import LabeledTumbler from "../../components/LabeledTumbler/LabeledTumbler";
import {Box} from "@material-ui/core";
import * as actionCreators from '../../store/actions/index';
import {connect} from "react-redux";

const energyCellClassNames = [classes.Item8, classes.Item10, classes.Item21, classes.Item23];
const energyCellNetClassNames = [classes.Item3, classes.Item5, classes.Item27, classes.Item29];
const energyCellConnections = [classes.Item9, classes.Item15, classes.Item16, classes.Item16, classes.Item17, classes.Item22];
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


function InnerPart({energyCells, connections}) {

    return (
        <div className={classes.Main}>
            {
                energyCells.map((value, index) => <EnergyCell
                    {...value.profile}
                    className={energyCellClassNames[index]}
                >
                </EnergyCell>)
            }
            {
                connections.map((value, index) => <Box className={energyCellConnections[index]}>
                    <LabeledTumbler
                        power={value.active}
                        type={connectionTypes[index](connectionDirections[index](value.output))}
                        align={connectionAlignments[index](connectionDirections[index](value.output))}
                        label={`${value.performance}`}
                        direction={connectionDirections[index](value.output)} />
                </Box>)
            }
            {
                energyCells.map((value, index) => <Box className={energyCellNetClassNames[index]} >
                    <LabeledTumbler
                        direction={index <= 1 ? 'd' : 'u'}
                        label={value.net.performance}
                        align={index <= 1 ? 'down' : 'up'}
                        type={'vr'}
                        power={value.net.active}
                        />
                </Box>)
            }
            {/*<Box className={classes.Item3} >*/}
            {/*    <LabeledTumbler power={true} direction={'d'} label={'Hello'} type={'vr'} align={'down'} />*/}
            {/*</Box>*/}
            {/*<Box className={classes.Item5}>*/}
            {/*    <LabeledTumbler power={true} direction={'d'} label={'Hello'} type={'vr'} align={'down'} />*/}
            {/*</Box>*/}
            {/*<Box className={classes.Item27} >*/}
            {/*    <LabeledTumbler power={true} direction={'u'} label={'Hello'} type={'vr'} align={'up'} />*/}
            {/*</Box>*/}
            {/*<Box className={classes.Item29} >*/}
            {/*    <LabeledTumbler power={true} direction={'u'} label={'Hello'} type={'vr'} align={'up'} />*/}
            {/*</Box>*/}
            {/*<Box className={classes.Item16}>*/}
            {/*    <LabeledTumbler power={false} direction={'lu'} label={'Hello'} type={'lu'}  />*/}
            {/*</Box>*/}
            {/*<Box className={classes.Item16} >*/}
            {/*    <LabeledTumbler power={false} direction={'ld'} label={'Hello'} type={'ld'}  />*/}
            {/*</Box>*/}
            {/*<Box className={classes.Item9} >*/}
            {/*    <LabeledTumbler power={false} direction={'r'} label={'Hello'} type={'hu'} align={'c'} />*/}
            {/*</Box>*/}
            {/*<Box className={classes.Item22} >*/}
            {/*    <LabeledTumbler power={false} direction={'l'} label={'Hello'} type={'hd'} align={'c'} />*/}
            {/*</Box>*/}
            {/*<Box className={classes.Item15}>*/}
            {/*    <LabeledTumbler power={false} direction={'d'} label={'Hello'} type={'vl'} align={'c'} />*/}
            {/*</Box>*/}
            {/*<Box className={classes.Item17}>*/}
            {/*    <LabeledTumbler power={false} direction={'u'} label={'Hello'} type={'vr'} align={'c'} />*/}
            {/*</Box>*/}
        </div>
    );
}

const mapStateToProps = store => {
    return {
        ...store.innerPart
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggle: (tumbler) => dispatch(actionCreators.onToggle(tumbler)),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InnerPart);
