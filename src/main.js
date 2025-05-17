import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'  // 添加Element样式导入
import router from './router'  // 添加路由导入

const app = createApp(App)
app.use(ElementPlus)
app.use(router)  // 注册路由实例
app.mount('#app')

app.config.errorHandler = (err) => {
  console.error('全局错误:', err)
}
