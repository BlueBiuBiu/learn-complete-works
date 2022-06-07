<template>
  <div class="header">
    
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { getUserConfigByUsername } from "@/service/user/userConfig.js" 
import { useStore } from "@/store/index.js"

const store = useStore()

const awaitWrap = (promise) => {
  return promise
    .then(res => ({data: res, err:null}))
    .catch(err => ({data: null, err}))
}

onMounted(async () => {
  const result = await awaitWrap(getUserConfigByUsername("admin"))
  console.log('result22',result);
  return
  const filter = new Set()
  const userConfig = []
  result.forEach((item,index) => {
    if(!filter.has(item.title)) {
      filter.add(item.title)
      userConfig.push({
        image: item.imageUrl,
        label: item.title,
        group: [item.groupItem]
      })
    } else {
      const index = userConfig.findIndex(configItem => configItem.label === item.title)
      userConfig[index].group.push(item.groupItem)
    }
  })
  console.log(userConfig);
  store.saveUserConfig(userConfig)
})


</script>

<style lang="less" scoped>

</style>
