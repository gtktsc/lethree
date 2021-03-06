import { Route, Switch } from 'react-router-dom';
import React, { memo, Suspense } from 'react';

import { makeStyles } from '@material-ui/styles';
import Spinner from 'components/spinner';
import Error from 'components/error';
import Dashboard from './routes/dashboard/index';
import Project from './routes/project/index';
import Slide from './routes/slide/index';
import Task from './routes/task/index';
import Construction from './routes/construction/index';

interface Props {
    patchLocation: Function;
}

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3
    }
}));

const Router: React.SFC<Props> = ({ patchLocation }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <Error>
                {/* 
                // @ts-ignore - concurrent react */}
                <Suspense fallback={<Spinner />} delayMs={500}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={props => (
                                <Dashboard
                                    {...props}
                                    patchLocation={patchLocation}
                                />
                            )}
                        />
                        <Route path="/:project">
                            {({ match: project }) => (
                                <Switch>
                                    <Route
                                        exact
                                        path={project.url}
                                        render={props => (
                                            <Project
                                                {...props}
                                                location={props.location}
                                                patchLocation={patchLocation}
                                            />
                                        )}
                                    />
                                    <Route
                                        path={`${project.url}/:construction`}
                                    >
                                        {({ match: construction }) => (
                                            <Switch>
                                                <Route
                                                    exact
                                                    path={construction.url}
                                                    render={props => (
                                                        <Construction
                                                            {...props}
                                                            location={
                                                                props.location
                                                            }
                                                            patchLocation={
                                                                patchLocation
                                                            }
                                                        />
                                                    )}
                                                />
                                                <Route
                                                    path={`${
                                                        construction.url
                                                    }/:task`}
                                                >
                                                    {({ match: task }) => (
                                                        <Switch>
                                                            <Route
                                                                exact
                                                                path={task.url}
                                                                render={props => (
                                                                    <Task
                                                                        {...props}
                                                                        patchLocation={
                                                                            patchLocation
                                                                        }
                                                                    />
                                                                )}
                                                            />
                                                            <Route
                                                                render={props => (
                                                                    <Slide
                                                                        {...props}
                                                                        patchLocation={
                                                                            patchLocation
                                                                        }
                                                                    />
                                                                )}
                                                            />
                                                        </Switch>
                                                    )}
                                                </Route>
                                            </Switch>
                                        )}
                                    </Route>
                                </Switch>
                            )}
                        </Route>
                    </Switch>
                </Suspense>
            </Error>
        </main>
    );
};

export default memo(Router);
