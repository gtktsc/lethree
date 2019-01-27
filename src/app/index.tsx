import React, { Component, Fragment } from 'react';
import Scene from './scene';

interface Props {
    init: boolean;
}

interface State {
    value: string;
}

export default class App extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    onChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        const { value } = this.state;
        return (
            <Fragment>
                <input value={value} onChange={this.onChange} />
                <div>{value}</div>
                {'value'}
                <Scene />
            </Fragment>
        );
    }
}
