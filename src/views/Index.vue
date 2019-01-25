<template>
  <div>
    <ad-menu-header>自定义导航栏
      <el-button slot="control" type="success" size="mini">新建导航</el-button>
    </ad-menu-header>
    <el-tabs v-model="activeName">
      <el-tab-pane label="主导航" name="all">
        <ad-menu-table :tableData="menu" :loading="loading" :type="activeName"></ad-menu-table>
      </el-tab-pane>
      <el-tab-pane label="顶部" name="top">
        <ad-menu-table :tableData="menuTop" :loading="loading" :type="activeName"></ad-menu-table>
      </el-tab-pane>
      <el-tab-pane label="底部" name="bottom">
        <ad-menu-table :tableData="menuBottom" :loading="loading" :type="activeName"></ad-menu-table>
      </el-tab-pane>
    </el-tabs>
    
  </div>
</template>

<script>
import axios from '../axios'
import adMenuHeader from '../components/adMenuHeader'
import adMenuTable from '../components/adMenuTable'
export default {
  data () {
    return {
      activeName: 'all'
    }
  },
  components: {
    adMenuHeader,
    adMenuTable
  },
  computed: {
    menu () {
      return this.$store.state.menu.all
    },
    menuTop () {
      return this.$store.state.menu.top
    },
    menuBottom () {
      return this.$store.state.menu.bottom
    },
    loading () {
      return this.$store.state.menu.loading
    }
  },
  created () {
    if (!this.menu.length) {
      this.$store.dispatch('menu/getMenu')
    }

    if (!this.menuTop.length) {
      this.$store.dispatch('menu/getMenu', 'top')
    }

    if (!this.menuBottom.length) {
      this.$store.dispatch('menu/getMenu', 'bottom')
    }
  }
}
</script>

<style>

</style>
