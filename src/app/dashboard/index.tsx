import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import projects from 'mocks/data/project';

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

function NestedGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                {projects.map(project => (
                    <Grid key={project.id} item xs={4}>
                        <Link to={`/${project.name}`}>
                            <Paper className={classes.paper}>
                                {project.name}
                            </Paper>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default NestedGrid;
