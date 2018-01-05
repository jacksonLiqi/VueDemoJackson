import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Buy from '@/components/buy'
import Detail from '@/components/detail'
import RegisterComponent from '@/components/register';
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: "/detail/:id", //  /detail/dwa 动态路由
            name: "mydetail",
            component: Detail
        },
        {
            path: '/register', //路径
            component: RegisterComponent //加载的组件
        },
        {
            path: '/*',
            redirect: '/'
        },

    ]
})