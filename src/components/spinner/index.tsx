import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw'
    }
}));

function Spinner() {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <CircularProgress />
        </div>
    );
}

export default Spinner;
