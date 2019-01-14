import React, { Component } from 'react';
import Style from './style.scss';
import Rule from '@/assets/rule.png';
export default class SVG extends Component {
  render() {
    return (
      <div className={Style.svg_wrapper}>
        <div className={Style.earth}>
          <div className={Style.moon_wrapper}>
            <div className={Style.moon} />
          </div>
        </div>
        <div className={Style.rule}>
          <div className={Style.rule_wrapper}>
            活动规则
          </div>
          <div className={Style.jump_wrapper}>
            <img className={Style.jump_image} src={Rule}/>
          </div>
          <div className={Style.loading}>
            <span className={Style.circle}></span>
            <span className={Style.circle}></span>
            <span className={Style.circle}></span>
          </div>
          <div className={Style.circle_loading}>
          </div>
          <div className={Style.heart_wrapper}>
            <div className={Style.left_heart}></div>
            <div className={Style.right_heart}></div>
          </div>
        </div>
      </div>
    );
  }
}
