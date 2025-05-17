<script setup>
import { RouterView } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'
import '@/assets/main.css'  // 确保全局样式导入
</script>

<template>
  <MainLayout>
    <!-- 添加页面容器 -->
    <div class="app-container">
      <router-view v-slot="{ Component }">
        <component :is="Component" v-if="$route.matched.length" />
        <div v-else class="error-page">
          <h1>404 页面不存在</h1>
          <p>当前路径: {{ $route.path }}</p>
        </div>
      </router-view>
    </div>
  </MainLayout>
</template>

<style>
/* 新增全局布局样式 */
#app {
  max-width: none !important;  /* 移除默认限制 */
  margin: 0;
  padding: 0 !important;
}

.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
