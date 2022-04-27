<template>
  <div class="main">
    <router-view></router-view>
    <el-drawer v-model="drawerShow" direction="rtl" size="25%">
      <template #default>
        <el-form
          label-position="right"
          label-width="100px"
          :model="formData"
          style="max-width: 460px"
          ref="ruleFormRef"
          size="default"
        >
          <el-form-item label="图标地址">
            <el-input v-model="formData.imageUrl" />
          </el-form-item>
          <el-form-item label="一级标题">
            <el-input v-model="formData.title" />
          </el-form-item>
          <el-form-item label="二级标题">
            <el-input v-model="formData.subTitle" />
          </el-form-item>
          <el-form-item label="官网地址">
            <el-input v-model="formData.officialWebsite" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
          </el-form-item>
        </el-form>
      </template>
    </el-drawer>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { reactive, ref } from "vue"
import { postUserConfig } from "@/service/user/userConfig.js"

const drawerShow = ref(true)
const ruleFormRef = ref(null)
const formData = reactive({
  username: 'admin',
  imageUrl: '',
  title: '',
  subTitle: '',
  officialWebsite: ''
})
 
const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const result = await postUserConfig(formData)
      if(result.success) {
        ElMessage({
          message: '提交成功',
          type: 'success',
        })
        drawerShow.value = false
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>

<style lang="less" scoped>
  .main {
    width: 100%;
    height: 100%;
  }
</style>
