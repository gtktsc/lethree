import React from 'react';
import { connect } from 'react-redux';
import View from './view';

import { getAppProps } from '../state/selectors/app/index';

const App = ({ appProps }) => <View location={appProps} />;

const mapStateToProps = state => ({
    appProps: getAppProps(state)
});

const mapDispatchToProps = () => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
