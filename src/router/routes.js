// 引入路由组件
// import Home from '../pages/Home'
// 路由懒加载：
const foo = () =>{return import('@/pages/Home')}
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Detail from '../pages/Detail'
import AddCartSuccess from '../pages/AddCartSuccess'
import ShopCart from '../pages/ShopCart'
import Trade from '../pages/Trade'
import Pay from '../pages/Pay'
import PaySuccess from '../pages/PaySuccess'
import Center from '../pages/Center'
// 引入二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'

export default [
    {
        path:'/home',
        component:foo,
        meta:{show:true}
    },
    {
        path:'/login',
        component:Login,
        meta:{show:false}
    },
    {
        path:'/register',
        component:Register,
        meta:{show:false}
    },
    {
        path:'/search/:keyword?',
        name:'search',
        component:Search,
        meta:{show:true},
    },
    {
        // 跳转到详情页的时候需要带参数，所以这里需要占位
        path:'/detail/:skuid',
        component:Detail,
        meta:{show:true}
    },
    {
        path:'/addCartSuccess',
        name:'addCartSuccess',
        component:AddCartSuccess,
        meta:{show:true}
    },
    {
        path:'/shopCart',
        component:ShopCart,
        meta:{show:true}
    },
    {
        path:'/trade',
        component:Trade,
        meta:{show:true},
        // 路由独享守卫
        beforeEnter:(to,from,next)=>{
            // 必须得经过shopcart页面才能进入trade，否则其他页面不能跳转
            if(from.path == "/shopCart"){
                next();
            }else{
                next(false)
            }
        }
    },
    {
        path:'/pay',
        component:Pay,
        meta:{show:true},
        // 路由独享守卫
        beforeEnter:(to,from,next)=>{
            // 必须得经过trade才能进入pay
            if(from.path == '/trade'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/paysuccess',
        component:PaySuccess,
        meta:{show:true}
        // 用另外一种方法：组件内守卫，必须得经过pay才能进入paysuccess
    },
    {
        path:'/center',
        component:Center,
        meta:{show:true},
        children:[
            {
                path:'myOrder',
                component:MyOrder,
            },
            {
                path:'groupOrder',
                component:GroupOrder,
            },
            // 重定向，跳转到center组件时默认显示myOrder子组件的内容
            {
                path:'/center',
                redirect:'/center/myOrder'
            }
        ]
    },
    // 重定向
    {
        path:'*',
        redirect:'./home'
    }
]