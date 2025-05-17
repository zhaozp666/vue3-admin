<template>
  <div class="home-container">
    <el-row :gutter="0">
      <el-col :span="3" class="side-menu-col">
        <el-menu
          class="side-menu"
          default-active="/dashboard"
          router
          @select="handleMenuSelect"
        >
          <el-menu-item index="/dashboard">
            <el-icon><PieChart /></el-icon>
            <span>仪表盘</span>
          </el-menu-item>
          <!-- 新增大模型菜单 -->
          <el-menu-item index="/bigmodel">
            <el-icon><MagicStick /></el-icon>
            <span>大模型</span>
          </el-menu-item>
          <el-sub-menu index="user-management">
            <template #title>
              <el-icon><User /></el-icon>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/user/list">
              <el-icon><List /></el-icon>
              用户列表
            </el-menu-item>
            <el-menu-item index="/role/list">
              <el-icon><Lock /></el-icon>
              角色管理
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="settings">
            <template #title>
              <el-icon class="menu-icon"><Setting /></el-icon>  <!-- 添加图标样式类 -->
              <span>系统设置</span>
            </template>
            <el-menu-item index="/settings/profile">
              <el-icon><Setting /></el-icon>
              基本配置
            </el-menu-item>
            <el-menu-item index="/settings/security">
              <el-icon><Cpu /></el-icon>  <!-- 使用CPU图标替代 -->
              安全设置
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-col>

      <el-col :span="21">
        <div class="main-content">
          <h1 class="page-title">欢迎来到管理系统 <el-icon><House /></el-icon></h1>
          <el-divider />
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
// 修复图标导入
import { 
  PieChart, 
  MagicStick, // 新增图标
  User, 
  Setting, 
  House, 
  Lock,
  Cpu,
  List  // 新增图标
} from '@element-plus/icons-vue'

const handleMenuSelect = (index) => {
  console.log('Menu selected:', index)
}
</script>

<style scoped>
.home-container {
  height: 100vh;
  background-color: #f5f7fa;
}

.side-menu {
  height: 100vh;
  background-color: #fff;
  max-width: 200px;
  min-width: 160px;
}

/* 一级菜单样式 */
:deep(.el-sub-menu__title) {
  padding-left: 12px !important;
}

/* 二级菜单项样式 */
:deep(.el-sub-menu .el-menu-item) {
  padding-left: 32px !important;
}

/* 图标间距调整 */
.el-menu-item .el-icon {
  margin-right: 8px;
}

/* 保持菜单项文字对齐 */
.el-menu-item span {
  vertical-align: middle;
}

.main-content {
  padding: 24px;
  background-color: #fff;
  min-height: calc(100vh - 48px);
}

/* 统一所有一级菜单项样式 */
:deep(.el-menu-item),
:deep(.el-sub-menu__title) {
  padding-left: 12px !important;
  margin-left: 0 !important;
}

/* 确保图标对齐 */
:deep(.el-menu-item .el-icon),
:deep(.el-sub-menu__title .el-icon) {
  margin-right: 8px;
  width: 1em; /* 统一图标容器宽度 */
}

/* 移除可能影响对齐的默认样式 */
:deep(.el-sub-menu__title) {
  padding-right: 0 !important;
}
</style>