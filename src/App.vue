<template>
  <el-config-provider :locale="localLanguage">
    <Layout />
  </el-config-provider>
</template>

<script>
// 国际化
import { ElConfigProvider } from "element-plus";
import { zhCn, en } from "@/config/i18n/index.js"
// 内置函数
import { ref, computed } from "vue";
// 组件
import Layout from "@/components/layout/layout.vue"

export default {
  name: "App",
  components: {
    ElConfigProvider,
    Layout
  },
  setup() {
    let local = ref("zhCn");
    const localLanguage = computed(() => {
      switch(local.value) {
        case "en":
          return en
        case "zhCn":
          return zhCn
      }
    })

    const changeLocale = () => {
      if(local.value === "zhCn") {
        local.value = "en"
      } else {
        local.value = "zhCn"
      }
    }

    return {
      local,
      localLanguage,
      changeLocale
    };
  },
};
</script>

<style lang="less" scoped>

</style>