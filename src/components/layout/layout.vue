<template>
  <div class="common-layout">
    <el-container>
      <el-header><Header /></el-header>
      <el-container>
        <el-aside :width="isFold ? '200px' : '66px'"><Aside @collapse="collapse"/></el-aside>
        <el-container>
          <el-main><Main /></el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref, defineComponent } from 'vue'
// 组件
import Header from './Header.vue'
import Aside from './Aside.vue'
import Main from './Main.vue'

const isFold = ref(true)

const collapse = (isCollapse) => {
  isFold.value = isCollapse
}

</script>

<style>
  .el-header {
    border-bottom: 1px solid #dadada;
  }
  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    transition: width 0.5s;
  }
  .el-main {
    background-color: #f0f2f5;
    color: #333;
    height: calc(100vh - 60px);
  }
</style>