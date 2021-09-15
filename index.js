import Vue from 'vue'
import Router from 'vue-router'
import hocthuat from '@/components/hocthuat.vue'
import nghethuat from '@/components/nghethuat.vue'
import thethao from '@/components/thethao.vue'
import xahoi from '@/components/xahoi.vue'
import mcq from '@/components/mcq.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mcq',
      name: mcq,
      component: mcq
    },
    {
      path: '/hocthuat',
      name: 'hocthuat',
      component: hocthuat
    },
    {
      path: '/nghethuat',
      name: 'nghethuat',
      component: nghethuat
    },
    {
      path: '/thethao',
      name: 'thethao',
      component: thethao
    },
    {
      path: '/xahoi',
      name: 'xahoi',
      component: xahoi
    }
  ]
})
