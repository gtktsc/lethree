import React, { lazy } from 'react';
import Route from 'components/route';

const App = lazy(() =>
    import(/* webpackChunkName: "construction" */ '../../../construction')
);

const Construction = ({ patchLocation, location }) => (
    <Route patchLocation={patchLocation}>
        <App location={location} />
    </Route>
);

export default Construction;
