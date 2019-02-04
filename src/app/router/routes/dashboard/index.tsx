import React, { lazy } from 'react';
import Route from 'components/route';

const App = lazy(() =>
    import(/* webpackChunkName: "dashboard" */ '../../../dashboard')
);

const Dashboard = ({ patchLocation }) => (
    <Route patchLocation={patchLocation}>
        <App />
    </Route>
);

export default Dashboard;
