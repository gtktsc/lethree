import React, { lazy } from 'react';
import Route from 'components/route';

const App = lazy(() =>
    import(/* webpackChunkName: "project" */ '../../../project')
);

const Project = ({ patchLocation, location }) => (
    <Route patchLocation={patchLocation}>
        <App location={location} />
    </Route>
);

export default Project;
