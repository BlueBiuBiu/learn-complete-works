<template>
  <div class="container" v-loading="loading" element-loading-text="加载中...">
    <iframe @load="load" :src="route.query.src" frameborder="0"></iframe>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"

const route = useRoute()
let loading = ref(true)

const load = () => {
  loading.value = false
}

onBeforeRouteUpdate(to => {
  loading.value = true
})

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
