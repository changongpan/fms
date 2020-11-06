<template>
  <div id="organization">

  </div>
</template>

<script>
  import {dataPost} from "network/request";

  import AddBranch from "./AddBranch";
  import AddDept from "./AddDept";

  export default {
    name: "Organization",
    components: {
      AddBranch,
      AddDept
    },
    data() {
      return {
        branch: {
          name: '',
          branch_id: '',
          father_id: '',
          vat_no:'',
          cn_bank: '',
          cn_account:'',
          register_addr:'',
          register_date:'',
          office_addr:'',
          manager:''
        },
        dept: {
          name:'',
          dept_id:'',
          father_id:'',
          branch_id:'',
          dept_tel:'',
          dept_email:'',
          dept_contact:'',
          dept_addr:'',
          manager:'',
          description:''
        }
      }
    },
    created() {
      dataPost(
        'organ/getBranch',
        this.newLogin
      ).then(res => {
        if (res.data==='success') {
        } else {
          this.loginErr = '';
          return false;
        }
      }).catch(err => {
        this.loginErr = '网络连接错误，请检查网络';
        return false;
      })
    }
  }
</script>

<style scoped>

</style>
