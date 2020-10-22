<template>
  <div id="add-route">
    <h2 style="margin-left: 6%">新增航线</h2>
    <el-form :model="newRoute" class="demo-dynamic" label-width="0px" ref="newRoute"
             size="mini" style="border:1px solid darkgray;padding: 18px 0 0 6%;margin: 0 6% 0 6%">
      <el-form-item :disabled="true"
                    label=""
                    prop="title">
        <el-col :span="2">航司</el-col>
        <el-col :span="2">起运港</el-col>
        <el-col :span="2">目的港</el-col>
        <el-col :span="4">航期</el-col>
        <el-col :span="3">起运时间</el-col>
        <el-col :span="3">到港时间</el-col>
        <el-col :span="2">运价(￥)</el-col>
        <el-col :span="3">有效期至</el-col>
        <el-col :span="3">
          <el-button @click="addRoute()" plain style="width: fit-content;margin-left: 2%" type="primary">增加航线
          </el-button>
        </el-col>
      </el-form-item>
      <el-form-item :key="value.key" :prop="'newRoutes.'+index" v-for="(value,index) in newRoute.newRoutes">
        <el-col :span="2">
          <el-form-item :prop="'newRoutes.'+index+'.airline'">
            <el-input @focus="clearErr('newRoutes.'+index+'.airline')" @input="value.airline=$event.replace(/[^a-zA-Z]/g,'').toUpperCase()"
                      maxlength="2"
                      plain style="text-transform:uppercase;"
                      v-model="value.airline"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-form-item>
            <el-input @focus="clearErr('flightPOL')" @input="value.POL=$event.replace(/[^a-zA-Z]/g,'').toUpperCase()" maxlength="3" plain
                      style="text-transform:uppercase;"
                      v-model="value.POL"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-form-item>
            <el-input @focus="clearErr('flightPOD')" @input="value.POD=$event.replace(/[^a-zA-Z]/g,'').toUpperCase()" maxlength="3"
                      style="text-transform:uppercase;"
                      v-model="value.POD"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item>
            <el-checkbox-group v-model="value.schedule" size="mini">
              <el-checkbox-button v-for="item in ['1','2','3']" :key="item">{{item}}</el-checkbox-button>
<!--              <el-checkbox-button v-for="day in newRoute.dayOptions" :label="day" :key="'ck.'+day+'.'+index">{{day}}</el-checkbox-button>-->
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-time-picker
              prefix-icon="''"
              placeholder="选择时间"
              format='HH:mm'
              value-format="HH:mm"
              v-model="value.ETD">
            </el-time-picker>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-time-picker
              prefix-icon="''"
              placeholder="选择时间"
              format='HH:mm'
              value-format="HH:mm"
              v-model="value.ETA">
            </el-time-picker>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-form-item>
            <el-input @input="onlyNumber(value.rate,index)" maxlength="6" v-model="value.rate"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-date-picker
              prefix-icon="''"
              v-model="value.validDate"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-button @click.prevent="removeRoute(index)"
                     plain style="width: fit-content;margin-left: 2%" type="danger">删除
          </el-button>
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
            rate: '',
            validDate: ''
          }],
          title: '',
          dayOptions: ['1', '2', '3', '4', '5', '6' , '7']
        }
      }
    },
    methods: {
      addRoute() {
        this.newRoute.newRoutes.push({});
      },
      removeRoute(index) {
        this.newRoute.newRoutes.splice(index, 1)
      },
      //限制只能输入数字（含小数）
      onlyNumber(rate, index) {
        //先把非数字的都替换掉，除了数字和.
        rate = rate.replace(/[^\d\.]/g, '');
        //必须保证第一个为数字而不是.
        rate = rate.replace(/^\./g, '');
        //保证只有出现一个.而没有多个.
        rate = rate.replace(/\.{2,}/g, '');
        //保证.只出现一次，而不能出现两次以上
        rate = rate.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
        rate = rate.substring(0, 10);
        this.newRoute.newRoutes[index].rate = rate
      },
      clearErr(prop) {
        this.$refs['newRoute'].clearValidate(prop);
      },
    }
  }
</script>

<style scoped>
  .el-form {
    height: 800px;
    overflow: auto;
  }
  .el-form-item{
  margin-bottom: 8px;
}
  .el-input {
    width: fit-content;
    margin: 0;
    padding: 0;
  }
  /deep/.el-input__inner {
    padding: 0 2px 0 2px;
    text-align: center;
  }
  .el-col {
    text-align: center;
    padding: 0;
    margin: 0;
  }
  /deep/.el-checkbox-button__inner{
    height: 28px;
    line-height: 28px;
    padding: 0 2px;
    margin: 0 1px;
  }
</style>
