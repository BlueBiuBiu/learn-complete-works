<template>
  <div class="container" element-loading-text="加载中...">
    <iframe @load="load" :src="store.src" frameborder="0"></iframe>
  </div>
</template>

<script setup>
import { onMounted, ref, getCurrentInstance } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"
import { useStore } from "@/store";

const route = useRoute()
const store = useStore()
const { proxy } = getCurrentInstance()
let loading = ref(true)
let src = ref('')

const load = () => {
  proxy.$spin.hide()
}

// onBeforeRouteUpdate(to => {
//   loading.value = true
// })

</script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: 100%;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
</style>
