import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CSS from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
import extractLocation from 'utils/location-extractor';
import Navigation from './navigation';
import Router from './router';
import Header from './header';
import { initApp } from './state/actions/app/index';

const theme = createMuiTheme({ typography: { useNextVariants: true } });

const App = ({ initAppProps }) => {
    const [open, setOpen] = React.useState(false);
    const appProps = {
        ...extractLocation(window.location.pathname),
        baseUrl: window.location.origin
    };

    initAppProps(appProps);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    return (
        <ThemeProvider theme={theme}>
            <CSS />
            <BrowserRouter>
                <Header handleDrawerOpen={handleDrawerOpen} open={open} />
                <Navigation handleDrawerClose={handleDrawerClose} open={open} />
                <Router />
            </BrowserRouter>
        </ThemeProvider>
    );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    initAppProps: appProps => dispatch(initApp(appProps))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
