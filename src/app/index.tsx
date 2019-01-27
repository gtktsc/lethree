import React, { Fragment } from 'react';
import Navigation from './navigation';
import Router from './routing';

interface Props {}

interface State {}

const App = () => (
    <Fragment>
        <Router navigation={Navigation} />
    </Fragment>
);

export default App;
