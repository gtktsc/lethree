import React from 'react';

import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36
    },
    hide: {
        display: 'none'
    }
}));

function MiniDrawer({ handleDrawerOpen, open, location }) {
    const classes = useStyles();

    return (
        <AppBar
            position={'relative'}
            color={'default'}
            className={classNames(classes.appBar, {
                [classes.appBarShift]: open
            })}
        >
            <Toolbar disableGutters={!open}>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={handleDrawerOpen}
                    className={classNames(classes.menuButton, {
                        [classes.hide]: open
                    })}
                >
                    <MenuIcon />
                </IconButton>
                {location && location.project && (
                    <Link to={location.project}>
                        <Typography variant="h6" color="inherit" noWrap>
                            {`${location && location.project}`}
                        </Typography>
                    </Link>
                )}
                {location && location.construction && (
                    <Link to={`${location.project}/${location.construction}`}>
                        <Typography variant="h6" color="inherit" noWrap>
                            {`/${location && location.construction}`}
                        </Typography>
                    </Link>
                )}
                {location && location.slide && (
                    <Link
                        to={`${location.project}/${location.construction}/${
                            location.slide
                        }`}
                    >
                        <Typography variant="h6" color="inherit" noWrap>
                            {`/${location && location.slide}`}
                        </Typography>
                    </Link>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default MiniDrawer;
