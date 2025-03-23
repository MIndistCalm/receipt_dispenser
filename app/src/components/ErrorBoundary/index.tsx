import { Component, ErrorInfo } from 'react'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state = { hasError: false, errorMessage: '' }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ hasError: true, errorMessage: error.message })
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
