import React from 'react';

import classNames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Folder from '@material-ui/icons/Folder';
import Home from '@material-ui/icons/Home';
import projects from 'mocks/data/project';
import transformMocks from 'utils/get-corresponding-data';
import SingleLink from './link';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap'
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1
        }
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar
    }
}));

const populateNav = ({ location }) => {
    const { data, view } = transformMocks({ location, projects });
    switch (view) {
        case 'construction': {
            return data.map(task => (
                <SingleLink
                    key={task.id}
                    to={`/${location.project}/${location.construction}/${
                        task.name
                    }`}
                    Icon={InboxIcon}
                    title={`tasks: ${task.name}`}
                />
            ));
        }
        case 'project': {
            return data.map(construction => (
                <SingleLink
                    key={construction.id}
                    to={`/${location.project}/${construction.name}`}
                    Icon={Folder}
                    title={`construction: ${construction.name}`}
                />
            ));
        }
        case 'task':
        case 'slide':
        default:
            return null;
    }
};

function MiniDrawer({ handleDrawerClose, open, location }) {
    const classes = useStyles();
    const theme: { direction: string } = useTheme();
    return (
        <nav>
            <Drawer
                variant="permanent"
                className={classNames(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open
                })}
                classes={{
                    paper: classNames({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open
                    })
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <SingleLink to={'/'} Icon={Home} title={'Dashboard'} />
                    {populateNav({ location })}
                </List>
            </Drawer>
        </nav>
    );
}

export default MiniDrawer;
