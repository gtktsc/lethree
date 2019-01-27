import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

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
    navigation: Function;
}

const Router: React.SFC<Props> = ({ navigation }) => (
    <BrowserRouter basename={''}>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/:project">
                    {({ match: project }) => (
                        <Switch>
                            <Route
                                exact
                                path={project.url}
                                component={Project}
                            />
                            <Route path={`${project.url}/:construction`}>
                                {({ match: construction }) => (
                                    <Switch>
                                        <Route
                                            exact
                                            path={construction.url}
                                            component={Construction}
                                        />
                                        <Route
                                            path={`${construction.url}/:slide`}
                                            component={Slide}
                                        />
                                    </Switch>
                                )}
                            </Route>
                        </Switch>
                    )}
                </Route>
            </Switch>
            {navigation()}
        </Suspense>
    </BrowserRouter>
);

export default Router;
