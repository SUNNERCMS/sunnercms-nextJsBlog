/*
 * @Author: your name
 * @Date: 2020-10-25 23:00:36
 * @LastEditTime: 2020-10-25 23:06:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sunnercms-nextJsBlog/components/IntroduceDesc/index.js
 */
import React from 'react';
import styles from './index.module.scss';

export default function IntroduceDesc() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introTitle}>次元使者</div>
      <p className={styles.introText}>爱好游戏，动漫。闲来无事喜欢在一些不健康的场所虚度光阴，撸起代码就会废寝忘食。</p>
    </div>
  )
}
