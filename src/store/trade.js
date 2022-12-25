import {reqOrderInfo} from '@/api'
const state ={
    orderInfo:{}
}
const mutations ={
    GETORDERINFO(state,orderInfo){
        state.orderInfo = orderInfo
    }
}
const actions ={
    async getOrderInfo({commit}){
        let result = await reqOrderInfo()
        // console.log(result);
        if(result.code == 200){
            commit('GETORDERINFO',result.data)
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