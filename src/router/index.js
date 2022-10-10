import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/teacher' },
  {
    path: '/messageList',
    name: 'messageList',
    component: () => import('../views/message/MessageList.vue'),
    meta: { title: '消息列表' },
  },
  {
    path: '/messageDesc',
    name: 'messageDesc',
    component: () => import('../views/message/MessageDesc.vue'),
    meta: { title: '消息详情' }
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: () => import('../views/Index.vue'),
    redirect: '/teacher/mine',
    children: [
      {
        path: 'mine',
        name: 'mine',
        component: () => import('../views/teacher/Index.vue'),
        meta: { title: '教师端主页' },
      },
      {
        path: 'bookingHistory',
        name: 'bookingHistory',
        component: () => import('../views/teacher/BookingHistory.vue'),
        meta: { title: '预约记录' }
      },
      {
        path: 'answerList',
        name: 'answerList',
        component: () => import('../views/teacher/AnswerList.vue'),
        meta: { title: '心理答疑' }
      },
      {
        path: 'answerDesc',
        name: 'answerDesc',
        component: () => import('../views/teacher/AnswerDesc.vue'),
        meta: { title: '心理答疑' }
      },
      {
        path: 'answer',
        name: 'answer',
        component: () => import('../views/teacher/Answer.vue'),
        meta: { title: '我来回答' }
      },
      {
        path: 'answerMy',
        name: 'answerMy',
        component: () => import('../views/teacher/AnswerMy.vue'),
        meta: { title: '我的答疑' }
      },
      {
        path: 'evanuateList',
        name: 'evanuateList',
        component: () => import('../views/teacher/EvanuateList.vue'),
        meta: { title: '咨询评价' }
      },
      {
        path: 'infoSetting',
        name: 'infoSetting',
        component: () => import('../views/teacher/InfoSetting.vue'),
        meta: { title: '信息设置' }
      }, {
        path: 'evanuateSetting',
        name: 'evanuateSetting',
        component: () => import('../views/teacher/EvanuateSetting.vue'),
        meta: { title: '咨询预约设置' }
      },
    ]
  },
  {
    path: 'parent',
    name: '/parent',
    component: () => import('../views/Index.vue'),
    redirect: '/parent/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/parent/index/Index.vue'),
        meta: { title: '首页' }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta?.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
