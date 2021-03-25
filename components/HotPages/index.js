/*
 * @Author: your name
 * @Date: 2020-10-24 21:55:20
 * @LastEditTime: 2020-10-30 23:55:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sunnercms-nextJsBlog/components/HotPages/index.js
 */
import React, { Component } from 'react';
import styles from './index.module.less';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { message } from 'antd';
// import 'antd/dist/antd.css'; 

class HotPages extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstvalue: 'https://sunzhaoxiang.blog.csdn.net/article/details/109319412',
      secondvalue: 'https://sunzhaoxiang.blog.csdn.net/article/details/81671304',
      thirdvalue: 'https://sunzhaoxiang.blog.csdn.net/article/details/80006224'
    }
  }

  linkjump = (path) => {
    console.log('path', path)
    window.open(path);
  }

  copyLinkHandle = () => {
    console.log('object', 1111)
  }

  onCopyCallBack = () => {
    message.success('链接复制成功',0.6);
  }

  render() {
    return (
      <div className={styles.hotPagesContainer}>
        <h1>热门文章</h1>
        <div className={styles.titleDesc}>
          欢迎阅读、收藏、分享热门文章
          {/* <br/>
          昨夜的那场电影,还有我的心情. */}
        </div>
        <div className={styles.contents}>
          <div className={styles.contentItem}>
            <div className={styles.imgContainer}>
              <CopyToClipboard text={this.state.firstvalue} onCopy={this.onCopyCallBack}>
                <div className={ `${styles.imgMask} ${styles.sweepToBottom}`} onClick={this.copyLinkHandle}>
                  <i className="iconfont icon-fuzhilianjie"></i>
                </div>
              </CopyToClipboard>
              <img
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3155886573,2573739945&fm=26&gp=0.jpg"
                className={styles.itemImage}
              />
            </div>
            <div className={styles.itemInfo}>
              <div className={styles.itemName}>next.js中antd引入以及按需加载</div>
              <div className={styles.itemDate}>2020-10-27 20:03:52</div>
              <p className={styles.itemDesc}>
              next.js中antd引入以及按需加载配置，踩坑记录。
              </p>
              <div className={styles.readMore} onClick={() => this.linkjump(this.state.firstvalue)}>阅读更多</div>
            </div>
          </div>

          <div className={styles.contentItem}>
            <div className={styles.imgContainer}>
              <CopyToClipboard text={this.state.secondvalue} onCopy={this.onCopyCallBack}>
                <div className={ `${styles.imgMask} ${styles.sweepToBottom}`} onClick={this.copyLinkHandle}>
                  <i className="iconfont icon-fuzhilianjie"></i>
                </div>
              </CopyToClipboard>
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603651196522&di=a16700caf33d74f13f72dc94aeb6bdaf&imgtype=0&src=http%3A%2F%2Fimg.yuntiy.com%2Fillustration%2F1535098791991.jpg"
                className={styles.itemImage}
              />
            </div>
            <div className={styles.itemInfo}>
              <div className={styles.itemName}>js事件循环机制</div>
              <div className={styles.itemDate}>2019年12月24日</div>
              <p className={styles.itemDesc}>
              一、JS单线程、异步、同步概念,从上一篇说明vue nextTick的文章中，多次出现“事件循环”这个名词，简单说明了事件循环的步骤，以便理解nextTick的运行时机，这篇文章将更为详细的分析下事件循环。在此之前需要了解JS单线程，及由此产生的
              </p>
              <div className={styles.readMore} onClick={() => this.linkjump(this.state.secondvalue)}>阅读更多</div>
            </div>
          </div>


          <div className={styles.contentItem}>
            <div className={styles.imgContainer}>
              <CopyToClipboard text={this.state.thirdvalue} onCopy={this.onCopyCallBack}>
                <div className={ `${styles.imgMask} ${styles.sweepToBottom}`} onClick={this.copyLinkHandle}>
                  <i className="iconfont icon-fuzhilianjie"></i>
                </div>
              </CopyToClipboard>
              <img
                src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=389917905,3016311303&fm=26&gp=0.jpg"
                className={styles.itemImage}
              />
            </div>
            <div className={styles.itemInfo}>
              <div className={styles.itemName}>希尔排序--简单易懂图解</div>
              <div className={styles.itemDate}>2018-04-19 15:56:22</div>
              <p className={styles.itemDesc}>
              图解算法---希尔排序前情回顾：直接插入排序（对插入排序不熟悉的建议先阅读此文）一天，一尘拿着扑克自己在那玩，刚被师傅看见了首先它把较大的数据集合分割成若干个小组（逻辑上分组），然后对每一个小组分别进行插入排序，此时，插入排序所作用
              </p>
              <div className={styles.readMore} onClick={() => this.linkjump(this.state.thirdvalue)}>阅读更多</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HotPages;