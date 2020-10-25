/*
 * @Author: your name
 * @Date: 2020-10-25 23:00:36
 * @LastEditTime: 2020-10-25 23:46:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sunnercms-nextJsBlog/components/IntroduceDesc/index.js
 */
import React from 'react';
import styles from './index.module.scss';

export default function HomeFooter() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mySelf}>
        <h4>孙赵祥</h4>
        <p>剑气纵横三万里，一剑光寒十九洲。</p>
        <div className={styles.aboutMeButton}>About Me</div>
      </div>
      <div className={styles.relativedLink}>
        <h4>相关链接</h4>
        <i className="iconfont icon-weizhi1"><span>地址：北京海淀区苏州街维亚大厦</span></i>
        <i className="iconfont icon-weizhi1"><span>QQ：309355484</span></i>
        <i className="iconfont icon-weizhi1"><span>邮箱：sunnercms@163.com</span></i>
      </div>
      <div className={styles.concatMe}>
        <h4>联系我</h4>
        <i className="iconfont icon-weizhi1"><span>地址：北京海淀区苏州街维亚大厦</span></i>
        <i className="iconfont icon-weizhi1"><span>QQ：309355484</span></i>
        <i className="iconfont icon-weizhi1"><span>邮箱：sunnercms@163.com</span></i>
      </div>
    </div>
  )
}
