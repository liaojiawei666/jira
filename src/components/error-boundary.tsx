import React, { Component, PropsWithChildren } from "react";
//children
//fallbackRender
export type FallbackRender = (props: {
  error: Error | null;
}) => React.ReactElement;

class ErrorBoundary extends Component<
  PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null };
  //当子组件抛出异常，这里会接收到并且调用
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}

export default ErrorBoundary;