<template>
  <el-card header="角色管理">
    <el-table :data="roles">
      <el-table-column prop="name" label="角色名称" />
      <el-table-column prop="perms" label="权限数量" />
    </el-table>
  </el-card>
</template>

<script setup>
import { ref } from 'vue' // 添加ref导入

const roles = ref([
  { name: '管理员', perms: 15 },
  { name: '编辑', perms: 8 }
])
</script>