import React, { lazy, Fragment } from 'react';
import Updater from 'components/updater';

const App = lazy(() =>
    import(/* webpackChunkName: "dashboard" */ '../../../dashboard')
);

const Dashboard = ({ patchLocation }) => (
    <Fragment>
        <App />
        <Updater patchLocation={patchLocation} />
    </Fragment>
);

export default Dashboard;
