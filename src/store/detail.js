import { reqGoodsInfo,reqAddOrUpdateShopCart } from "@/api"
import {getUUID} from '@/utils/uuid_token'
const state = {
    goodInfo:{},
    // 临时游客身份
    uuid_token:getUUID()
}
const mutations = {
    GETGOODSINFO(state,goodInfo){
        state.goodInfo = goodInfo
    }
}
const actions = {
    async getGoodsInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId);
        // console.log(result);
        if(result.code == 200){
            // console.log(result.data.data);
            commit('GETGOODSINFO',result.data)
        }
    },
    // 加入购物车：只要数据请求成功就可以了，不用往仓库中添加新的数据（不用进行mutations和state）
    // 加入购物车时需要告诉后端服务器你是谁，所以需要用到uuid临时游客身份
    async AddOrUpdateShopCart({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCart(skuId,skuNum);
        // console.log(skuNum);
        if(result.code == 200){
            return 'ok'
        }
        else{
            return Promise.reject(new Error('false'))
        }
    }
}
// 简化数据
const getters = {
    // 简化路径导航信息
    categoryView(state){
        // 防止报错（state.goodInfo的结果是空对象，空对象.categoryView是undefined）要加上{}
        return state.goodInfo.categoryView || {}
    },
    // 简化产品信息
    skuInfo(state){
        return state.goodInfo.skuInfo || {}
    },
    // 简化产品售卖属性
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || []
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}