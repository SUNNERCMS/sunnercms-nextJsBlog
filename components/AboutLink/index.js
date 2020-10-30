/*
 * @Author: your name
 * @Date: 2020-10-25 22:33:24
 * @LastEditTime: 2020-10-30 23:38:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sunnercms-nextJsBlog/components/AboutLink/index.js
 */
import React, { Component } from 'react';
import styles from './index.module.less';
import animations from '../../styles/animation.less'

export default function AboutLink() {
  const aboutMeLink = () => {
    window.open("https://sunzhaoxiang.blog.csdn.net");
  }
  return (
    <div className={styles.aboutLinkContainer}>
      <div className={animations.hvrBounceToRight}>关于</div>
      <div className={animations.hvrBounceToLeft} onClick={aboutMeLink}>+友情链接</div>
    </div>
  )
}