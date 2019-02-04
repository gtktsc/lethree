import React, { lazy } from 'react';
import Route from 'components/route';

const App = lazy(() =>
    import(/* webpackChunkName: "construction" */ '../../../construction')
);

const Construction = ({ patchLocation }) => (
    <Route patchLocation={patchLocation}>
        <App />
    </Route>
);

export default Construction;
