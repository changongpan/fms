<template>
  <div id="add-branch">
  <h2 style="margin-left: 6%">建立分支机构（分公司/子公司）</h2>
  <el-form :model="newBranch" :rules="newBranchRules" ref="newBranch" label-width="20%" class="demo-ruleForm"
           size="mini" style="border:1px solid darkgray;padding: 18px 0 0 0;margin: 0 6% 0 6%">
    <el-form-item label="名称" prop="name">
      <el-input @focus="clearErr('flightPOL')" v-model="newBranch.name" maxlength="3"
                style="text-transform:uppercase;"
                @input="newBranch.flightPOL=$event.replace(/[^a-zA-Z]/g,'').toUpperCase()"></el-input>
    </el-form-item>
    <el-form-item label="英文名称" prop="en_name">
      <el-input @focus="clearErr('flightPOL')" v-model="newBranch.en_name" maxlength="3"
                style="text-transform:uppercase;"
                @input="newBranch.flightPOL=$event.replace(/[^a-zA-Z]/g,'').toUpperCase()"></el-input>
    </el-form-item>
    <el-form-item label="上级分支" prop="father_branch">
      <el-input @focus="clearErr('flightPOD')" v-model="newBranch.father_branch" maxlength="3"
                style="text-transform:uppercase;"
                @input="newBranch.flightPOD=$event.replace(/[^a-zA-Z]/g,'').toUpperCase()"></el-input>
    </el-form-item>
    <el-form-item label="增值税号" prop="vat_no">
      <el-input @focus="clearErr('flightNo')" v-model="newBranch.vat_no" maxlength="10"
                style="text-transform:uppercase;" @input="flightNoInput"></el-input>
    </el-form-item>
    <el-form-item label="开户银行" prop="cn_bank">
      <el-date-picker type="date" placeholder="选择日期" v-model="newBranch.cn_bank"
                      @change="changeDate"
                      style="width: 80%;"></el-date-picker>
    </el-form-item>
    <el-form-item label="人民币账户" prop="cn_account">
      <el-input @focus="clearErr('flightType')" v-model="newBranch.cn_account" maxlength="10"
                style="text-transform:uppercase;"
                @input="newBranch.flightType=$event.replace(/[^\w\.\/]/ig,'').toUpperCase()"></el-input>
    </el-form-item>
    <el-form-item label="注册地址" prop="register_addr">
      <el-input v-model="newBranch.register_addr"></el-input>
    </el-form-item>
    <el-form-item label="成立时间" prop="register_date">
      <el-input v-model="newBranch.register_date"></el-input>
    </el-form-item>
    <el-form-item label="办公地址" prop="office_addr">
      <el-input v-model="newBranch.office_addr"></el-input>
    </el-form-item>
    <el-form-item label="负责人" prop="manager">
      <el-input v-model="newBranch.manager"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitnewBranch('newBranch')" style="width: 36%">提交</el-button>
      <el-button type="warning" @click="resetForm('newBranch')" style="width: 36%;margin-left: 8%">重置</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
    export default {
        name: "AddBranch",
      data(){
          return{
            newBranch:{
              name:'',
              father_branch:'',
              vat_no:'',
              cn_bank:'',
              cn_account:'',
              register_addr:'',
              register_date:'',
              office_addr:'',
              manager:''
            },
            newBranchRules:{

            }
          }
      }
    }
</script>

<style scoped>

</style>
