/*
 * @Author: your name
 * @Date: 2020-10-25 22:33:24
 * @LastEditTime: 2020-10-28 11:38:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sunnercms-nextJsBlog/components/AboutLink/index.js
 */
import React, { Component } from 'react';
import styles from './index.module.less';
import animations from '../../styles/animation.less'
class AboutLink extends Component {
  render() {
    return (
      <div className={styles.aboutLinkContainer}>
        <div className={animations.hvrBounceToRight}>关于</div>
        <div className={animations.hvrBounceToLeft}>+友情链接</div>
      </div>
    );
  }
}

export default AboutLink;