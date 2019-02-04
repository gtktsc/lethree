import React, { lazy, Fragment } from 'react';
import Updater from 'components/updater';

const App = lazy(() =>
    import(/* webpackChunkName: "project" */ '../../../project')
);

const Project = ({ patchLocation }) => (
    <Fragment>
        <App />
        <Updater patchLocation={patchLocation} />
    </Fragment>
);

export default Project;
