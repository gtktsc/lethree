import React, { lazy } from 'react';
import Route from 'components/route';

const App = lazy(() => import(/* webpackChunkName: "slide" */ '../../../task'));

const Slide = ({ patchLocation, location }) => (
    <Route patchLocation={patchLocation}>
        <App location={location} />
    </Route>
);

export default Slide;
