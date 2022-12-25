import {reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogout} from '@/api'
import { setToken,getToken,removeToken } from '@/utils/token'
const state ={
    code:'',
    token:getToken(),
    userInfo:{}
}
const mutations ={
    GETCODE(state,code){
        state.code = code
    },
    USERLOGIN(state,token){
        state.token = token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    CLEAR(state){
        state.token = '',
        state.userInfo = {},
        // 删除本地存储的token
        removeToken()
    }
}
const actions ={
    // 获取验证码
    async getCode({commit},phone){
        let result = await reqGetCode(phone)
        console.log(result);
        if(result.code == 200){
            commit('GETCODE',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 用户注册
    async userRegister({commit},user){
        let result = await reqUserRegister(user)
        console.log(result);
        if(result.code == 200){
            return 'ok'
        }
        else{
            return Promise.reject(new Error(result.message))
        }
    },
    // 用户登录(token)
    async userLogin({commit},data){
        console.log(data);
        let result = await reqUserLogin(data)
        console.log(result);
        if(result.code == 200){
            // 用户已经登录成功并且获取到token
            commit('USERLOGIN',result.data.token)
            // 持久化存储token
            setToken(result.data.token)
            return 'ok'
        }
        else{
            return Promise.reject(new Error(result.message))
        }
    },
    // 获取用户信息
    async getUserInfo({commit}){
        let result = await reqUserInfo()
        if(result.code == 200){
            commit('GETUSERINFO',result.data)
            return 'ok'
        }
        else{
            return Promise.reject(new Error(result.message))
        }
        
    },
    // 退出登录
    async userLogout({commit}){
        let result = await reqLogout()
        // 如果返回成功了，就派发mutations删除服务器的token，本地存储的token和userInfo
        if(result.code == 200){
            commit('CLEAR')
            return 'ok'
        }
        else{
            return Promise.reject(new Error(result.message))
        }
    }
}
const getters ={}

export default {
    state,
    mutations,
    actions,
    getters
}