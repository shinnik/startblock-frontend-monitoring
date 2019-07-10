import React from 'react';
import Tumbler from "../Tumbler/Tumbler";

function LabeledTumbler({direction, power, label, ...rest}) {
    return (
        <div {...rest}>
            <Tumbler direction={direction} power={power} />
            {/*{label}*/}
        </div>
    );
}

export default LabeledTumbler;
