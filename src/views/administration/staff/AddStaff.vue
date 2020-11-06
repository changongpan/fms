<template>
  <div id="add-staff">
    <el-form :model="newStaff" :rules="staffRules" ref="newStaff" label-width="25%">
      <el-form-item label="姓名" prop="cn_name">
        <el-input v-model="newStaff.cn_name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="请设置密码（区分大小写）"
                  prefix-icon="el-icon-key" v-model="newStaff.password"
                  onkeyup="this.value=this.value.replace(/\s+/g,'')"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="newStaff.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addSubmit('newStaff')" style="width: 100%">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {dataPost} from "network/request";

    export default {
      name: "AddStaff",
      data(){
        return{
          newStaff:{
            username:'',
            password:'',
            staff_id:'',
            email:'',
            en_name:'',
            tel:'',
            mob:'',
            qq:'',
            cn_name:'',
            birthday:'',
            entry_date:'',
            full_member_date:'',
            departure_date:'',
            salary:'',
            status:'',
            position_id:'',
            department_id:'',
            branch_id:'',
            contract:'',
            contract_start:'',
            contract_end:'',
            address:'',
            married:'',
            country:'',
            nation:'',
            politics_status:'',
            religion:'',
            photo:''
          },
          staffRules: {
            username: [{required: true, message: '用户名不能为空', trigger: 'blur'}],
            password: [{required: true, message: '密码不能为空', trigger: 'blur'}]
          },
        }
      },
      methods:{
        //提交表格
        addSubmit(newStaff) {
          this.$refs[newStaff].validate((valid) => {
            if (valid) {
              this.addStaff();
            } else {
              return false;
            }
          });
        },
        //新增员工
        addStaff() {
          dataPost(
            'home/myHome',
            this.newLogin
          ).then(res => {
            if (res.data==='success') {
            } else {
              return false;
            }
          }).catch(err => {
            this.loginErr = '网络连接错误，请检查网络';
            return false;
          })
        },
      }
    }
</script>

<style scoped>

</style>
