import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ErrorIcon from '@material-ui/icons/Error';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        flexDirection: 'column'
    }
}));

function Error() {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <ErrorIcon fontSize={'large'} />
            <Typography component="h2" variant="h1" gutterBottom>
                {'Something went wrong!'}
            </Typography>
        </div>
    );
}

export default Error;
