// 对axios进行二次封装
import axios from 'axios';
// 引入进度条
import nprogress from 'nprogress';
// console.log(nprogress);
// 引入进度条样式
import "nprogress/nprogress.css";
// 引入store(为了添加uuid)
import store from '@/store';
// 创建axios实例
const requests = axios.create({
    // 基础路径
    baseURL:"/api",
    // 请求超时的时间
    timeout:5000
})
// 请求拦截器
requests.interceptors.request.use((config)=>{
    // console.log(store);
    // 如果store中存在uuid_token
    if(store.state.detail.uuid_token){
        // 请求头添加一个字段用来接收uuid_token，然后才能把uuid_token传给购物车组件
        config.headers.userTempId = store.state.detail.uuid_token;
    }
    if(store.state.user.token){
        config.headers.token = store.state.user.token;
    }
    nprogress.start();
    return config;
});
// 响应拦截器
requests.interceptors.response.use((res)=>{
    nprogress.done();
    // 成功的回调函数
    return res.data
},(error)=>{
    return Promise.reject(new Error('faile'));
})
// 对外暴露
export default requests