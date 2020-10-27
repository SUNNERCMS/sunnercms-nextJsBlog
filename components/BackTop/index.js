/*
 * @Author: your name
 * @Date: 2020-10-26 11:56:08
 * @LastEditTime: 2020-10-26 15:19:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sunnercms-nextJsBlog/components/BackTop/index.js
 */
import React from 'react'
import styles from './index.module.less'
export default function BackTop(props) {
  
  const backTopHandle = () => {
    console.log(99999)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    console.log('props', props)
  }

  return (
    <div className={`${props.backTopStatus ? styles.backTopShow : styles.backTopHide} ${styles.backTopContainer}`} onClick={backTopHandle}>
    {/* <div className={`${props.backTopStatus ? styles.backTopHide : styles.backTopShow} ${styles.backTopContainer}`} onClick={backTopHandle}> */}
      <svg className={`${styles.backTopIcon}`} aria-hidden="true">
        <use xlinkHref="#icon-fanhuidingbu1"></use>
      </svg>
    </div>
  )
}
