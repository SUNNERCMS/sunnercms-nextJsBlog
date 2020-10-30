/*
 * @Author: your name
 * @Date: 2020-10-25 23:00:36
 * @LastEditTime: 2020-10-30 22:51:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sunnercms-nextJsBlog/components/IntroduceDesc/index.js
 */
import React from 'react';
import styles from './index.module.less';

export default function IntroduceDesc() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introTitle}>祥哥的说</div>
      <p className={styles.introText}>脑袋不秃，撸码不止，怀揣热爱之心，敲下每一行代码，对程序负责，对自己负责。</p>
    </div>
  )
}
