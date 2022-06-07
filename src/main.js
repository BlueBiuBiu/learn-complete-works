import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import routes from './router';
import isInIcestark from '@ice/stark-app/lib/isInIcestark';
import getBasename from '@ice/stark-app/lib/getBasename';
import setLibraryName from '@ice/stark-app/lib/setLibraryName';
import "normalize.css"
import '../node_modules/element-plus/theme-chalk/index.css' // 用相对路径

setLibraryName("vueApp")
export const history = createWebHistory(isInIcestark() ? getBasename() : '/');

let vue = null;

const runApp = container => {
  const router = createRouter({
    history,
    routes,
  });
  vue = createApp(App);
  vue.use(ElementPlus, { size: 'small', zIndex: 3000 })
  vue.use(router)
  vue.use(createPinia())
  vue.mount(container);
};

if (!isInIcestark()) {
  runApp('#app');
}

export function mount({ container }) {
  runApp(container);
}

export function unmount() {
  if (vue) {
    vue.unmount();
  }
}