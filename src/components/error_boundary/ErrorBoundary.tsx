import {Component} from 'react';

class ErrorBoundary extends Component {
    state: { hasError: boolean } = {
        hasError: false,
    };

    static getDerivedStateFromError(error: any) {
        return {hasError: true};
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }


}

export default ErrorBoundary;