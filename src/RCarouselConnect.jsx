import React from 'react'

const RCarouselConnect = (ToConnectComp) => {
  class RCarouselConnectFactory extends React.Component {
    constructor() {
      super()
      this.state = {
        index: 0,
      }
    }

    previous = () => {
      const { index } = this.state
      if (index > 0) {
        window.requestAnimationFrame(() => {
          this.setState({ index: index - 1 })
        })
      }
    }

    next = () => {
      const { index } = this.state
      window.requestAnimationFrame(() => {
        this.setState({ index: index + 1 })
      })
    }

    render() {
      return (
        <ToConnectComp
          {...this.props}
          {...this.state}
          previous={this.previous}
          next={this.next}
        />
      )
    }
  }

  return RCarouselConnectFactory
}

export default RCarouselConnect
