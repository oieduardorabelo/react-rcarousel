import React from 'react'

const RCarousel = ({ current, ...props }) => {
  const length = props.length || props.children.length || 0

  const styles = {
    root: {
      overflow: 'hidden',
    },
    inner: {
      height: '100%',
      transform: `translateX(${(current % length) * -100}%)`,
      transition: 'transform .2s ease-out',
      whiteSpace: 'nowrap',
      willChange: 'transform',
    },
    child: {
      display: 'inline-block',
      height: '100%',
      verticalAlign: 'middle',
      whiteSpace: 'normal',
      width: '100%',
    },
  }

  const children = React.Children.map(
    props.children,
    (child, i) => (
      <div
        className="RCarousel__inner__child"
        data-rcarousel-index={i}
        key={i}
        style={styles.child}
      >
        {child}
      </div>
    )
  )

  return (
    <div className="RCarousel" style={styles.root}>
      <div className="RCarousel__inner" style={styles.inner}>
        {children}
      </div>
    </div>
  )
}

RCarousel.propTypes = {
  current: React.PropTypes.number,
  length: React.PropTypes.number,
  children: React.PropTypes.array,
}

export default RCarousel
