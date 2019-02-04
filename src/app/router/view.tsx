import { Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import { makeStyles } from '@material-ui/styles';
import Spinner from 'components/spinner';
import Error from 'components/error';

const Dashboard = lazy(() =>
    import(/* webpackChunkName: "dashboard" */ '../dashboard')
);
const Project = lazy(() =>
    import(/* webpackChunkName: "project" */ '../project')
);
const Construction = lazy(() =>
    import(/* webpackChunkName: "construction" */ '../construction')
);
const Slide = lazy(() => import(/* webpackChunkName: "slide" */ '../slide'));

interface Props {
    location: Object;
}

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3
    }
}));

const Router: React.SFC<Props> = ({ location }) => {
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
                                <Dashboard {...props} location={location} />
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
                                                location={location}
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
                                                            location={location}
                                                        />
                                                    )}
                                                />
                                                <Route
                                                    path={`${
                                                        construction.url
                                                    }/:slide`}
                                                    render={props => (
                                                        <Slide
                                                            {...props}
                                                            location={location}
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
                </Suspense>
            </Error>
        </main>
    );
};

export default Router;
