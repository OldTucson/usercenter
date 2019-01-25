<template>
<div>
  <ad-menu-header>自定义导航栏
    <el-button slot="control" type="success" size="mini" @click="back">返回列表</el-button>
  </ad-menu-header>
  <el-form ref="form" :model="menu" label-width="80px">
    <el-form-item label="导航名称">
      <el-input v-model="menu.title"></el-input>
    </el-form-item>
    <el-form-item label="位置">
      <el-radio v-model="menu.type" label="all">主导航</el-radio>
      <el-radio v-model="menu.type" label="top">顶部</el-radio>
      <el-radio v-model="menu.type" label="bottom">底部</el-radio>
    </el-form-item>
    <el-form-item label="链接地址">
      <el-input v-model="menu.url"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="info" @click="enter">提交</el-button>
    </el-form-item>
  </el-form>
</div>
  
</template>

<script>
import axios from '../axios'
import adMenuHeader from '../components/adMenuHeader'
export default {
  components: {
    adMenuHeader
  },
  data () {
    return {
      menu: {

      }
    }
  },
  methods: {
    back () {
      this.$router.replace('/')
    },
    enter () {
      // 将修改后menu提交给对应的接口
      this.$store.dispatch('menu/editItem', this.menu)
    }
  },
  created () {
    // 分发对应的action 将this.$route.params.id发送过去
    // this.$store.dispatch('menu/getItem', this.$route.params.id)
    axios.get('/menu/id').then((res) => {
      console.log(res.data)
      this.menu = res.data.res
    })
  }
}
</script>

<style>

</style>
