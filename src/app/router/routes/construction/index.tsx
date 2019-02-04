import React, { lazy, Fragment } from 'react';
import Fade from '@material-ui/core/Fade';
import Updater from 'components/updater';

const App = lazy(() =>
    import(/* webpackChunkName: "construction" */ '../../../construction')
);

const Construction = ({ patchLocation }) => (
    <Fade timeout={500}>
        <Fragment>
            <App />
            <Updater patchLocation={patchLocation} />
        </Fragment>
    </Fade>
);

export default Construction;
