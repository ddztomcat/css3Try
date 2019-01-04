import React, { Component } from 'react';
import { Button } from 'antd';
import Style from './svg.scss';
export default class SVG extends Component {
  render() {
    return (
      <div className={Style.svg_wrapper}>
        <svg viewBox="0 0 32 32">
          <circle r="16" cx="16" cy="16" className={Style.circle}></circle>
        </svg>
        <Button>444</Button>
      </div>
    );
  }
}
