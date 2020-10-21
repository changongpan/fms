<template>
  <div class="add-awb">
    <h2 style="margin-left: 20%">录入新运单号</h2>
    <el-form :model="newAWB" :rules="newAWBRules" ref="newAWB" label-width="20%" class="demo-dynamic"
             size="mini" style="border:1px solid darkgray;padding: 18px 0 0 0;margin: 0 6% 0 6%">
      <el-form-item label="航司" prop="airline">
        <el-input @focus="clearErr('airline')" v-model="newAWB.airline" maxlength="2" tabindex="1"
                  style="text-transform:uppercase;"
                  @input="newAWB.airline=$event.replace(/[^a-zA-Z]/g,'').toUpperCase()"></el-input>
        <el-button @click="addAWB()" type="primary" plain style="width: 18%;margin-left: 2%">增加运单</el-button>
      </el-form-item>
      <el-form-item label="航司三位码" prop="airlineCode">
        <el-input @focus="clearErr('airlineCode')" v-model="newAWB.airlineCode" maxlength="3" tabindex="2"
                  @input="newAWB.airlineCode=$event.replace(/[^\d]/g,'')"></el-input>
        <el-button @click="resetForm('newAWB')" type="warning" plain style="width: 18%;margin-left: 2%">重置表格</el-button>
      </el-form-item>
      <el-form-item
        v-for="(awbNo, index) in newAWB.awbNos"
        :label="'运单号' + (index+1)"
        :prop="'awbNos.'+index"
        :rules="[
          {required: true, message: '运单号不能为空', trigger: 'blur'},
          {len: 8, message: '运单号为8位数字', trigger: 'blur'},
          ]"
      >
        <el-input @input="newAWB.awbNos[index]=$event.replace(/[^\d]/g,'')"
                  maxlength="8" v-model="newAWB.awbNos[index]"
                  @focus="clearErr('awbNos.'+index)" :tabindex="(index+3).toString()"
        ></el-input>
        <el-button @click.prevent="removeAWBNo(awbNo)" :disabled="newAWB.awbNos.length==1"
                   type="danger" plain style="width: 18%;margin-left: 2%">删除
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('newAWB')" style="width: 60%">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "AddAWB",
    data() {
      return {
        newAWB: {
          airline: '',
          airlineCode: '',
          awbNos: ['']
        },
        newAWBRules: {
          airline: [
            {required: true, message: '请输入航司二字代码', trigger: 'blur'},
            {len: 2, message: '二字代码格式错误', trigger: 'blur'},
          ],
          airlineCode: [
            {required: true, message: '请输入航司三位码', trigger: 'blur'},
            {len: 3, message: '三位码格式错误', trigger: 'blur'},
          ]
        },
        isShow: true,
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            for (let i = 0; i < this.newAWB.awbNos.length; i++)
              console.log(this.newAWB.awbNos[i]);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      clearErr(prop) {
        this.$refs['newAWB'].clearValidate(prop);
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.newAWB.awbNos = [''];
      },
      removeAWBNo(item) {
        let index = this.newAWB.awbNos.indexOf(item)
        if (index !== -1) {
          this.newAWB.awbNos.splice(index, 1)
        }
      },
      addAWB() {
        this.newAWB.awbNos.push('');
      }
    }
  }
</script>

<style scoped>
  .el-input {
    width: 60%;
  }
  .el-form {
    height: 800px;
    overflow: auto;
  }
</style>
