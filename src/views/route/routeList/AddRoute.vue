<template>
  <div id="add-route">
    <h2 style="margin-left: 6%">新增航线</h2>
    <el-form :model="newRoute" :rules="newRouteRules" class="demo-dynamic" label-width="0px" ref="newRoute"
             size="mini" style="border:1px solid darkgray;padding: 18px 0 0 6%;margin: 0 6% 0 6%" @validate="validate">
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
                popper-class="time-proper"
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
                placeholder="选择日期"
              style="width: 100%">
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
        errState: {},
        newRouteRules: {}
      }
    },
    methods: {
      validate(prop,state,err){
        this.$set(this.errState,prop,err)
      },
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
        for(let i=index;i<this.newRoute.newRoutes.length;i++) {
          for (let key in this.newRoute.newRoutes[i]) {
            let prop = 'newRoutes.' + i + '.' + key
            let newProp = 'newRoutes.' + (i + 1) + '.' + key
            if (newProp in this.errState) {
              this.$refs['newRoute'].validateField(prop);
            } else {
              this.clearErr(prop)
            }
          }
        }
        for (let key in this.newRoute.newRoutes[0]) {
          let lastProp = 'newRoutes.' + this.newRoute.newRoutes.length + '.' + key
          this.$delete(this.errState, lastProp)
        }
      },
      clearErr(prop) {
        this.$refs['newRoute'].clearValidate(prop);
        this.$delete(this.errState,prop)
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
        this.errState = {}
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

  .el-col {
    text-align: center;
    padding: 0;
    margin: 0;
  }

  /deep/ .el-input__inner {
    padding: 0 6px 0 6px;
    text-align: center;
  }

  /deep/ .el-checkbox-group {
    display: flex;
  }

  /deep/ .el-checkbox-button {
    flex: 1;
    padding: 0;
    margin: 0;
    display: flex;
  }

  /deep/ .el-checkbox-button__inner {
    height: 28px;
    line-height: 25px;
    margin: 1px 1px 0px 1px;
    border-radius: 0;
    border: 1px solid #DCDFE6;
    padding: 0;
    width: 100%;
  }

  /deep/ .el-form-item__error {
    left: 0;
    right: 0;
  }

  /deep/ .time-proper{
    width: 50px;
  }

</style>
