import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Production from '../views/Production.vue'
import ProductionGraphic from '../views/Graphic.vue'
import ProductionWeb from '../views/Web.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/production',
    name: 'Production',
    components: { default: Production },
    props: {
      default: true,

    },
    children: [{
      path: 'web',
      component: ProductionWeb
    },
    {
      path: 'graphic',
      component: ProductionGraphic
    }
    ]
  },
  {
    path: '/skill',
    name: 'Skill',
    component: () => import('../views/Myskill.vue')
  }, {
    path: "*",
    redirect: "/"
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
