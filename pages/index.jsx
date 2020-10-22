import Layout from '../components/Layout/index'
import styles from './index.module.scss'
import utilStyles from '../styles/utils.module.scss'
// 从本质上讲，getStaticProps允许您告诉Next.js：“嘿，此页面具有某些数据依赖关系-因此，在构建时预渲染此页面时，请确保先解决它们！”
// getStaticProps运行只在服务器端。
// 它永远不会在客户端上运行。它甚至不会包含在浏览器的JS包中。这意味着您可以编写诸如直接数据库查询之类的代码，而无需将其发送到浏览器。

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <div className={styles.homePageContainer}>
        {/* 首页中间信息展示 */}
        <div className={styles.homeInfoContainer}>
          <div className={styles.title}>去&nbsp;哪&nbsp;儿</div>
          <div className={styles.subTitle}>剑气纵横三万里，一剑光寒十九洲</div>
          <div className={styles.enterButton}>Enter Blog</div>
        </div>
        {/* 首页右侧抽屉 */}
        <div className={styles.rightDrawer}>
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
        </div>
        <div className={styles.drawerButton}>
          <div className={styles.closeIcon}>
            <i className="iconfont icon-wei-"></i>
          </div>
        </div>
      </div>
    </Layout>
  )
}

