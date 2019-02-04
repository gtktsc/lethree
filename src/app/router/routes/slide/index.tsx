import React, { lazy, Fragment } from 'react';
import Updater from 'components/updater';

const App = lazy(() =>
    import(/* webpackChunkName: "slide" */ '../../../slide')
);

const Slide = ({ patchLocation }) => (
    <Fragment>
        <App />
        <Updater patchLocation={patchLocation} />
    </Fragment>
);

export default Slide;
