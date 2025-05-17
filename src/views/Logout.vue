<template>
  <div class="logout-container">
    <el-result
      title="退出登录成功"
      sub-title="您已安全退出系统"
      icon="success"
    >
      <template #extra>
        <el-button type="primary" @click="goLogin">重新登录</el-button>
      </template>
    </el-result>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goLogin = () => {
  // 清除登录状态
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<style scoped>
.logout-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>