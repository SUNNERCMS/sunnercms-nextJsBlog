/*
 * @Author: your name
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2020-09-24 16:22:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /my-app/pages/_app.js
 */
import '../styles/globals.scss'
// 该MyApp组件是顶级组件，将在所有不同页面上通用。例如，在页面之间导航时，可以使用此组件来保持状态。
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
