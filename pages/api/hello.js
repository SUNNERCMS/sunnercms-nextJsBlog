/*
 * @Author: your name
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2020-09-24 21:20:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/pages/api/hello.js
 */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// req is an instance of http.IncomingMessage, plus some pre-built middlewares you can see https://www.nextjs.cn/docs/api-routes/api-middlewares.
// res is an instance of http.ServerResponse, plus some helper functions you can see https://www.nextjs.cn/docs/api-routes/response-helpers.
// Try accessing it at http://localhost:3000/api/hello. You should see {"text":"Hello"}.

export default (req, res) => {
  res.status(200).json({ text: 'Hello' })
}
