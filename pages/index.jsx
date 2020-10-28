import Layout from '../components/Layout/index';
import styles from './index.module.less';
import HotPages from '../components/HotPages/index';
import AboutLink from '../components/AboutLink/index';
import IntroduceDesc from '../components/IntroduceDesc/index';
import HomeFooter from '../components/HomeFooter/index';
import BackTop from '../components/BackTop/index';
// import CopyRight from '../components/CopyRight/index';
import { useEffect, useState } from 'react';
import cls from 'classnames';
// import 'antd/dist/antd.less';

export default function Home({ allPostsData }) {
  let backTopScrollFlag = true;
  // 右侧导航栏状态及处理事件
  const [rightDrawerStatus, setRightDrawerStatus] = useState(false);
  const [modalMaskStatus, setModalMaskStatus] = useState(false);
  // 置顶按钮的显示隐藏状态
  const [backTopStatus, setBackTopStatus] = useState(false);
  // 右侧导航信息栏，默认关闭，点击打开
  const rightDrawerClass = cls(styles.rightDrawer, rightDrawerStatus ? styles.open : styles.close);
  const modalMaskClass = cls(styles.modalMask, modalMaskStatus ? styles.modalMaskOpen : styles.modalMaskClose);
  // 置顶按钮的显示隐藏，样式控制
  // const backTopClass = cls(backTopStatus ? styles.backTopShow : styles.backTopHide);

  const openRightDrawer = () => {
    setRightDrawerStatus(true);
    setModalMaskStatus(true);
  }
  const closeRightDrawer = () => {
    setRightDrawerStatus(false);
    setModalMaskStatus(false);
  }
  const modalMaskHandle = () => {
    setRightDrawerStatus(false);
    setModalMaskStatus(false);
  }

  const scrollYHandle = () => {
    if(window.scrollY > 300 && backTopScrollFlag) {
      setBackTopStatus(true);
      backTopScrollFlag = false;
    } else if(window.scrollY === 0) {
      setBackTopStatus(false);
      backTopScrollFlag = true;
    }
  }

  const downArrowNextPageHandle = () => {
    window.scrollTo({
      top: document.body.clientHeight,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    console.log('document.body.clientHeight', document.body.clientHeight)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    window.addEventListener('scroll', scrollYHandle);
    return () => {
      window.removeEventListener('scroll', scrollYHandle);
    }
  }, [])

  return (
    <Layout home>
      <div className={styles.homePageContainer}>
        <div className={modalMaskClass} onClick={modalMaskHandle}></div>
        {/* 首页中间信息展示 */}
        <div className={styles.homeInfoContainer}>
          <div className={styles.title}>孙&nbsp;赵&nbsp;祥</div>
          <div className={styles.subTitle}>剑气纵横三万里，一剑光寒十九洲</div>
          <div className={styles.enterButton}>Enter Blog</div>
        </div>
        <div className={styles.navigatoDrawer} onClick={openRightDrawer}>
          <svg className={styles.icon} aria-hidden="true">
            <use xlinkHref="#icon-daohangzhankai1"></use>
          </svg>
        </div>
        <div className={styles.downArrow} onClick={downArrowNextPageHandle}>
          <svg className={styles.downArrowIcon} aria-hidden="true">
            <use xlinkHref="#icon-arrow-up"></use>
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
            <svg className={styles.icon} aria-hidden="true">
              <use xlinkHref="#icon-daohangshouqi"></use>
            </svg>
          </div>
        </div>
      </div>
      {/* 热门文章 */}
      <HotPages />
      <AboutLink/>
      <IntroduceDesc/>
      <HomeFooter/>
      <BackTop backTopStatus={backTopStatus}/>
    </Layout>
  )
}

