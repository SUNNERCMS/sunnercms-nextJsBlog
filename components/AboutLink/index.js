/*
 * @Author: your name
 * @Date: 2020-10-25 22:33:24
 * @LastEditTime: 2020-10-26 23:42:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sunnercms-nextJsBlog/components/AboutLink/index.js
 */
import React, { Component } from 'react';
import styles from './index.module.less';
class AboutLink extends Component {
  render() {
    return (
      <div className={styles.aboutLinkContainer}>
        <div className={styles.about}>关于</div>
        <div className={styles.link}>+友情链接</div>
      </div>
    );
  }
}

export default AboutLink;