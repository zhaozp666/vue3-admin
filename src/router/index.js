import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 添加重定向到默认子路由
const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue'),
    redirect: '/dashboard',
    children: [
      { path: '/dashboard', 
        component: () => import('../views/Dashboard.vue') },
      { path: '/user', 
        component: () => import('../views/UserManage.vue') },
      {
        path: '/profile',
        component: () => import('../views/Profile.vue')
      },
      {
        path: '/settings/profile',
        component: () => import('../views/SettingsProfile.vue')
      },
      {
        path: '/settings/security',
        component: () => import('../views/SecuritySettings.vue')
      },
      {
        path: '/about',
        component: () => import('../views/About.vue')
      },
      {
        path: '/logout',
        component: () => import('../views/Logout.vue')
      },
      {
        path: '/user/list',
        component: () => import('../views/UserList.vue')
      },
      {
        path: '/role/list',
        component: () => import('../views/RoleList.vue')
      },
      {
        path: '/bigmodel',
        name: 'BigModel',
        component: () => import('@/views/BigModelView.vue')
      }
    ]
  },
  // 新增登录路由（必须放在根路由之外）
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

export default createRouter({
  // 修正为 Vite 的环境变量使用方式
  history: createWebHistory(import.meta.env.VITE_BASE_URL || '/'),
  routes
})