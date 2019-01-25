<template>
  <div id="app">
    <el-container>
      <el-header>
        <ad-header></ad-header>
      </el-header>
      <el-container>
        <el-aside>
          <ad-menu></ad-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import adHeader from './components/adHeader'
import adMenu from './components/adMenu'
export default {
  name: 'app',
  components: {
    adHeader,
    adMenu
  }
}
</script>

<style>
  body {
    margin: 0;
  }
  
</style>
