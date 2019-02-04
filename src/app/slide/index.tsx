import React, { Fragment } from 'react';
import Scene from './scene';

export const Slide = props => (
    <Fragment>
        {'slide'}
        {console.log({ props })}
        {props.match.path}
        <Scene />
    </Fragment>
);

export default Slide;
