// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail.vue'

//创建并暴露一个路由器
const router = new VueRouter({
  //   mode: 'history',
  //   name: '',
  routes: [
    {
      name: 'guanyu',
      path: '/about',
      component: About,
      meta: {
        title: '关于',
      },
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '主页',
      },
      children: [
        {
          path: 'message',
          component: Message,
          name: 'message',
          meta: {
            isAuth: true,
            title: '新闻',
          },
          children: [
            {
              name: 'xiangqing',
              path: 'detail/:id/:title',
              meta: {
                title: '详情',
              },
              component: Detail,
              // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
              //   props: {a:1, b:'hello'},

              //   props的第二种写法，值为布尔值，若布尔值为真，就会把路由组件收到的所有params参数，以props的形式传给Detail组件
              //   props: true,

              //   props的第三种写法， 值为函数
              props($route) {
                return {
                  id: $route.params.id,
                  title: $route.params.title,
                }
              },
            },
          ],
        },
        {
          name: 'news',
          path: 'news',
          component: News,
          meta: {
            isAuth: true,
            title: '新闻',
          },
          beforeEnter: (to, from, next) => {
            if (to.meta.isAuth) {
              if (localStorage.getItem('name') === '张三1') {
                next()
              } else {
                alert('用户名不对， 无权限查看')
              }
            } else {
              next()
            }
          },
        },
      ],
    },
  ],
})

// 全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to, from, next) => {
//   //   document.title = to.meta.title || '我的系统'
//   if (to.meta.isAuth) {
//     if (localStorage.getItem('name') === '张三1') {
//       next()
//     } else {
//       alert('用户名不对， 无权限查看')
//     }
//   } else {
//     next()
//   }
// })

//  全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
  document.title = to.meta.title || '我的系统'
})

export default router
