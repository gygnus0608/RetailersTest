// 当前这个模块：API统一管理
import requests from './request';
import mockRequests from './mockAjax';

// 三级联动接口
// 发请求

export const reqGetBannerList = ()=>mockRequests({
    url:'/mock/banner',method:'get'
})
export const reqGetFloorList = ()=>mockRequests({
    url:'/mock/floor',method:'get'
})
export const reqCategoryList = ()=>requests({
    url:'/product/getBaseCategoryList',method:'get'
})
// 获取搜索模块的数据，给服务器传递一个默认参数（至少是一个空对象）
export const reqGetSearchInfo = (params)=>requests({
    url:'/list',method:'post',data:params
})
// 获取产品详情信息的接口 URL:/api/item/{skuId} 请求方式：get
export const reqGoodsInfo = (skuId)=>requests({
    url:`/item/${skuId}`,method:'get'
})
// 将产品添加到购物车
export const reqAddOrUpdateShopCart = (skuId,skuNum) =>requests({
    url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'
})
// 购物车结算 /api/cart/cartList
export const reqCartList = () =>requests({
    url:'/cart/cartList',method:'get'
})
// 删除购物车 /api/cart/deleteCart/{skuId}
export const reqDeleteCartById = (skuId)=>requests({
    url:`/cart/deleteCart/${skuId}`,method:'delete'
})
// 切换产品选中状态 /api/cart/checkCart/{skuId}/{isChecked}
export const reqUpdateCheckedById = (skuId,isChecked) =>requests({
    url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'
})
// 获取验证码 /api/user/passport/sendCode/{phone}
export const reqGetCode = (phone) =>requests({
    url:`/user/passport/sendCode/${phone}`,method:'get'
})
// 注册用户 /api/user/passport/register
export const reqUserRegister = (data) =>requests({
    url:'/user/passport/register',data:data,method:'post'
})
// 用户登录(token) /api/user/passport/login
export const reqUserLogin = (data) =>requests({
    url:'/user/passport/login',data,method:'post'
})
// 用户携带token获取用户信息 /api/user/passport/auth/getUserInfo
export const reqUserInfo = () =>requests({
    url:'/user/passport/auth/getUserInfo',method:'get'
})
// 退出登录 /api/user/passport/logout
export const reqLogout = () =>requests({
    url:'/user/passport/logout',method:'get'
})
// 获取订单交易页信息 /api/order/auth/trade
export const reqOrderInfo = () =>requests({
    url:'/order/auth/trade',method:'get'
})
// 提交订单 /order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = (tradeNo,data) =>requests({
    url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'
})
// 获取订单支付信息 /api/payment/weixin/createNative/{orderId}
export const reqPayInfo = (orderId) =>requests({
    url:`/payment/weixin/createNative/${orderId}`,method:'get'
})
// 获取订单支付状态 /api/payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus = (orderId) =>requests({
    url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'
})
// 获取个人订单页面 /api/order/auth/{page}/{limit}
export const reqMyOrderList = (page,limit) =>requests({
    url:`/order/auth/${page}/${limit}`,method:'get'
})