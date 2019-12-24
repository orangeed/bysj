<template>
  <div id="order">
    <div class="top">
      <span class="logo">你想要的</span>
      <div class="step">
        <el-steps :active="0" align-center finish-status="success" process-status="success">
          <el-step title="查看购物车"></el-step>
          <el-step title="拍下商品"></el-step>
          <el-step title="成功付款"></el-step>
          <el-step title="确认收货"></el-step>
          <el-step title="评价"></el-step>
        </el-steps>
      </div>
    </div>
    <!-- 配送地址 -->
    <div class="address">
      <span class="addresstitle">选择收货地址</span>
      <span class="newAddress" @click="AddressShowClick">新增收货地址</span>
      <div class="card">
        <div
          v-for="(item,index) in address"
          :key="index"
          class="box-card addresscard"
          @click="addressIndex=index"
        >
          <el-card :class="{'border':addressIndex == index}">
            <div class="name">{{name}}</div>
            <div class="addressItem">{{item}}</div>
          </el-card>
          <div v-show="addressIndex ==index">
            <div class="arrow-right"></div>
          </div>
        </div>
        <div v-if="address.length == 0" class="noAddress">
          <span>您还没有收货地址，请增加新的收货地址！</span>
        </div>
      </div>
      <!-- 新增收货地址 -->
      <el-dialog title="新增收货地址" :visible.sync="newAddressShow" width="50%">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="收货人">
            <el-input v-model="form.name" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="所在地区">
            <el-input v-model="form.city" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="详细地址">
            <el-input v-model="form.minarea" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="form.phone" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox-group v-model="form.isShowDefult">
              <el-checkbox label="设为默认地址" name="type">设为默认地址</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false" type="danger">取 消</el-button>
          <el-button type="primary" @click="saveNewAdress(edmitType)">保存</el-button>
        </span>
      </el-dialog>
    </div>
    <!-- 订单确认 -->
    <div class="order">
      <p class="checkorder">确认订单信息</p>
      <div class="head">
        <el-row>
          <el-col :span="5">商品图片</el-col>
          <el-col :span="8">商品信息</el-col>
          <el-col :span="3">商品单价</el-col>
          <el-col :span="6">购买数量</el-col>
          <el-col :span="2">小计</el-col>
        </el-row>
      </div>
      <div class="content">
        <el-row v-for="(item,index) in data" :key="index">
          <el-col :span="5">
            <img :src="url+smallimg" class="smallimg" />
          </el-col>
          <el-col :span="8">
            <p class="title">{{item.title}}</p>
            <span class="description">{{item.description}}</span>
          </el-col>
          <el-col :span="3">
            <p class="price">￥{{item.price}}</p>
          </el-col>
          <el-col :span="6">
            <el-input-number size="mini" v-model="num"></el-input-number>
          </el-col>
          <el-col :span="2" class="total">￥{{num*item.price}}</el-col>
        </el-row>
      </div>
      <div class="message">
        <div class="left">
          <p class="checkorder">给卖家留言：</p>
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="message"
            class="messageInput"
          ></el-input>
        </div>
        <div class="right">
          <p>
            <el-checkbox v-model="checked" class="check">开具发票</el-checkbox>
          </p>
          <p class="check">运费方式：普通配送 快递 免邮</p>
        </div>
      </div>
    </div>
    <div class="totalprice">
      <div>
        <p>实付款：<span class="money">￥{{}}元</span></p>
        <p>配送至：<span class="psaddress">{{}}</span></p>
        <p>收货人：<span class="consignee">{{name}}</span></p>
      </div>
      <div class="btn">
        <el-button icon="el-icon-back">返回购物车</el-button>
        <el-button type="success">提交订单</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "order",
  data() {
    return {
      data: [],
      url: "http://localhost/",
      smallimg: [],
      name: "",
      address: [],
      num: 1,
      message: "",
      checked: false,
      addressIndex: 0, //支付类型默认选择
      newAddressShow: false, //新增收货地址显示
      dialogVisible: false, //编辑、新增对话状态
      edmitType: "",
      form: {
        name: "",
        city: "",
        area: "",
        minarea: "",
        phone: "",
        addressDefult: "",
        addressIsShow: "",
        num: "",
        isShowDefult: ""
      }
    };
  },
  created() {
    console.log(this.$route.params.id);
    this.$axios({
      url: "/php/goodsItem.php",
      method: "get",
      params: { id: this.$route.params.id }
    }).then(res => {
      console.log(res);
      this.data = res.data.data;
      this.smallimg = res.data.data[0].smallimg.split(",", 1);
      console.log(this.smallimg);
      console.log("=====", this.data);
    });
    this.$axios({
      //这里请求的地址应该是一个单独的配送地址数据表，与用户的编码相关联，为了简单演示，便使用了用户数据表
      url: "/php/getUserData.php",
      method: "get",
      params: { username: localStorage.getItem("username") }
    }).then(res => {
      this.name = localStorage.getItem("username");
      this.address = res.data.data[0].address.split(",");
      console.log(this.address);
    });
  },
  methods: {
    //新增收货地址函数
    AddressShowClick() {
      (this.edmitType = "新增"), (this.newAddressShow = true);
    },
    //新增收货地址和编辑收货地址  保存函数
    saveNewAdress() {},
    //编辑收货地址函数
    emitAddress() {}
  }
};
</script>
<style lang="scss">
#order {
  padding-top: 3rem;
  max-width: 55rem;
  margin: 0 auto;
  .top {
    margin-top: 2rem;
    .logo {
      float: left;
      font-size: 30px;
    }
    .step {
      height: 100%;
    }
  }

  .address {
    margin-top: 2rem;
    .addresstitle {
      font-size: 14px;
      font-weight: 800;
      float: left;
    }
    .newAddress {
      @extend .addresstitle;
      float: right;
      cursor: pointer;
    }
    .card {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      font-size: 14px;
      clear: both;

      .addresscard {
        cursor: pointer;
        flex-grow: 1;
        flex-basis: 9rem;
        position: relative;
        margin: 1rem;

        .el-card {
          height: 5rem;
          &:hover {
            border-color: #e21b1b;
          }
        }
        .name {
          padding: 0.5rem 0rem 0rem 1rem;
        }
        .addressItem {
          padding: 1rem 0.5rem 0.5rem 1rem;
          border-top: 1px solid #cccccc;
        }
        .arrow-right {
          position: absolute;
          transform: rotate(45deg);
          right: -2px;
          bottom: -10px;
          width: 0;
          height: 0;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-left: 15px solid #3784cc;
        }
        .border {
          border-color: #3784cc;
        }
      }
    }
    .el-input__inner {
      width: 95% !important;
    }
  }
  .order {
    font-size: 14px;
    .checkorder {
      font-size: 14px;
      font-weight: 800;
    }

    .head {
      margin-top: 1rem;
      font-weight: 800;
      border-bottom: 2px solid #3784cc;
    }
    .content {
      margin-top: 1rem;
      background-color: #fbfcff;
      .smallimg {
        height: 100px;
      }
      .title {
        font-size: 18px;
        padding: 0.5rem 0rem 0.5rem 0rem;
      }
      .description {
        padding: 0.5rem 0rem 0.5rem 0rem;
      }
      .el-input__inner {
        width: 6.5rem !important;
      }
      .total {
        color: #e21b1b;
        font-size: 18px;
        font-weight: 700;
        text-align: right;
      }
    }
    .message {
      .check{
        // width: 27.5rem;
        height: 2rem;
        line-height: 2rem;
        margin-left: 2rem;
        // background-color: #fbfcff;
      }
      .left {
        float: left;
        .messageInput {
          width: 27.5rem;
        }
      }
      .right {
        float: left;
      }
    }
  }
  .totalprice{
    clear: both;
    float: right;
    text-align: right;
    font-size: 14px;
  }
}
</style>