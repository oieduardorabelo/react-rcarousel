import React from 'react'
import { render } from 'react-dom'

import { RCarouselConnect, RCarousel } from '../src'

const AppRoot = window.document.querySelector('#AppRoot')

const HomeCarousel = (props) => (
  <div>
    <RCarousel currentIndex={props.index}>
      <div className="HomeCarousel__item">Slide one</div>
      <div className="HomeCarousel__item">Slide two</div>
      <div className="HomeCarousel__item">Slide three</div>
    </RCarousel>
    <button type="button" onClick={props.previous} disabled={(props.index % 3) === 0}>Previous</button>
    <button type="button" onClick={props.next}>Next</button>
  </div>
)

HomeCarousel.propTypes = {
  index: React.PropTypes.number,
  next: React.PropTypes.func,
  previous: React.PropTypes.func,
}

const HomeCarouselConnected = RCarouselConnect(HomeCarousel)

const Home = () => (
  <section>
    <h1>RCarousel example</h1>
    <HomeCarouselConnected />
  </section>
)

render(
  <Home />
  , AppRoot
)
