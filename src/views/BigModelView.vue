<template>
  <div class="bigmodel-container">
    <el-card class="query-card">
      <!-- 新增标题栏 -->
      <div class="card-header">
        <span class="header-title">大模型查询</span>
      </div>
      
      <div class="query-form">
        <el-input 
          v-model="queryText"
          placeholder="请输入查询内容"
          clearable
          class="input-box"
          @keyup.enter="handleQuery">
          <template #append>
            <el-button 
              type="primary" 
              @click="handleQuery"
              :icon="Search"
              class="query-button"
            >查询</el-button>
          </template>
        </el-input>  <!-- 保留单个闭合标签 -->
      </div>
      
      <!-- 新增结果显示区域 -->
      <div class="result-box" v-if="showQuery">
        <div class="result-header">
          <span class="result-title">模型输出：</span>
          <el-button 
            type="danger" 
            size="small"
            @click="clearResult"
          >清空</el-button>
        </div>
        <div class="result-content">
          {{ displayText }}
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { ElMessage } from 'element-plus'
import { Search } from '@element-plus/icons-vue'

const queryText = ref('')
const displayText = ref('')
const showQuery = ref(false)
let eventSource = null // 保存SSE连接

const handleQuery = async () => {
  try {
    // 关闭已有连接
    if (eventSource) {
      eventSource.close()
    }
    
    displayText.value = ''
    showQuery.value = true
    
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
    const queryParams = new URLSearchParams({
      query: queryText.value
    })
    
    eventSource = new EventSource(
      new URL(`/api/bigModel/chatStream?${queryParams}`, apiBaseUrl)
    )

    // 添加一次性监听器
    eventSource.onmessage = (event) => {
      displayText.value += event.data
    }
    
    // 添加错误监听器后需要设置不自动重连
    eventSource.onerror = () => {
      ElMessage.error('连接异常，请重试')
      eventSource.close()
      eventSource = null // 重置连接对象
    }
    
  } catch (error) {
    ElMessage.error('请求失败：' + error.message)
  }
}

// 添加组件卸载时的清理
onUnmounted(() => {  // [!code --]
  if (eventSource) {
    eventSource.close()
  }
})
const clearResult = () => {
  // 关闭现有连接
  if (eventSource) {
    eventSource.close()
  }
  queryText.value = ''
  displayText.value = ''
  showQuery.value = false
}


</script>

<style scoped>
/* 新增标题栏样式 */
.card-header {
  background-color: #409EFF;
  padding: 16px 24px;
  border-radius: 4px 4px 0 0;
  margin: -20px; /* 抵消el-card默认padding */
  margin-bottom: 20px;
}

.header-title {
  color: white;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
}

/* 调整卡片内边距 */
.query-card {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 20px; /* 保持内容区域间距 */
}

/* 新增按钮文字颜色样式 */
:deep(.query-button) {
  color: white !important;
}

/* 保持原有其他样式不变 */
.card-header {
  background-color: #409EFF;
  padding: 16px 24px;
  border-radius: 4px 4px 0 0;
  margin: -20px; /* 抵消el-card默认padding */
  margin-bottom: 20px;
}

.header-title {
  color: white;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
}

/* 调整卡片内边距 */
.query-card {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 20px; /* 保持内容区域间距 */
}

/* 新增结果区域样式 */
.result-box {
  margin-top: 24px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  padding: 16px;
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.result-title {
  font-weight: 500;
  color: #606266;
}

.result-content {
  background-color: #f8f9fa;
  padding: 12px;
  border-radius: 4px;
  white-space: pre-wrap;
  line-height: 1.6;
}
</style>