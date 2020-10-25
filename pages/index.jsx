import Layout from '../components/Layout/index';
import styles from './index.module.scss';
import HotPages from '../components/HotPages/index';
import { useEffect, useState } from 'react';
import cls from 'classnames';

export default function Home({ allPostsData }) {
  // 右侧导航栏状态及处理事件
  const [rightDrawerStatus, setRightDrawerStatus] = useState(false);
  // 首页信息模块的动画过度效果
  // const [homeInfoScale, setHomeInfoScale] = useState(false);
  // 右侧导航信息栏，默认关闭，点击打开
  const rightDrawerClass = cls(styles.rightDrawer, rightDrawerStatus ? styles.open : styles.close);
  // const homeInfoScaleClass = cls(styles.homeInfoContainer, homeInfoScale ? styles.scaleLage : '');
  const openRightDrawer = () => {
    setRightDrawerStatus(true);
  }
  const closeRightDrawer = () => {
    setRightDrawerStatus(false);
  }
  // useEffect(() => {
  //   console.log(1111);
  //   setHomeInfoScale(true);
  // }, [])

  return (
    <Layout home>
      <div className={styles.homePageContainer}>
        {/* 首页中间信息展示 */}
        <div className={styles.homeInfoContainer}>
          <div className={styles.title}>孙&nbsp;赵&nbsp;祥</div>
          <div className={styles.subTitle}>剑气纵横三万里，一剑光寒十九洲</div>
          <div className={styles.enterButton}>Enter Blog</div>
        </div>
        <div className={styles.navigatoDrawer} onClick={openRightDrawer}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-daohangzhankai1"></use>
          </svg>
        </div>
        {/* 首页右侧抽屉 */}
        <div className={rightDrawerClass}>
          <div className={styles.drawerInfo}>
            <div className={styles.drawerImgContainer}>
              <img
                src="/images/profile.jpg"
                className={styles.headerImage}
              />
            </div>
            <div className={styles.drawerName}>孙赵祥</div>
            <div className={styles.nameDes}>zhaoxiang.sun</div>
            <div className={styles.desText}>为之则易 不为则难</div>
            <div className={styles.linkIconBar}>
              <i className="iconfont icon-github"></i>
              <i className="iconfont icon-csdn"></i>
              <i className="iconfont icon-xieboke"></i>
            </div>
            <div className={styles.concatInfo}>
              <div className={styles.concatInfoTopLine}>
                <i className="iconfont icon-weizhi1"><span>北京</span></i>
                <i className="iconfont icon-gongsimingcheng"><span>去哪儿</span></i>
              </div>
              <i className="iconfont icon-lianxifangshi"><span>18827377933</span></i>
              <i className="iconfont icon-icon-email"><span>sunnercms@163.com</span></i>
            </div>
          </div>
          <div className={styles.drawerButton} onClick={closeRightDrawer}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-daohangshouqi"></use>
            </svg>
          </div>
        </div>
      </div>
      {/* 热门文章 */}
      <HotPages />
    </Layout>
  )
}

