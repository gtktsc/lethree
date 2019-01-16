import React, { Component, Fragment } from 'react';
import Scene from './scene';

export default class App extends Component {
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
                <Scene />
            </Fragment>
        );
    }
}
