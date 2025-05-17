<template>
  <div class="user-manage">
    <el-card header="用户列表">
      <el-table :data="[]" style="width: 100%">
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="email" label="邮箱" />
      </el-table>
    </el-card>
  </div>
</template>

<style>
.user-manage .el-table {
  --el-table-border-color: rgba(64,158,255,0.1);
  --el-table-header-bg-color: rgba(64,158,255,0.05);
}

.el-table__row:hover {
  background: rgba(64,158,255,0.03) !important;
}

.el-tag {
  border-radius: 4px !important;
  font-weight: 500 !important;
}
</style>