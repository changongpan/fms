<template>
  <div class="box" @paste="handlePaste">
    <el-dialog
      width="100%"
      :visible.sync="centerDialogVisible"
      center>
      <el-image fit="contain" :src="url"></el-image>
      <span slot="footer" class="dialog-footer">
  </span>
    </el-dialog>
    <el-image style="max-height: 100px" fit="scale-down" :src="url" @click="showOrigin(url)"></el-image>
    <el-button
      v-on:click="uploadPlans"
    >上传文件
    </el-button>
  </div>
</template>

<script>
  export default {
    name: "Inquiry",
    data() {
      return {
        file: '',
        url: '',
        centerDialogVisible: false,
      }
    },
    methods: {
      // 监听粘贴操作
      handlePaste(event) {
        const items = (event.clipboardData || window.clipboardData).items;
        let file = null;

        if (!items || items.length === 0) {
          this.$message.error("当前浏览器不支持本地");
          return;
        }
        // 搜索剪切板items
        for (let i = 0; i < items.length; i++) {
          if (items[i].type.indexOf("image") !== -1) {
            file = items[i].getAsFile();
            break;
          }
        }
        if (!file) {
          this.$message.error("粘贴内容非图片");
          return;
        }
        // 此时file就是我们的剪切板中的图片对象
        // 如果需要预览，可以执行下面代码
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = event => {
          this.url = event.target.result
          console.log(this.showSize(this.url));
        };
        this.file = file;
      },
      //上传文件成功后回调
      uploadPlans() {
        let file = this.file;
        if (!file) {
          this.$message.error("请粘贴图片后上传");
          return;
        }
        this.loading = true;
        let form = new FormData();
        form.append("file", file);
        form.append("type", this.type);
        //uploadCertificate是封装的axios请求，自己根据需求传参
        // uploadCertificate(form)
        //   .then(data => {
        //     if (data.data && data.data.success) {
        //       this.certificate_pic = data.data.data.source;
        //       this.$message.success(this.name + "上传成功！");
        //     } else {
        //       this.$message.error(this.name + "上传失败！");
        //     }
        //   }).catch(() => {});
      },
      //获取base64图片大小，返回kb数字
      showSize(base64url) {
        //把头部去掉
        let str = base64url.replace('data:image/png;base64,', '');
        // 找到等号，把等号也去掉
        let equalIndex = str.indexOf('=');
        if (str.indexOf('=') > 0) {
          str = str.substring(0, equalIndex);
        }
        // 原来的字符流大小，单位为字节
        let strLength = str.length;
        // 计算后得到的文件流大小，单位为字节
        let fileLength = parseInt(strLength - (strLength / 8) * 2);
        // 由字节转换为kb
        let size = "";
        size = (fileLength / 1024).toFixed(2);
        let sizeStr = size + ""; //转成字符串
        let index = sizeStr.indexOf("."); //获取小数点处的索引
        let dou = sizeStr.substr(index + 1, 2) //获取小数点后两位的值
        if (dou == "00") { //判断后两位是否为00，如果是则删除00
          return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
        }
        return size;
      },
      showOrigin(url) {
        this.centerDialogVisible = true
      }
    }
  }
</script>

<style scoped>
  .customWidth {
    width: 100%;
  }
</style>
