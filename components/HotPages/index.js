/*
 * @Author: your name
 * @Date: 2020-10-24 21:55:20
 * @LastEditTime: 2020-10-25 19:15:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sunnercms-nextJsBlog/components/HotPages/index.js
 */
import React, { Component } from 'react';
import styles from './index.module.scss'

class HotPages extends Component {
  render() {
    return (
      <div className={styles.hotPagesContainer}>
        <h1>热门文章</h1>
        <div className={styles.titleDesc}>
          fhadklfjladjf福卡发发呆的卷发的减肥
          <br/>
          fhadklfjladjf福卡发发呆的卷发的减肥
        </div>
        <div className={styles.contents}>
          <div className={styles.contentItem}>
            <div className={styles.imgContainer}>
              <img
                src="/images/profile.jpg"
                className={styles.itemImage}
              />
            </div>
            <div className={styles.itemInfo}>
              <div className={styles.itemName}>新增qq应用</div>
              <div className={styles.itemDate}>2019年12月24日</div>
              <p className={styles.itemDesc}>
                激发了房间里的卷发简法定放假啊老骥伏枥的减肥 u 让卷发短款礼服发发呆了卷发短款两间房单就发儿啊就发来的附加费阿迪风景
              </p>
              <div className={styles.readMore}>阅读更多</div>
            </div>
          </div>
          <div className={styles.contentItem}>
          <div className={styles.imgContainer}>
              <img
                src="/images/profile.jpg"
                className={styles.itemImage}
              />
            </div>
            <div className={styles.itemInfo}>
              <div className={styles.itemName}>新增qq应用</div>
              <div className={styles.itemDate}>2019年12月24日</div>
              <p className={styles.itemDesc}>
                激发了房间里的卷发简单就发儿啊就发来的附加费阿迪风景
              </p>
              <div className={styles.readMore}>阅读更多</div>
            </div>
          </div>
          <div className={styles.contentItem}>
          <div className={styles.imgContainer}>
              <img
                src="/images/profile.jpg"
                className={styles.itemImage}
              />
            </div>
            <div className={styles.itemInfo}>
              <div className={styles.itemName}>新增qq应用</div>
              <div className={styles.itemDate}>2019年12月24日</div>
              <p className={styles.itemDesc}>
                激发了房间里的卷发简单就发儿啊就发来的附加费阿迪风景
              </p>
              <div className={styles.readMore}>阅读更多</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HotPages;