import{reqGetSearchInfo} from '@/api'
// search模块的小仓库
const state = {
    searchList:{}
};
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
};
const actions = {
    async getSearchList({commit},params={}){
        let result = await reqGetSearchInfo(params);
        // console.log(result.data);
        if(result.code == 200){
            commit("GETSEARCHLIST",result.data)
        }
    }};
    // 简化数据
const getters = {
    attrsList(state){
        return state.searchList.attrsList
    },
    attrValueList(state){
        return state.searchList.attrValueList
    },
    goodsList(state){
        return state.searchList.goodsList
    },
    trademarkList(state){
        return state.searchList.trademarkList
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}