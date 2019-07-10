import React from 'react';
import classes from './Main.module.scss';
import EnergyCell from "../../components/EnergyCell/EnergyCell";
import LabeledTumbler from "../../components/LabeledTumbler/LabeledTumbler";

function Main() {
    return (
        <div className={classes.Main}>
            <EnergyCell money={100} name={'Alpha'} className={classes.Item8}/>
            <EnergyCell money={100} name={'Beta'} className={classes.Item10}/>
            <EnergyCell money={100} name={'Gamma'} className={classes.Item21}/>
            <EnergyCell money={100} name={'Delta'} className={classes.Item23}/>
            <LabeledTumbler power={false} direction={'d'} label={'Hello'} className={classes.Item3} />
            <LabeledTumbler power={false} direction={'d'} label={'Hello'} className={classes.Item5} />
            <LabeledTumbler power={false} direction={'u'} label={'Hello'} className={classes.Item27} />
            <LabeledTumbler power={false} direction={'u'} label={'Hello'} className={classes.Item29} />
            <LabeledTumbler power={false} direction={'ru'} label={'Hello'} className={classes.Item16} />
            <LabeledTumbler power={false} direction={'rd'} label={'Hello'} className={classes.Item16} />
            <LabeledTumbler power={false} direction={'r'} label={'Hello'} className={classes.Item9} />
            <LabeledTumbler power={false} direction={'l'} label={'Hello'} className={classes.Item22} />
            <LabeledTumbler power={false} direction={'d'} label={'Hello'} className={classes.Item15} />
            <LabeledTumbler power={false} direction={'u'} label={'Hello'} className={classes.Item17} />
        </div>
    );
}

export default Main;
