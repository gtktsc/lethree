import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

interface Props {
    to: string;
    title: string;
    Icon: React.ComponentType<{ fontSize?: string }>;
}

const SingleLink: React.SFC<Props> = ({ to, title, Icon }) => (
    <ListItem component={props => <Link to={to} {...props} />} button>
        <ListItemIcon>
            <Tooltip
                title={title}
                enterDelay={500}
                leaveDelay={200}
                TransitionComponent={Zoom}
                placement="right"
            >
                <Icon fontSize={'large'} />
            </Tooltip>
        </ListItemIcon>
        <ListItemText primary={title} />
    </ListItem>
);

export default SingleLink;
