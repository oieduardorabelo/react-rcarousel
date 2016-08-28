import React from 'react'

const RCarouselConnect = (ToConnectComp) => {
  class RCarouselConnectFactory extends React.Component {
    constructor() {
      super()
      this.state = {
        index: 0,
        total: 0,
      }
    }

    componentDidMount() {
      const childrens = ToConnectComp({
        ...this.props,
        ...this.state
      }).props.children[0].props.children.length
      this.setState({ total: childrens })
    }

    previous = () => {
      const { index, total } = this.state
      if (index > 0) {
        window.requestAnimationFrame(() => {
          this.setState({ index: index - 1 })
        })
      }

      if (index === 0) {
        window.requestAnimationFrame(() => {
          this.setState({ index: total - 1 })
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
