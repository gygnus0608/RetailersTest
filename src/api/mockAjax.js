// 对axios进行二次封装
import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress';
// console.log(nprogress);
// 引入进度条样式
import "nprogress/nprogress.css";
// 创建axios实例
const requests = axios.create({
    // 基础路径
    baseURL:"/mock",
    // 请求超时的时间
    timeout:5000
})
// 请求拦截器
requests.interceptors.request.use((config)=>{
    nprogress.start();
    return config;
    
})
// 响应拦截器
requests.interceptors.response.use((res)=>{
    nprogress.done();
    // 成功的回调函数
    return res.data
},(error)=>{
    return Promise.reject(new Error('faile'));
})
// 对外暴露
export default axios