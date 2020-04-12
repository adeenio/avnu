import Vue from 'vue'
import VueRouter from 'vue-router'
import logIn from '../views/logIn.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/home/:id', component: Home,
    children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /:id/home is matched
          path: '/home',
        },
        {
          path: '/about',
        }
      ],
  },
	{
		path: '/login',
		name: 'login',
		component: logIn,
	},

	{
		path: '/manage',
		name: 'manage',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// require auth
		component: () => import(/* webpackChunkName: "manage" */ '../views/Manage.vue')

	},
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
})

export default router
