import Vue from 'vue'
import Router from 'vue-router'
import jumpone from '@/components/jumpone'
import Detail from '@/components/detail'
import RegisterComponent from '@/components/register';
import HomeComponent from "@/components/home.vue";
import ChooseComponent from "@/components/choose";


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/home',
            component: HomeComponent,

        },
        {
            path: '/jumpone',
            component: jumpone
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
            path: "/choose",
            component: ChooseComponent
        },
        {
            path: '/*',
            redirect: '/'
        },

    ]
})