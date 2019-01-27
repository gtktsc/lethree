import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
    init: boolean;
}

interface State {
    value: string;
}

const Navigation = () => (
    <ul>
        <li>
            <NavLink to={'/'}>dashboard</NavLink>
        </li>
        <li>
            <NavLink to={'/fd'}>{'proj'}</NavLink>
        </li>
        <li>
            <NavLink to={'/project/jj'}>{'construction'}</NavLink>
        </li>
        <li>
            <NavLink to={'/x/k/jj'}>{'slide'}</NavLink>
        </li>
    </ul>
);

export default Navigation;
