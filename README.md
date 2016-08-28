# RCarousel

Simple Carousel component for React

## Installation

```
$ npm install -D oieduardorabelo/react-rcarousel
```

## Example

You can check a real example in `example/` dir

```
<div>
  <RCarousel currentIndex={props.index}>
    <div className="HomeCarousel__item">Slide one</div>
    <div className="HomeCarousel__item">Slide two</div>
    <div className="HomeCarousel__item">Slide three</div>
  </RCarousel>
  <button type="button" onClick={props.previous} disabled={(props.index % 3) === 0}>Previous</button>
  <button type="button" onClick={props.next}>Next</button>
</div>
```

## Badges

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)

---

> [eduardorabelo.me](http://eduardorabelo.me) &nbsp;&middot;&nbsp;
> GitHub [@oieduardorabelo](https://github.com/oieduardorabelo) &nbsp;&middot;&nbsp;
> Twitter [@oieduardorabelo](https://twitter.com/oieduardorabelo)
