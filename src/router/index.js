import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  redirect: "/a",
  meta:{
    title:'前端卡片特效'
  },
  children: [{
      path: '/vue',
      name: 'vue',
      component: () => import('../views/vue/vue.vue'),
      children: [{
        path: '/a',
        name: 'a',
        component: () => import('../views/vue/compoent/a.vue')
      }, {
        path: '/websocket',
        name: 'websocket',
        component: () => import('../views/vue/compoent/websocket.vue')
      }]
    },

    {
      path: '/react',
      name: 'react',
      component: () => import('../views/react/react.vue'),
      children: [{
        path: '/b',
        name: 'b',
        component: () => import('../views/react/compoent/b.vue')
      }, ]
    },
    {
      path: '/echarts',
      name: 'ECharts',
      component: () => import('../views/echarts.vue')
    },
    {
      path: '/3D',
      name: '3D',
      component: () => import('../views/3D/3D.vue'),
      children: [{
        path: '/card',
        name: 'card',
        component: () => import('../views/3D/compoent/card.vue')
      }, ]
    },
    {
      path: '/opacity',
      name: 'opacity',
      component: () => import('../views/opacity.vue'),
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('../views/demo.vue'),
    },
    {
      path: '/User/:id/:name',
      name: 'User',
      component: () => import('../views/User.vue'),
    },
    {
      path: '/BlurEffect',
      name: 'BlurEffect',
      component: () => import('../views/BlurEffect.vue'),
    },
    {
      path: '/ValueTransmission',
      name: 'ValueTransmission',
      component: () => import('../views/ValueTransmission.vue'),
    },
    {
      path: '/sride',
      name: 'sride',
      component: () => import('../views/sride.vue'),
    },
    {
      path: '/run',
      name: 'run',
      component: () => import('../views/run.vue'),
    },
    {
      path: '/hover',
      name: 'hover',
      component: () => import('../views/hover.vue'),
    },
    {
      path: '/fire/:text',
      name: 'fire',
      component: () => import('../views/fire.vue'),
    },
    {
      path: '/Sudoku',
      name: 'Sudoku',
      component: () => import('../views/Sudoku.vue'),
    },
    {
      path: '/rgba',
      name: 'rgba',
      component: () => import('../views/rgba.vue'),
    },
    {
      path: '/roundTurntable',
      name: 'roundTurntable',
      component: () => import('../views/roundTurntable.vue'),
    },
    {
      path: '/speak',
      name: 'speak',
      component: () => import('../views/speak.vue'),
    },
    {
      path: '/playingcards',
      name: 'playingcards',
      component: () => import('../views/playingcards.vue'),
    },
    {
      path: '/weather',
      name: 'weather',
      component: () => import('../views/weather.vue'),
    },
    {
      path: '/network',
      name: 'network',
      component: () => import('../views/network.vue'),
      meta:{ title: '实时网络监控' }
    },
    {
      path: '/webRtc',
      name: 'webRtc',
      component: () => import('../views/webRtc.vue'),
      meta:{ title: 'Vue-WebRTC' }
    },
    {
      path: '/verificationCode',
      name: 'verificationCode',
      component: () => import('../views/verificationCode.vue'),
      meta:{ title: '验证码' }
    }
  ]
}, ]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async(to) => {
  if(to.meta.title) {
    document.title = to.meta.title;
  }
})

export default router
