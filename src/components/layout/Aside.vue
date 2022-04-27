<template>
  <div class="aside">
    <el-switch
      v-model="isCollapse"
      size="large"
      @change="switchCollapse"
    />
    <el-menu
      default-active="vue"
      :default-openeds="['vue']"
      class="el-menu-vertical-demo"
      :collapse="!isCollapse"
    >
      <template v-for="menu in store.config" :key="menu.label">
        <el-sub-menu :index="menu.label">
          <template #title>
            <el-icon>
              <img :src="menu.image" alt="">
            </el-icon>
            <span>{{menu.label}}</span>
          </template>
          <el-menu-item v-for="group in menu.group" :key="group.subTitle" :index="group.subTitle" @click="menuClick(group)">
            {{group.subTitle}}
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"
// pinia保存的状态
import { useStore } from "@/store";

const store = useStore()
const isCollapse = ref(true);
const router = useRouter()
const emit = defineEmits(['collapse'])

const switchCollapse = () => {
  emit('collapse',isCollapse.value)
}

// 菜单点击
const menuClick = (item) => {
  router.replace({path: "/doc",query: {src: item.officialWebsite}})
}

</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.aside {
  .el-switch {
    display: flex;
    justify-content: center;
  }
  .el-menu {
    border: none;
    /deep/ .el-menu-item-group__title {
    }
  }
  img { // logo图片
    width: 20px;
    height: 20px;
  }
}
</style>
