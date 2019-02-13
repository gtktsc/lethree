import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
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

function NestedGrid({ location }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                {projects.map(project => {
                    if (project.name === location.project) {
                        return project.constructions.map(construction => (
                            <Grid key={construction.id} item xs={4}>
                                <Link
                                    to={`${project.name}/${construction.name}`}
                                >
                                    <Paper className={classes.paper}>
                                        <Typography variant="h5" component="h3">
                                            {project.name}
                                        </Typography>
                                        <Typography component="p">
                                            {construction.name}
                                        </Typography>
                                    </Paper>
                                </Link>
                            </Grid>
                        ));
                    }
                    return null;
                })}
            </Grid>
        </div>
    );
}

export default NestedGrid;
