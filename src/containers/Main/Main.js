import React from 'react';
import classes from './Main.module.scss';
import EnergyCell from "../../components/EnergyCell/EnergyCell";
import LabeledTumbler from "../../components/LabeledTumbler/LabeledTumbler";
import {Box} from "@material-ui/core";

function Main() {
    return (
        <div className={classes.Main}>
            <EnergyCell money={100} name={'Alpha'} className={classes.Item8}/>
            <EnergyCell money={100} name={'Beta'} className={classes.Item10}/>
            <EnergyCell money={100} name={'Gamma'} className={classes.Item21}/>
            <EnergyCell money={100} name={'Delta'} className={classes.Item23}/>
            <Box className={classes.Item3} >
                <LabeledTumbler power={true} direction={'d'} label={'Hello'} type={'vr'} align={'down'} />
            </Box>
            <Box className={classes.Item5}>
                <LabeledTumbler power={true} direction={'d'} label={'Hello'} type={'vr'} align={'down'} />
            </Box>
            <Box className={classes.Item27} >
                <LabeledTumbler power={true} direction={'u'} label={'Hello'} type={'vr'} align={'up'} />
            </Box>
            <Box className={classes.Item29} >
                <LabeledTumbler power={true} direction={'u'} label={'Hello'} type={'vr'} align={'up'} />
            </Box>
            <Box className={classes.Item16}>
                <LabeledTumbler power={false} direction={'lu'} label={'Hello'} type={'lu'}  />
            </Box>
            <Box className={classes.Item16} >
                <LabeledTumbler power={false} direction={'ld'} label={'Hello'} type={'ld'}  />
            </Box>
            <Box className={classes.Item9} >
                <LabeledTumbler power={false} direction={'r'} label={'Hello'} type={'hu'} align={'c'} />
            </Box>
            <Box className={classes.Item22} >
                <LabeledTumbler power={false} direction={'l'} label={'Hello'} type={'hd'} align={'c'} />
            </Box>
            <Box className={classes.Item15}>
                <LabeledTumbler power={false} direction={'d'} label={'Hello'} type={'vl'} align={'c'} />
            </Box>
            <Box className={classes.Item17}>
                <LabeledTumbler power={false} direction={'u'} label={'Hello'} type={'vr'} align={'c'} />
            </Box>
        </div>
    );
}

export default Main;
