import { reqCartList,reqDeleteCartById,reqUpdateCheckedById } from '@/api'
const state = {
    carlist:[]
}
const mutations = {
    GETCARLIST(state, carlist) {
        state.carlist = carlist
    }
}
const actions = {
    // 获取购物车列表数据
    async getCartList({ commit }) {
        let result = await reqCartList();
        // console.log(result);
        if (result.code == 200) {
            commit('GETCARLIST', result.data)
        }
    },
    // 删除购物车数据：返回删除成功即可，不需要三连环
    async deleteCartListBySkuId({commit},skuId){
        let result = await reqDeleteCartById(skuId);
        // console.log(result);
        // 请求成功就删除，不成功就报错
        if(result.code == 200){
            return 'ok'
        }
        else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 修改产品选中状态
    async updateCheckedById({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckedById(skuId,isChecked)
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 删除全部勾选的产品：循环遍历deleteCartListBySkuId
    deleteAllCheckedCart({dispatch,getters}){
        // 获取购物车的全部商品（放到一个数组中），可以利用Promise.All判断是否全部删除成功
        let PromiseAll = []
        getters.carlist.cartInfoList.forEach(element => {
            //需要根据skuId和isChecked来遍历删除选中的商品
            let promise = element.isChecked ==1? dispatch('deleteCartListBySkuId',element.skuId):''
            // 将每一次返回的promise添加到数组中
            PromiseAll.push(promise)
        });
        // 只有全部promise都返回成功，结果才能成功
        // 如果有一个失败，返回即为失败结果
        return Promise.all(PromiseAll)
        
    },
    // 全选产品
    updateAllCartChecked({dispatch,state},isChecked){
        let PromiseAll = []
        state.carlist[0].cartInfoList.forEach(element => {
            let promise = dispatch('updateCheckedById',{skuId:element.skuId,isChecked});
            PromiseAll.push(promise)
            console.log(element);
        });
        return Promise.all(PromiseAll)
    }
}
const getters = {
    carlist(state){
        return state.carlist[0] || {}
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}