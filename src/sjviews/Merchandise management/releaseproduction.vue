<template>
  <div id="releaseproduction">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="商品名称" prop="title" required>
        <el-input v-model="ruleForm.title" placeholder="商品名称" class="title"></el-input>
      </el-form-item>
      <el-form-item label="商品分类" prop="specification" required>
        <el-select v-model="ruleForm.specification" placeholder="商品分类">
          <el-option label="苹果" value="apple"></el-option>
          <el-option label="梨" value="bear"></el-option>
          <el-option label="项链" value="necklace"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品数量" required>
        <el-input-number v-model="ruleForm.num" :min="1"></el-input-number>
      </el-form-item>
      <el-form-item label="商品价格" required>
        <el-input-number v-model="ruleForm.price" :min="0" :precision="2" :step="0.01"></el-input-number>
      </el-form-item>
      <el-form-item label="商品图片" required>
        <el-upload
          class="upload-demo"
          action="#"
          ref="upload"
          :multiple="true"
          accept="image/jpeg, image/jpg, image/png"
          :auto-upload="false"
          :on-preview="handlePictureCardPreview"
          :on-change="handleChange"
          :on-remove="handleRemove"
          list-type="picture-card"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <!-- <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>-->
      </el-form-item>
      <el-form-item label="商品详情" prop="details">
        <Editor v-model="ruleForm.details"></Editor>
      </el-form-item>
      <el-form-item label="商品状态" prop="state" required>
        <el-radio-group v-model="ruleForm.state">
          <el-radio label="立即上架"></el-radio>
          <el-radio label="放入仓库"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Editor from "@/universalComponents/editor.vue";
export default {
  name: "releaseproduction",
  data() {
    return {
      ruleForm: {
        title: "", //商品名称
        specification: "", //商品分类
        num: 1, //商品数量
        price: 0, //商品价格
        dialogImageUrl: "", //商品图片
        dialogVisible: false,
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  components: {
    Editor
  },
  methods: {
    handleRemove(file, fileList) {
      this.fileList = fileList;
      //console.log(fileList);
      this.$message({
        type: "info",
        message: "已删除原有图片",
        duration: 1000
      });
    },
    handlePictureCardPreview(file) {
      this.dialogVisible = true;
      this.dialogImageUrl = file.url;
      console.log(this.dialogImageUrl);
      console.log(this.dialogVisible);
    },
    handleChange(file, fileList) {
      this.fileList = fileList;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid);
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
#releaseproduction {
  .demo-ruleForm {
    margin-top: 1rem !important;
  }
  .title {
    .el-input__inner {
      width: 15rem !important;
    }
  }
  .el-input__inner {
    width: 9rem !important;
  }
}
</style>