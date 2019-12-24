<template>
  <div id="postActivity">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="活动名称" prop="title" required>
        <el-input v-model="ruleForm.title" placeholder="活动名称" class="title"></el-input>
      </el-form-item>
      <el-form-item label="活动范围" prop="range" required>
        <el-select v-model="ruleForm.range" placeholder="活动范围">
          <el-option label="全部商品" value="all"></el-option>
          <el-option label="部分商品" value="section"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品折扣" prop="discount" required>
        <el-input-number v-model="ruleForm.discount" :min="0" :precision="2" :step="0.01"></el-input-number>
      </el-form-item>
      <el-form-item label="开始时间" required>
        <el-col :span="5">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="1">-</el-col>
        <el-col :span="5">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="结束时间" required>
        <el-col :span="5">
          <el-form-item prop="date3">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date3"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="1">-</el-col>
        <el-col :span="5">
          <el-form-item prop="date4">
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date4" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="活动描述" prop="description" required>
        <el-input type="textarea" v-model="ruleForm.description" placeholder="活动描述" class="description"></el-input>
      </el-form-item>
      <el-form-item label="活动状态" prop="state" required>
        <el-radio-group v-model="ruleForm.state">
          <el-radio label="放入草稿箱"></el-radio>
          <el-radio label="立即发布"></el-radio>
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
export default {
  name: "releaseproduction",
  data() {
    return {
      ruleForm: {
        title: "", //活动名称
        description: "", //活动描述
        range: "", //活动范围
        discount: 10, //商品折扣
        date1:"",
        date2:"",
        date3:"",
        date4:"",
        state: "", //活动状态
      },
      rules: {
        title: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { max: 20, message: "不能超过20个字符", trigger: "blur" }
        ],
        description: [
          { required: true, message: "请选择输入活动描述", trigger: "change" }
        ],
        range: [
          {
            required: true,
            message: "请选择活动范围",
            trigger: "change"
          }
        ],
        discount: [
          {
            required: true,
            message: "请输入商品折扣",
            trigger: "change"
          }
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
        date3: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date4: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        state: [
          {
            required: true,
            message: "请选择活动状态",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
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
#postActivity {
  .demo-ruleForm {
    margin-top: 1rem !important;
  }
  .title {
    .el-input__inner {
      width: 30rem !important;
    }
  }
  .description{
      .el-textarea__inner{
          width: 30rem;
      }
  }
  .el-input__inner {
    width: 9rem !important;
  }
}
</style>