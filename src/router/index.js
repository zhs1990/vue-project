import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/index.vue'
import Analysis from '../components/analysis/analysis.vue'
import Search from '../components/search/index.vue'
import Personal from '../components/personal/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/analysis',
      name: 'Analysis',
      component: Analysis
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    }
  ]
})
