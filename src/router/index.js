import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'teacher',
    component: () => import('../views/teacher/Index.vue'),
    meta: { title: '教师端主页' }
  },
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
    path: '/bookingHistory',
    name: 'bookingHistory',
    component: () => import('../views/teacher/BookingHistory.vue'),
    meta: { title: '预约记录' }
  },
  {
    path: '/answerList',
    name: 'answerList',
    component: () => import('../views/teacher/AnswerList.vue'),
    meta: { title: '心理答疑' }
  },
  {
    path: '/answerDesc',
    name: 'answerDesc',
    component: () => import('../views/teacher/AnswerDesc.vue'),
    meta: { title: '心理答疑' }
  },
  {
    path: '/answer',
    name: 'answer',
    component: () => import('../views/teacher/Answer.vue'),
    meta: { title: '我来回答' }
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
