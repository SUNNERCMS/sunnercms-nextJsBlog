/*
 * @Author: your name
 * @Date: 2020-10-25 23:00:36
 * @LastEditTime: 2020-10-26 11:02:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sunnercms-nextJsBlog/components/IntroduceDesc/index.js
 */
import React from 'react';
import styles from './index.module.less';

export default function HomeFooter() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mySelf}>
        <div className={styles.partTitle}>孙赵祥</div>
        <p>剑气纵横三万里，一剑光寒十九洲。</p>
        <div className={styles.aboutMeButton}>About Me</div>
      </div>
      <div className={styles.relativedLink}>
        <div className={styles.partTitle}>相关链接</div>
        <div className={styles.linkItems}>
          <i className="iconfont icon-bokeyuan"><span>博文</span></i>
          <i className="iconfont icon-ziyuan"><span>资源</span></i>
          <i className="iconfont icon-guidang"><span>归档</span></i>
          <i className="iconfont icon-liuyan"><span>留言</span></i>
          <i className="iconfont icon-tiaochariji"><span>日记</span></i>
        </div>
      </div>
      <div className={styles.concatMe}>
        <div className={styles.partTitle}>联系我</div>
        <i className="iconfont icon-weizhi"><span>地址：北京海淀区苏州街维亚大厦</span></i>
        <i className="iconfont icon-QQ"><span>QQ：309355484</span></i>
        <i className="iconfont icon-icon-email"><span>邮箱：sunnercms@163.com</span></i>
      </div>
    </div>
  )
}
