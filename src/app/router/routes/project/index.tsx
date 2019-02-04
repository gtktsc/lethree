import React, { lazy } from 'react';
import Route from 'components/route';

const App = lazy(() =>
    import(/* webpackChunkName: "project" */ '../../../project')
);

const Project = ({ patchLocation }) => (
    <Route patchLocation={patchLocation}>
        <App />
    </Route>
);

export default Project;
