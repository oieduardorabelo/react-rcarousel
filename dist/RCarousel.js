'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i]}return target}var RCarousel=function RCarousel(_ref){var currentIndex=_ref.currentIndex;var props=_objectWithoutProperties(_ref,['currentIndex']);var length=props.length||props.children.length||0;var styles={root:{overflow:'hidden'},inner:{height:'100%',transform:'translateX('+currentIndex%length*-100+'%)',transition:'transform .2s ease-out',whiteSpace:'nowrap',willChange:'transform'},child:{display:'inline-block',height:'100%',verticalAlign:'middle',whiteSpace:'normal',width:'100%'}};var children=_react2.default.Children.map(props.children,function(child,i){return _react2.default.createElement('div',{className:'RCarousel__inner__child','data-carousel-index':i,key:i,style:styles.child},child)});return _react2.default.createElement('div',{className:'RCarousel',style:styles.root},_react2.default.createElement('div',{className:'RCarousel__inner',style:styles.inner},children))};RCarousel.propTypes={currentIndex:_react2.default.PropTypes.number,length:_react2.default.PropTypes.number,children:_react2.default.PropTypes.array};exports.default=RCarousel;