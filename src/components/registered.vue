<template>
  <div id="registered">
    <p class="title">用户注册</p>
    <div class="registered">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户昵称" prop="username">
          <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="pwd">
          <el-input type="password" v-model="ruleForm.pwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPwd">
          <el-input type="password" v-model="ruleForm.checkPwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio v-model="ruleForm.sex" label="男">男</el-radio>
          <el-radio v-model="ruleForm.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="出生日期" prop="birthday">
          <el-date-picker v-model="ruleForm.birthday" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="联系方式" prop="phone">
          <el-input type="tel" v-model="ruleForm.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-radio v-model="radio" label="1">我已阅读并同意使用用户协议</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="btn">注册</el-button>
          <el-button @click="resetForm('ruleForm')" class="btn" style="margin-left:6rem">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    var checkPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.pwd.length < 6) {
          callback(new Error("密码长度应大于6位数"));
        } else if (this.ruleForm.checkPwd !== "") {
          this.$refs.ruleForm.validateField("checkPwd");
        }
        callback();
      }
    };
    var checkPwd2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var checkPhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (!/^1[3456789]\d{9}$/.test(value) && value.length != 11) {
        callback(
          new Error(
            "请输入正确的手机号，手机号开头为1，第二位不能为2，总长度为11位"
          )
        );
      } else {
        callback();
      }
    };
    return {
      radio: "1",
      name: "橘子orange",
      ruleForm: {
        username: "",
        pwd: "",
        checkPwd: "",
        sex: "男",
        birthday: "",
        phone: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户昵称", trigger: "blur" }
        ],
        pwd: [{ required: true, validator: checkPwd, trigger: "blur" }],
        checkPwd: [{ required: true, validator: checkPwd2, trigger: "blur" }],
        sex: [{ required: true, message: "请选择性别！", trigger: "blur" }],
        birthday: [
          { required: true, message: "请选择出生日期！", trigger: "blur" }
        ],
        phone: [{ required: true, validator: checkPhone, trigger: "blur" }]
      }
    };
  },
  methods: {
    toindex() {
      this.$router.push({
        path: "/"
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios({
            url: "/login.php",
            method: "post",
            data: {
              username: this.ruleForm.username,
              pwd: this.ruleForm.pwd
            }
          }).then(() => {
            this.$message({
              showClose: true,
              message: `注册成功`,
              type: "success"
            });
            setTimeout(this.toindex, 3000);
          });
        } else {
          this.$message({
            showClose: true,
            message: `请填写完毕注册信息！`,
            type: "error"
          });
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
#registered {
  margin-top: 6rem;
  .title {
    font-size: 30px;
    text-align: center;
  }
}
.el-message {
  margin-top: 3rem;
}
.registered {
  width: 25rem;
  min-height: 18rem;
  margin: auto;
  margin-top: 2rem;
  .el-input {
    width: auto;
    .el-input__inner {
      width: 20rem !important;
    }
  }
  .btn {
    width: 7rem;
  }
}
</style>