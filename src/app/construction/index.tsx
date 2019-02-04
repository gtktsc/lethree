import React, { Fragment } from 'react';

const Slide = props => (
    <Fragment>
        {console.log({ props })}
        {props.match.path}
        {'construction'}
    </Fragment>
);

export default Slide;
