import React, { memo } from 'react';
import { connect } from 'react-redux';
import View from './view';
import { patchLocation as patchLocationAction } from '../state/actions/app';

const App = ({ patchLocation }) => <View patchLocation={patchLocation} />;

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    patchLocation: location => dispatch(patchLocationAction(location))
});

export default memo(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
