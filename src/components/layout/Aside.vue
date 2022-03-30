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
      <template v-for="menu in subMenus" :key="menu.label">
        <el-sub-menu :index="menu.label">
          <template #title>
            <el-icon>
              <img :src="menu.image" alt="">
            </el-icon>
            <span>{{menu.label}}</span>
          </template>
          <template v-for="group in menu.group" :key="group.title">
            <el-menu-item-group v-if="group.title">
              <template #title><span>{{group.title}}</span></template>
              <el-menu-item v-for="groupItem in group.groupItem" :key="groupItem.label" :index="groupItem.label" @click="menuClick(groupItem)">
                {{groupItem.label}}
              </el-menu-item>
            </el-menu-item-group>
            <div v-else>
              <el-menu-item v-for="groupItem in group.groupItem" :key="groupItem.label" :index="groupItem.label" @click="menuClick(groupItem)">
                {{groupItem.label}}
              </el-menu-item>
            </div>
          </template>
          
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"
// 个人配置
import { subMenus } from "./config";

const isCollapse = ref(true);
const router = useRouter()
const emit = defineEmits(['collapse'])

const switchCollapse = () => {
  emit('collapse',isCollapse.value)
}

// 菜单点击
const menuClick = (item) => {
  router.replace({path: item.url})
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
