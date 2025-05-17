<template>
  <el-card header="用户列表">
    <el-table :data="users">
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="role" label="角色" />
    </el-table>
  </el-card>
</template>

<script setup>
import { ref } from 'vue' // 添加缺失的ref导入

const users = ref([
  { name: '张三', role: '管理员' },
  { name: '李四', role: '普通用户' }
])
</script>