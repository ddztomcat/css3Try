import React, { Component } from 'react';
import Style from './style.scss';
export default class SVG extends Component {
  render() {
    return (
      <div className={Style.svg_wrapper}>
        <div className={Style.earth}>
          <div className={Style.moon_wrapper}>
            <div className={Style.moon} />
          </div>
        </div>
      </div>
    );
  }
}
