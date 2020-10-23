<template>
  <div id="add-route">
    <h2 style="margin-left: 6%">新增航线</h2>
    <el-form :model="newRoute" :rules="newRouteRules" class="demo-dynamic" label-width="0px" ref="newRoute"
             size="mini" style="border:1px solid darkgray;padding: 18px 0 0 6%;margin: 0 6% 0 6%">
      <el-form-item :disabled="true"
                    label=""
                    prop="title">
        <el-row :gutter="1">
          <el-col :span="2">航司</el-col>
          <el-col :span="2">起运港</el-col>
          <el-col :span="2">目的港</el-col>
          <el-col :span="4">航班周期</el-col>
          <el-col :span="3">起运时间</el-col>
          <el-col :span="3">到港时间</el-col>
          <el-col :span="4">有效期至</el-col>
          <el-col :span="4">
            <el-button @click="addRoute()" plain style="width: fit-content;margin-left: 2%" type="primary">增加航线
            </el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item :key="value.key" :prop="'newRoutes.'+index" v-for="(value,index) in newRoute.newRoutes">
        <el-row :gutter="1">
          <el-col :span="2">
            <el-form-item :prop="'newRoutes.'+index+'.airline'"
                          :rules="[
            {required: true, message: '请填航司', trigger: 'blur'},
            {len: 2, message: '格式错误', trigger: 'blur'},
          ]">
              <el-input @focus="clearErr('newRoutes.'+index+'.airline')"
                        @input="value.airline=$event.replace(/[^a-zA-Z]/g,'').toUpperCase()"
                        maxlength="2" placeholder="二字码"
                        plain style="text-transform:uppercase;"
                        v-model="value.airline"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-form-item :prop="'newRoutes.'+index+'.POL'"
                          :rules="[
            {required: true, message: '请填起运港', trigger: 'blur'},
            {len: 3, message: '格式错误', trigger: 'blur'},
          ]">
              <el-input @focus="clearErr('newRoutes.'+index+'.POL')"
                        @input="value.POL=$event.replace(/[^a-zA-Z]/g,'').toUpperCase()" maxlength="3" plain
                        style="text-transform:uppercase;" placeholder="三字码"
                        v-model="value.POL"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-form-item :prop="'newRoutes.'+index+'.POD'"
                          :rules="[
            {required: true, message: '请填目的港', trigger: 'blur'},
            {len: 3, message: '格式错误', trigger: 'blur'},
          ]">
              <el-input @focus="clearErr('newRoutes.'+index+'.POD')"
                        @input="value.POD=$event.replace(/[^a-zA-Z]/g,'').toUpperCase()" maxlength="3"
                        style="text-transform:uppercase;" placeholder="三字码"
                        v-model="value.POD"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item :prop="'newRoutes.'+index+'.schedule'"
                          :rules="[{required: true, message: '请选择航班周期', trigger: 'blur'}]">
              <el-checkbox-group v-model="value.schedule" size="mini" style="padding: 0"
                                 @change="clearErr('newRoutes.'+index+'.schedule')">
                <el-checkbox-button v-for="day in newRoute.dayOptions" :label="day" :key="'cb.'+day+'.'+index">{{day}}
                </el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item :prop="'newRoutes.'+index+'.ETD'"
                          :rules="[{required: true, message: '请选择起飞时间', trigger: 'blur'}]">
              <el-time-picker
                placeholder="选择时间"
                format='HH:mm'
                value-format="HH:mm"
                v-model="value.ETD">
              </el-time-picker>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item :prop="'newRoutes.'+index+'.ETA'"
                          :rules="[{required: true, message: '请选择落地时间', trigger: 'blur'}]">
              <el-time-picker
                placeholder="选择时间"
                format='HH:mm'
                value-format="HH:mm"
                v-model="value.ETA">
              </el-time-picker>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item :prop="'newRoutes.'+index+'.validDate'"
                          :rules="[{required: true, message: '请选择有效日期', trigger: 'blur'}]">
              <el-date-picker
                v-model="value.validDate"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button @click.prevent="removeRoute(index)" :disabled="newRoute.newRoutes.length==1"
                       plain style="width: fit-content;margin-left: 2%" type="danger">删除
            </el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-col :span="20">
          <el-button type="primary" @click="submitForm('newRoute')" style="width: 100%">提交</el-button>
        </el-col>
        <el-col :span="4">
          <el-button @click="resetForm('newRoute')" type="warning" plain style="width: fit-content">重置</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "AddRoute",
    data() {
      return {
        newRoute: {
          newRoutes: [{
            airline: '',
            POL: '',
            POD: '',
            schedule: [],
            ETD: '',
            ETA: '',
            validDate: ''
          }],
          title: '',
          dayOptions: ['1', '2', '3', '4', '5', '6', '7']
        },
        newRouteRules: {
        },
      }
    },
    methods: {
      addRoute() {
        this.newRoute.newRoutes.push({
          airline: '',
          POL: '',
          POD: '',
          schedule: [],
          ETD: '',
          ETA: '',
          validDate: ''
        });
      },
      removeRoute(index) {
        this.newRoute.newRoutes.splice(index, 1)
      },
      // //限制只能输入数字（含小数）
      // onlyNumber(rate, index) {
      //   //先把非数字的都替换掉，除了数字和.
      //   rate = rate.replace(/[^\d\.]/g, '');
      //   //必须保证第一个为数字而不是.
      //   rate = rate.replace(/^\./g, '');
      //   //保证只有出现一个.而没有多个.
      //   rate = rate.replace(/\.{2,}/g, '');
      //   //保证.只出现一次，而不能出现两次以上
      //   rate = rate.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
      //   rate = rate.substring(0, 10);
      //   this.newRoute.newRoutes[index].rate = rate
      // },
      clearErr(prop) {
        this.$refs['newRoute'].clearValidate(prop);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            for (let i = 0; i < this.newRoute.newRoutes.length; i++)
              console.log(this.newRoute.newRoutes[i]);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.newRoute.newRoutes = [{
          airline: '',
          POL: '',
          POD: '',
          schedule: [],
          ETD: '',
          ETA: '',
          validDate: ''
        }];
      }
    }
  }
</script>

<style scoped>
  .el-form {
    height: 800px;
    overflow: auto;
  }

  .el-form-item {
    margin-bottom: 8px;
  }

  .el-input {
    width: fit-content;
    margin: 0;
    padding: 0;
  }

  /deep/ .el-input__inner {
    padding: 0 6px 0 6px;
    text-align: center;
  }

  .el-col {
    text-align: center;
    padding: 0;
    margin: 0;
  }

  /deep/ .el-checkbox-button__inner {
    height: 28px;
    line-height: 28px;
    padding: 0 3px;
    margin: 1px 2px 0px 2px;
  }
</style>
