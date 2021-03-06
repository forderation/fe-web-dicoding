import { Spinner } from 'spin.js';
import 'spin.js/spin.css';

const defaultOpt = {
  lines: 12, // The number of lines to draw
  length: 69, // The length of each line
  width: 14, // The line thickness
  radius: 35, // The radius of the inner circle
  scale: 0.4, // Scales overall size of the spinner
  corners: 0.7, // Corner roundness (0..1)
  speed: 0.7, // Rounds per second
  rotate: 28, // The rotation offset
  animation: 'spinner-line-fade-default', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#ffb30e', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '30%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner' // The CSS class to assign to the spinner
};

export default class Spin {
  constructor (selector, opt) {
    this._spinner = new Spinner({
      ...defaultOpt,
      ...opt
    });
    this._selector = selector;
  }

  loadSpinner () {
    const contentElement = document.querySelector(this._selector);
    this._spinner.spin(contentElement);
  }

  stopSpinner () {
    this._spinner.stop();
  }
}
