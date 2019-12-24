<template>
  <div id="login">
    <p class="title">用户登录</p>
    <div class="login">
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
        <el-form-item>
          <el-radio v-model="radio" label="1">记住账号密码</el-radio>
          <el-link href="/registered">没有账号，点击注册</el-link>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="btn">登录</el-button>
          <el-button @click="resetForm('ruleForm')" class="btn" style="margin-left:6rem">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import Qs from "qs";
export default {
  name: "login",
  data() {
    var checkPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
        console.log(this.ruleForm);
      } else {
        if (this.ruleForm.pwd.length < 6) {
          callback(new Error("密码长度应大于6位数"));
        }
        callback();
      }
    };
    return {
      radio: "1",
      name: "橘子orange",
      ruleForm: {
        username: "",
        pwd: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户昵称", trigger: "blur" }
        ],
        pwd: [{ required: true, validator: checkPwd, trigger: "blur" }]
      }
    };
  },
  methods: {
    toindex() {
      this.$router.push({
        path: "/"
      });
      location.reload();
      // this.$router.go(0);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        let data = {
          username: this.ruleForm.username,
          pwd: this.ruleForm.pwd
        };
        if (valid) {
          this.$axios({
            url: "/php/login.php",
            method: "post",
            data: Qs.stringify(data)
          })
            .then(res => {
              console.log(res);
              if (res.data == true) {
                this.$message({
                  showClose: true,
                  message: `欢迎${this.ruleForm.username}成功登录！`,
                  type: "success"
                });
                //将用户名放入sessionStorage
                localStorage.setItem("username", this.ruleForm.username);
                //将用户名放入vuex中
                this.$store.commit("userStatus", this.ruleForm.username);
                setTimeout(this.toindex, 3000);
              } else {
                this.$message({
                  showClose: true,
                  message: `用户昵称或者密码输入错误！`,
                  type: "error"
                });
                console.log("登录失败");
              }
            })
            .catch(error => {
              console.log(error);
            });
        } else {
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
#login {
  margin-top: 6rem;
  .title {
    font-size: 30px;
    text-align: center;
  }
}
.el-message {
  margin-top: 3rem;
}
.login {
  width: 25rem;
  min-height: 18rem;
  margin: auto;
  margin-top: 2rem;
  .el-input {
    .el-input__inner {
      width: 20rem !important;
    }
  }
  .btn {
    width: 7rem;
  }
  .el-link {
    height: 1rem;
    float: right;
    margin: 0.5rem 0.5rem 0 0;
  }
}
</style>