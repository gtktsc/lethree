import React, { Fragment } from 'react';
import projects from 'mocks/data/project';

const Dashboard = () => (
    <Fragment>
        {'dash'}
        {projects.map(project => (
            <div key={project.id}>{`id-${project.id}`}</div>
        ))}
    </Fragment>
);

export default Dashboard;
