import React from 'react';
import { connect } from 'react-redux';
import View from './view';

import { getAppProps } from '../state/selectors/app/index';

const App = ({ location, handleDrawerClose, open }) => (
    <View
        open={open}
        handleDrawerClose={handleDrawerClose}
        location={location}
    />
);

const mapStateToProps = (state, ownProps) => ({
    location: getAppProps(state),
    handleDrawerClose: ownProps.handleDrawerClose,
    open: ownProps.open
});

const mapDispatchToProps = () => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
