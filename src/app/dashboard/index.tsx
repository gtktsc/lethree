import React, { Fragment } from 'react';
import projects from 'mocks/data/project';

const Dashboard = () => (
    <Fragment>
        {'dashboards'}
        {projects.map(project => (
            <div key={project.id}>{`${project.name}`}</div>
        ))}
    </Fragment>
);

export default Dashboard;
