<template>
  <div class="login-container">
    <el-card header="用户登录" class="login-card">
      <el-form :model="form" label-width="80px">  <!-- 添加标签宽度 -->
        <el-form-item label="用户名">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password" />
        </el-form-item>
        <el-form-item>  <!-- 包裹按钮 -->
          <el-button type="primary" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import request from '@/utils/request'  // 重新引入请求模块
import { ElMessage } from 'element-plus'

const form = reactive({ username: '', password: '' })
const router = useRouter()

const handleLogin = async () => {
    // 改为POST请求并正确传递参数
    const { data } = await request.post('/api/login', {
        username: form.username,
        password: form.password
    })
    if (data) {
        localStorage.setItem('token', data.token)
        router.push('/')
        ElMessage.success('登录成功')
    }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #f0f9ff 0%, #e6f7ff 100%);
}

.login-card {
  width: 100%;
  max-width: 400px;
  margin: auto;
  box-shadow: 0 4px 12px rgba(61,169,255,0.15);
}

.el-form {
  padding: 24px;
}

/* 统一输入框宽度 */
.el-input {
  width: 240px;
}

/* 按钮右对齐 */
.el-form-item:last-child {
  display: flex;
  justify-content: flex-end;
}
</style>