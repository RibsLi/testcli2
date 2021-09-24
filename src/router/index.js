import Vue from 'vue'
import Router from 'vue-router'

//路由懒加载
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
const Home = () => import('../components/Home')
const About = () => import('../components/About')
// const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      },
      children: [
        // {
        //   path: '',
        //   redirect: 'news'
        // },
        {
          //子路由里面path不能加/
          path: 'news',
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessage
        }
      ]
    },
    {
      path: '/about',
      component: About,
      meta: {
        title: '关于'
      },
    },
    {
      path: '/user/:id',
      component: () => import('../components/User'),
      meta: {
        title: '用户'
      },
    }
  ],
  linkActiveClass: 'active'
})

//全局导航守卫->前置钩子(guard)beforeEach(), 必须执行next()才会跳转
router.beforeEach(function(to, from, next){
  document.title = to.matched[0].meta.title
  next()
})
//后置钩子(hook)afterEach(),不需要执行next()
router.afterEach((to, from)=>{

})

export default router


// 解决vue-router在3.0版本以上重复点击菜单报错的问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}