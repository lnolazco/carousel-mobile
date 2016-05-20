# carousel-mobile
Carousel for mobile using Hammerjs.

## Technologies:
- Javascript
- Hammerjs (http://hammerjs.github.io)
- ReactJs

## How to use it
### In a near future:
npm install carousel-mobile

### At the moment:
Add to the project this files:
- carousel-mobile\
- ... carousel-mobile.jsx
- ... carousel-mobile.scss
- ... hammer-carousel.jsx

Then in your component where you want to insert it add:
const Carousel = require('../../carousel-mobile/carousel-mobile.jsx');
...
onSelect(index) {
  const itemSelected = imageUrls[index];
},
render() {
  const data = imageUrls.map(image => (<img src={image} />));
  return (<Carousel data={data} onSelect={this.onSelect}>);
}

## Properties
- data, Array of react components to be display in the carousel.
- onSelect, function that will be called when the user selects an element of the carousel. It will pass the index corresponding to the component index in the data Array.

## Live Demo
Open it in a mobile or in the browser selecting mobile view:
https://jsfiddle.net/lnolazco/yeuavao6/15/embedded/result/

## Tests
No written yet. But I will use mocha for unit testing and nightwatch for functional tests.


