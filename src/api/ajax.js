/*
 ajax请求函数模块
 函数的返回值：promise对象（异步返回的数据是：response.data）
*/
import axios from 'axios'

// type = 'GET' 指定type的默认值是GET
export default function ajax(url = '', data = {}, type = 'GET') {

  return new Promise(function (resolve, reject) {
    //(1)执行异步ajax请求
    let promise;
    if (type === 'GET') {
      // 准备 url query 参数数据
      let dataStr = ''; //数据拼接字符串
      Object.keys(data).forEach(key => {
        //dataStr = 'key=value&key=value&key=value&'，最后多出一个&
        dataStr += key + '=' + data[key] + '&';
      })
      if (dataStr !== '') {
        //substring() 方法用于提取字符串位于两个指定下标之间的字符
        //dataStr = 'key=value&key=value&key=value'，截取掉最后一个&
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr;
      }
      // 发送 get 请求【url中携带参数dataStr】
      promise = axios.get(url);
    } else {
      // 发送 post 请求
      promise = axios.post(url, data);
    }

    //(2)成功了调用resolve()
    promise.then(response => {
      resolve(response.data);
    })
      //(3)失败了调用reject()
      .catch(error => {
        reject(error);
      })
  })
}
