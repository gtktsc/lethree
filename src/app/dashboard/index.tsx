import React, { Fragment } from 'react';
import projects from 'mocks/data/project';

const Dashboard = props => (
    <Fragment>
        {'dash'}
        {console.log({ props })}
        {props.match.path}
        {projects.map(project => (
            <div key={project.id}>{`id-${project.id}`}</div>
        ))}
    </Fragment>
);

export default Dashboard;
