import React from 'react';
import { connect } from 'react-redux';
import View from './view';

import { getAppProps } from '../state/selectors/app/index';

const App = ({ location, handleDrawerOpen, open }) => (
    <View open={open} handleDrawerOpen={handleDrawerOpen} location={location} />
);

const mapStateToProps = (state, ownProps) => ({
    location: getAppProps(state),
    handleDrawerOpen: ownProps.handleDrawerOpen,
    open: ownProps.open
});

const mapDispatchToProps = () => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
