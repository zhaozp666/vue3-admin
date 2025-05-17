<template>
  <el-card header="安全设置" class="security-card">
    <el-form label-width="120px">
      <el-form-item label="修改密码">
        <el-input type="password" show-password placeholder="新密码" />
      </el-form-item>
      <el-form-item label="双重认证">
        <el-switch v-model="twoFactorAuth" />
      </el-form-item>
      <el-form-item label="登录历史">
        <el-timeline>
          <el-timeline-item
            v-for="(log, index) in loginLogs"
            :key="index"
            :timestamp="log.time"
          >
            {{ log.ip }} - {{ log.location }}
          </el-timeline-item>
        </el-timeline>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { Lock } from '@element-plus/icons-vue'

const twoFactorAuth = ref(false)
const loginLogs = ref([
  { time: '2024-02-20 14:30', ip: '192.168.1.1', location: '中国 北京' },
  { time: '2024-02-19 09:15', ip: '10.0.0.2', location: '中国 上海' }
])
</script>

<style scoped>
.security-card {
  max-width: 800px;
  margin: 20px auto;
}
</style>