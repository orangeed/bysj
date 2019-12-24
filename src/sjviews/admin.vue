<template>
  <div id="login_sj">
    <div class="title-container">
      <h3 class="title">后台登录</h3>
    </div>
    <div class="login_sj">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form">
        <el-form-item prop="name">
          <span class="svg-container">
            <i class="el-icon-s-custom"></i>
          </span>
          <el-input v-model="ruleForm.name" autocomplete="off" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <span class="svg-container">
            <i class="el-icon-s-goods"></i>
          </span>
          <el-input type="password" v-model="ruleForm.pwd" autocomplete="off" placeholder="用户密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-radio v-model="radio" label="1">记住账号密码</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="btn">登录</el-button>
          <!-- <el-button @click="resetForm('ruleForm')" class="btn" style="margin-left:6rem">重置</el-button> -->
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
      // name: "橘子orange",
      ruleForm: {
        name: "",
        pwd: ""
      },
      superName: "",
      name: "",
      rules: {
        name: [{ required: true, message: "请输入用户昵称", trigger: "blur" }],
        pwd: [{ required: true, validator: checkPwd, trigger: "blur" }]
      }
    };
  },
  mounted() {
    console.log(this.$store);
  },
  methods: {
    tohome() {
      this.$router.push({
        path: "/home"
      });
    },
    toSuperHome() {
      this.$router.push({
        path: "/superHome"
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        let data = {
          name: this.ruleForm.name,
          pwd: this.ruleForm.pwd
        };
        if (valid) {
          this.$axios({
            url: "/php/login_sj.php",
            method: "post",
            data: Qs.stringify(data)
          })
            .then(res => {
              console.log("res", res);
              if (res.data.code == 0) {
                // this.superName = res.data.data[0].name_fz;
                this.name = this.ruleForm.name;
                this.$message({
                  showClose: true,
                  message: `欢迎${this.ruleForm.name}成功登录！`,
                  type: "success"
                });
                if (res.data.data[0].authority == 0) {
                  //将用户名放入sessionStorage
                  localStorage.setItem("name", this.ruleForm.name);
                  //将商家用户名放入vuex中
                  this.$store.commit("sjStatus", this.ruleForm.name);
                  setTimeout(this.tohome, 1000);
                } else {
                  //将用户名放入sessionStorage
                  localStorage.setItem("name", this.superName);
                  this.$store.commit("sjStatus", this.ruleForm.name);
                  
                  setTimeout(this.toSuperHome, 1000);
                }
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
    }
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // }
  }
};
</script>
<style lang="scss">
#login_sj {
  height: 33.1rem;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden !important;

  .title-container {
    position: relative;
    margin-top: 6rem;

    .title {
      font-size: 26px;
      color: #eeeeee;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
}
.login-form {
  position: relative;
  width: 20rem;
  height: 100%;
  padding: 0 3rem 0;
  margin: 0 auto;
  // overflow: hidden !important;
}
.el-form-item__content {
  position: relative;

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: #889aa4;
    vertical-align: middle;
    // width: 30px;
    display: inline-block;
    position: absolute;
    top: -0.4rem;
    z-index: 99999;
  }
}

.el-message {
  margin-top: 3rem;
}
.login_sj {
  width: 25rem;
  min-height: 18rem;
  margin: 0 auto;
  margin-top: 2rem;
  .el-input {
    .el-input__inner {
      width: 20rem !important;
      padding-left: 2rem;
      background-color: #283443;
      border: 1px solid #343d52;
      color: #fff;
    }
  }
  .btn {
    width: 20rem;
  }
}
</style>