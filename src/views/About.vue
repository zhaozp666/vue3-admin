<template>
  <el-card class="about-card">
    <template #header>
      <div class="card-header">
        <el-icon><InfoFilled /></el-icon>
        <span>关于系统</span>
      </div>
    </template>
    
    <div class="content">
      <h3>系统版本</h3>
      <el-descriptions :column="1" border>
        <el-descriptions-item label="版本号">1.0.0</el-descriptions-item>
        <el-descriptions-item label="发布日期">2024-02-20</el-descriptions-item>
      </el-descriptions>

      <h3>开发团队</h3>
      <el-timeline>
        <el-timeline-item timestamp="2024/2/1" placement="top">
          系统架构设计完成
        </el-timeline-item>
        <el-timeline-item timestamp="2024/2/15" placement="top">
          核心功能开发完成
        </el-timeline-item>
      </el-timeline>
    </div>
  </el-card>
</template>

<script setup>
import { InfoFilled } from '@element-plus/icons-vue'
</script>

<style scoped>
.about-card {
  max-width: 800px;
  margin: 20px auto;
}

.content h3 {
  color: #606266;
  margin: 20px 0 10px;
}
</style>