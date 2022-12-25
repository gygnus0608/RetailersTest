// home模块的小仓库

// 引入api
import { reqCategoryList, reqGetBannerList, reqGetFloorList } from '@/api'
const actions = {
    // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        // console.log(result);
        if (result.code == 200) {
            commit('CATEGORYLIST', result.data)
        }
    },
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        // console.log(result.data);
        if (result.data.code == 200) {
            commit('GETBANNERLIST', result.data.data)
        }
    },
    async getFloorList({ commit }) {
        let result = await reqGetFloorList();
        // console.log(result.data);
        if (result.data.code == 200) {
            commit('GETFLOORLIST', result.data.data)
        }
    }
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        // 仓库中的数组=服务器返回的数组
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
};
const state = {
    // 仓库中的起始值(根据接口的返回值进行初始化)
    categoryList: [],
    bannerList: [],
    floorList: []
};


const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}