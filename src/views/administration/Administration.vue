<template>
  <div id="admin">
    <el-container>
      <el-tabs tab-position="left" style="height: 600px">
        <el-tab-pane label="组织结构">
          <organization></organization>
        </el-tab-pane>
        <el-tab-pane label="公司成员">
          <staff-list></staff-list>
        </el-tab-pane>
      </el-tabs>
    </el-container>
  </div>
</template>

<script>
  import AddBranch from "./organization/AddBranch";
  import StaffList from "./staff/StaffList";
  import Organization from "./organization/Organization";

  export default {
    name: "Administration",
    data() {
      return {
        showOrgan: true,
        showStaff: true
      }
    },
    components: {
      AddBranch,
      StaffList,
      Organization
    },
    methods: {
      showAdmin(page) {
        switch (page) {
          case '':

        }
      }
    }
  }
</script>

<style scoped>

</style>
