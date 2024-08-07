import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/parent' },
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
        name: 'tmine',
        component: () => import('../views/teacher/Index.vue'),
        meta: { title: '教师端主页' },
      },
      {
        path: 'bookingHistory',
        name: 'tbookingHistory',
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
    path: '/parent',
    name: 'parent',
    component: () => import('../views/Index.vue'),
    redirect: '/parent/tab/index',
    children: [
      {
        path: 'tab',
        name: 'tab',
        component: () => import('../views/parent/Index.vue'),
        children: [
          {
            path: 'index',
            name: 'index',
            component: () => import('../views/parent/index/Index.vue'),
            meta: { title: '首页' }
          },
          {
            path: 'book',
            name: 'book',
            component: () => import('../views/parent/book/Index.vue'),
            meta: { title: '深度好文' }
          },
          {
            path: 'class',
            name: 'class',
            component: () => import('../views/parent/class/Index.vue'),
            meta: { title: '在线课程' }
          },
          {
            path: 'mine',
            name: 'mine',
            component: () => import('../views/parent/mine/Index.vue'),
            meta: { title: '我的' }
          }
        ]
      },
      ...[
        {
          path: 'queryHistory',
          name: 'queryHistory',
          component: () => import('../views/parent/mine/query/History.vue'),
          meta: { title: '问答记录' }
        },
        {
          path: 'queryDesc',
          name: 'queryDesc',
          component: () => import('../views/parent/index/query/Desc.vue'),
          meta: { title: '心理答疑' }
        },
        {
          path: 'readHistory',
          name: 'readHistory',
          component: () => import('../views/parent/mine/read/History.vue'),
          meta: { title: '阅读记录' }
        },
        {
          path: 'bookDesc',
          name: 'bookDesc',
          component: () => import('../views/parent/book/Desc.vue'),
          meta: { title: '文章详情' }
        },
        {
          path: 'watchHistory',
          name: 'watchHistory',
          component: () => import('../views/parent/mine/watch/History.vue'),
          meta: { title: '观看记录' }
        },
        {
          path: 'classDesc',
          name: 'classDesc',
          component: () => import('../views/parent/class/Desc.vue'),
          meta: { title: '课程详情' }
        },
        {
          path: 'bookingHistory',
          name: 'bookingHistory',
          component: () => import('../views/parent/mine/booking/History.vue'),
          meta: { title: '预约记录' }
        },
        {
          path: 'reviewHistory',
          name: 'reviewHistory',
          component: () => import('../views/parent/mine/review/History.vue'),
          meta: { title: '测评记录' }
        },
        {
          path: 'reviewDesc',
          name: 'reviewDesc',
          component: () => import('../views/parent/index/review/Desc.vue'),
          meta: { title: '心理测试' }
        },
        {
          path: 'reviewSubject',
          name: 'reviewSubject',
          component: () => import('../views/parent/index/review/Subject.vue'),
          meta: { title: '测试界面' }
        },
        {
          path: 'reviewAnswer',
          name: 'reviewAnswer',
          component: () => import('../views/parent/index/review/Answer.vue'),
          meta: { title: '测评报告' }
        },
      ],
      ...[
        {
          path: 'queryList',
          name: 'queryList',
          component: () => import('../views/parent/index/query/Index.vue'),
          meta: { title: '心理答疑' }
        },
        {
          path: 'query',
          name: 'query',
          component: () => import('../views/parent/index/query/Query.vue'),
          meta: { title: '我要提问' }
        },
        {
          path: 'relax',
          name: 'relax',
          component: () => import('../views/parent/index/relax/Index.vue'),
          meta: { title: '放松解压' }
        },
        {
          path: 'review',
          name: 'review',
          component: () => import('../views/parent/index/review/Index.vue'),
          meta: { title: '心理测评' }
        },
        {
          path: 'relaxDesc',
          name: 'relaxDesc',
          component: () => import('../views/parent/index/relax/Desc.vue'),
          meta: { title: '放松解压' }
        },
        {
          path: 'booking',
          name: 'booking',
          component: () => import('../views/parent/index/booking/Index.vue'),
          meta: { title: '咨询预约' }
        },
        {
          path: 'teacherDesc',
          name: 'teacherDesc',
          component: () => import('../views/parent/index/booking/TeacherDesc.vue'),
          meta: { title: '教师详情' }
        },
        {
          path: 'checkBooking',
          name: 'checkBooking',
          component: () => import('../views/parent/index/booking/Booking.vue'),
          meta: { title: '预约' }
        },
      ]
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
