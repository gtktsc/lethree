import React, { lazy } from 'react';
import Route from 'components/route';

const App = lazy(() =>
    import(/* webpackChunkName: "slide" */ '../../../slide')
);

const Slide = ({ patchLocation }) => (
    <Route patchLocation={patchLocation}>
        <App />
    </Route>
);

export default Slide;
