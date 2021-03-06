import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import projects from 'mocks/data/project';
import transformMocks from 'utils/get-corresponding-data';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minHeight: '100px'
    }
}));

function NestedGrid({ location }) {
    const { data } = transformMocks({ location, projects });
    const classes = useStyles();
    console.log({ data, location });
    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                {data.map(task => (
                    <Grid key={task.id} item xs={4}>
                        <Link
                            to={`/${location.project}/${
                                location.construction
                            }/${task.name}`}
                        >
                            <Paper className={classes.paper}>
                                <Typography variant="h5" component="h3">
                                    {location.project}
                                </Typography>
                                <Typography component="p">
                                    {location.construction}
                                </Typography>
                                <Typography component="p">
                                    {task.name}
                                </Typography>
                            </Paper>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default NestedGrid;
