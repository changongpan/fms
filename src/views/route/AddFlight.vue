<template>
  <div class="add-flight">
    <el-form :model="newFlight" :rules="newFlightRules" ref="newFlight" label-width="100px" class="demo-ruleForm">
      <el-form-item label="起运港" prop="flightPOL">
        <el-input @focus="showMessage('flightPOL')" v-model="newFlight.flightPOL" maxlength="3"
                  style="text-transform:uppercase;"
                  @input="newFlight.flightPOL=$event.replace(/[^a-zA-Z]/g,'').toUpperCase()"></el-input>
      </el-form-item>
      <el-form-item label="目的港" prop="flightPOD">
        <el-input @focus="showMessage('flightPOD')" v-model="newFlight.flightPOD" maxlength="3"
                  style="text-transform:uppercase;"
                  @input="newFlight.flightPOD=$event.replace(/[^a-zA-Z]/g,'').toUpperCase()"></el-input>
      </el-form-item>
      <el-form-item label="航班号" prop="flightNo">
        <el-input @focus="showMessage('flightNo')" v-model="newFlight.flightNo" maxlength="10"
                  style="text-transform:uppercase;" @input="flightNoInput"></el-input>
      </el-form-item>
      <el-form-item label="航班日期" prop="originDate" required>
        <el-date-picker type="date" placeholder="选择日期" v-model="newFlight.originDate"
                        @change="changeDate"
                        style="width: 400px;"></el-date-picker>
      </el-form-item>
      <el-form-item label="航班型号" prop="flightType">
        <el-input @focus="showMessage('flightType')" v-model="newFlight.flightType" maxlength="10"
                  style="text-transform:uppercase;"
                  @input="newFlight.flightType=$event.replace(/[^\w\.\/]/ig,'').toUpperCase()"></el-input>
      </el-form-item>
      <el-form-item label="航司" prop="flightAirline">
        <el-input v-model="newFlight.flightAirline" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="最大载量" prop="flightMaxLoad">
        <el-input @focus="showMessage('flightMaxLoad')" v-model="newFlight.flightMaxLoad"
                  style="text-transform:uppercase;" @input="onlyNumber"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitNewFlight('newFlight')" style="width: 180px">提交</el-button>
        <el-button type="warning" @click="resetForm('newFlight')" style="width: 180px">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {dataPost} from "network/request";

  export default {
    name: "AddFlight",
    data() {
      return {
        newFlight: {
          flightPOL: '',
          flightPOD: '',
          flightNo: '',
          flightDate: '',
          originDate: '',
          flightType: '',
          flightAirline: '',
          flightMaxLoad: ''
        },
        newFlightRules: {
          flightPOL: [
            {required: true, message: '请输入起运港三字码', trigger: 'blur'},
            {len: 3, message: '三字码格式错误', trigger: 'blur'},
          ],
          flightPOD: [
            {required: true, message: '请输入目的港三字码', trigger: 'blur'},
            {len: 3, message: '三字码格式错误', trigger: 'blur'},
          ],
          flightNo: [
            {required: true, message: '请输入航班号', trigger: 'blur'},
          ],
          originDate: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          flightType: [
            {required: false, message: '请输入航班号', trigger: 'blur'},
          ],
        },
        isShow: true
      }
    },
    methods: {
      changeDate(){
        this.newFlight.flightDate = Date.parse(this.newFlight.originDate) / 1000;
      },
      //限制只能输入数字（含小数）
      onlyNumber(flightMaxLoad) {
        //先把非数字的都替换掉，除了数字和.
        flightMaxLoad = flightMaxLoad.replace(/[^\d\.]/g, '');
        //必须保证第一个为数字而不是.
        flightMaxLoad = flightMaxLoad.replace(/^\./g, '');
        //保证只有出现一个.而没有多个.
        flightMaxLoad = flightMaxLoad.replace(/\.{2,}/g, '');
        //保证.只出现一次，而不能出现两次以上
        flightMaxLoad = flightMaxLoad.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
        flightMaxLoad = flightMaxLoad.substring(0, 10);
        this.newFlight.flightMaxLoad = flightMaxLoad
      },
      //限制只能数据数字和字母
      //取前两位作为航司信息
      flightNoInput(flightNo) {
        this.newFlight.flightNo = flightNo.replace(/[^\w\.\/]/ig, '').toUpperCase()
        this.newFlight.flightAirline = this.newFlight.flightNo.slice(0, 2)
      },
      //点击输入框，警告消息消失
      showMessage(prop) {
        this.$refs['newFlight'].clearValidate(prop);
      },
      //提交新增航班信息
      submitNewFlight(newFlight) {
        console.log(this.newFlight);
        this.$refs[newFlight].validate((valid) => {
          if (valid) {
            this.addFlight()
            this.$refs[newFlight].resetFields();
          } else {
            console.log('error submit!!')
            return false;
          }
        });
      },
      //重置信息表
      resetForm(newFlight) {
        this.$refs[newFlight].resetFields();
      },
      //新增航班成功提示
      openSuccess() {
        this.$message({
          showClose: true,
          message: '新增航班成功',
          type: 'success'
        });
      },
      //写入数据到后台
      //日期信息使用时间戳格式
      addFlight() {
        dataPost(
          'routemanage/addflight',
          this.newFlight
        ).then(res => {
          if (res.data == 'success') {
            this.openSuccess()
          } else {
          }
        }).catch(err => {
        })
      },
      dateFormat(originDate){
        let time = new Date(originDate * 1000);
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let date = time.getDate();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        console.log(year + '-' + this.add0(month) + '-' + this.add0(date) + ' ' + this.add0(hours) + ':' + this.add0(minutes) + ':' + this.add0(seconds));
      },
      add0(m) {
        return m < 10 ? '0' + m : m
      }
    }
  }
</script>

<style scoped>
  .el-input {
    width: 400px;
  }
</style>
