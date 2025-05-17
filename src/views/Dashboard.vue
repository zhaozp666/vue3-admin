<template>
  <div class="dashboard">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>系统概览</span>
        </div>
      </template>
      <div class="card-content">
        <el-statistic title="今日活跃用户" :value="3856" />
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.box-card {
  margin: 20px;
}
</style>