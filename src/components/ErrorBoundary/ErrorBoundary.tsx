import { Component, ErrorInfo, ReactNode } from "react";

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

export class ErrorBoundary extends Component<Props> {
  state = {
    isError: false,
  };

  // constructor() {
  //   // super();
  //   this.state = {
  //     isError: false,
  //   }
  // }

  static getDerivedStateFromError() {
    return { isError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // send to logger
  }

  render() {
    if (this.state.isError) {
      // <button onClick={() => this.setState({ isError: false })}>Retry</button>
      return this.props.fallback ? this.props.fallback : <p>Error!</p>;
    }

    return this.props.children;
  }
}
