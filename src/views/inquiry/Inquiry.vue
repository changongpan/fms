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
