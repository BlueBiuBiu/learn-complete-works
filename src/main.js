import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import router from './router'
import "normalize.css"
import '../node_modules/element-plus/theme-chalk/index.css' // 用相对路径

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(router)
app.use(createPinia())
app.mount('#app')
