<template>
  <el-card class="profile-card">
    <template #header>
      <div class="card-header">
        <el-icon><User /></el-icon>
        <span>个人资料</span>
      </div>
    </template>
    <el-form label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email" />
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { reactive } from 'vue'
import { User } from '@element-plus/icons-vue'

const form = reactive({
  name: '管理员',
  email: 'admin@example.com'
})
</script>

<style scoped>
.profile-card {
  max-width: 600px;
  margin: 20px auto;
}
</style>