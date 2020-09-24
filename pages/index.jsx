import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout/index'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/Date/index'

// 从本质上讲，getStaticProps允许您告诉Next.js：“嘿，此页面具有某些数据依赖关系-因此，在构建时预渲染此页面时，请确保先解决它们！”
// getStaticProps运行只在服务器端。
// 它永远不会在客户端上运行。它甚至不会包含在浏览器的JS包中。这意味着您可以编写诸如直接数据库查询之类的代码，而无需将其发送到浏览器。

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {/* <small> 标签定义小型文本（和旁注）。 */}
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

