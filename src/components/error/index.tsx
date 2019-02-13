import React from 'react';
import Error from './error';

interface Props {}
interface State {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    state = {
        hasError: false
    };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <Error />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
