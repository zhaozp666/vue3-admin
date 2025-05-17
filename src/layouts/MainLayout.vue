<script setup>
// 添加图标导入
import { HomeFilled, InfoFilled, UserFilled, SwitchButton } from '@element-plus/icons-vue'
</script>

<template>
  <div class="main-layout">
    <ElMenu 
      mode="horizontal"
      class="nav-menu"
      :default-active="$route?.path || '/'"  
      router
    >
      <ElMenuItem index="/">
        <el-icon><HomeFilled /></el-icon>
        首页
      </ElMenuItem>
      <ElMenuItem index="/about">
        <el-icon><InfoFilled /></el-icon>关于</ElMenuItem>
      <ElMenuItem index="/profile">
        <el-icon><UserFilled /></el-icon>
        我的资料
      </ElMenuItem>
      <ElMenuItem index="/logout">
        <el-icon><SwitchButton /></el-icon>
        退出登录
      </ElMenuItem>

      
    </ElMenu>
    
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.nav-menu {
  padding: 0 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  /* 移除 space-between 改为默认排列 */
}

/* 调整右侧菜单样式 */
.nav-right {
  margin-left: auto;
  position: static; /* 移除相对定位 */
}

/* 强制显示下拉菜单标题 */
.el-sub-menu :deep(.el-sub-menu__title) {
  display: flex !important;
  align-items: center;
  padding: 0 15px !important;
}

/* 添加下拉菜单展开时的样式 */
.el-sub-menu :deep(.el-sub-menu__icon-arrow) {
  display: inline-block !important;
  margin-left: 8px;
}
</style>

.content {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
}