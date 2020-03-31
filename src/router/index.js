import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import page from '../views/Page.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/page/:id', component: page, props: 'true',
    children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '/page',
        },
        {
          path: '',
        }
      ],
  },
  {
    path: '/home',
    name: 'Manage',
    //require auth
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
	{
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/layout/logIn')
  }                                                                                                              
]

const router = new VueRouter({
  routes
})

export default router
