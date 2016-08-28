# RCarousel

Simple Carousel component for React

## Installation

```
$ npm install -D oieduardorabelo/react-rcarousel
```

## Example

You can check a real example in `example/` dir

```js
import { RCarouselConnect, RCarousel } from 'react-rcarousel'

const HomeCarousel = (props) => (
  <div>
    <RCarousel currentIndex={props.index}>
      <div>Slide one</div>
      <div>Slide two</div>
      <div>Slide three</div>
    </RCarousel>
    <button type="button" onClick={props.previous} disabled={(props.index % 3) === 0}>Previous</button>
    <button type="button" onClick={props.next}>Next</button>
  </div>
)

const HomeCarouselConnected = RCarouselConnect(HomeCarousel)

// Render your connected carousel
```

## Badges

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)

---

> [eduardorabelo.me](http://eduardorabelo.me) &nbsp;&middot;&nbsp;
> GitHub [@oieduardorabelo](https://github.com/oieduardorabelo) &nbsp;&middot;&nbsp;
> Twitter [@oieduardorabelo](https://twitter.com/oieduardorabelo)
