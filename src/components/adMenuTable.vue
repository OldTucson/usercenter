<template>
  <el-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="title"
      label="导航名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="url"
      label="链接地址"
      width="280">
    </el-table-column>
    <el-table-column
      prop="order"
      label="排序"
      width="80">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="edit(scope.row.id)">编辑</el-button>
        <el-button type="text" size="small" @click="del(scope)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    tableData: Array,
    loading: Boolean,
    type: String
  },
  methods: {
    del (scope) {
      this.$confirm('确定要删除此菜单吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 正常情况下我们需要将id传给接口 /menu?id=1 /menu/:id
        // 发起请求
        this.$store.dispatch('menu/delMenu', {
          index: scope.$index, 
          id: scope.row.id,
          type: this.type
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
      
    },
    edit (id) {
      this.$router.push('/menu/edit/' + id)
    }
  } 
}
</script>

<style>

</style>
