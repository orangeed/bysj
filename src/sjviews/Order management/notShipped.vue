<template>
  <div id="notShipped">
    <div class="search">
      <el-input class="searchInput" v-model="search" placeholder="请输入搜索内容"></el-input>
      <el-button class="searchBtn" type="primary" icon="el-icon-search" @click="Search">搜索</el-button>
    </div>
    <div v-if="searchData.length>0">
      <div class="data">
        <el-table
          :data="searchData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          border
          style="width: 100%"
          class="table"
          :default-sort="{prop: 'date', order: 'descending'}"
        >
          <el-table-column sortable prop="id" label="序号" width="80"></el-table-column>
          <el-table-column prop="title" class="title" label="名称" width="260"></el-table-column>
          <el-table-column prop="goods_id" label="订单号" width="150"></el-table-column>
          <el-table-column sortable prop="price" label="价格" width="80"></el-table-column>
          <el-table-column prop="img" label="图片" width="200">
            <template slot-scope="scope">
              <img :src="url+scope.row.img" min-width="70" height="70" />
            </template>
          </el-table-column>
          <el-table-column prop="state" label="物流" width="120" class="logistics"></el-table-column>
          <el-table-column prop="cop" label="操作">
            <el-button size="mini" type="success">修改订单</el-button>
            <el-button size="mini" type="warning">发货</el-button>
          </el-table-column>
        </el-table>
      </div>
      <el-pagination
        layout="total,prev, pager, next,jumper"
        @current-change="current_change"
        :total="total"
        :page-size="10"
        background
        class="pagination"
      ></el-pagination>
    </div>
    <div v-else>
      <div class="data">
        <el-table
          :data="tableData1.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          border
          style="width: 100%"
          class="table"
          :default-sort="{prop: 'date', order: 'descending'}"
        >
          <el-table-column sortable prop="id" label="序号" width="80"></el-table-column>
          <el-table-column prop="title" class="title" label="名称" width="260"></el-table-column>
          <el-table-column prop="goods_id" label="订单号" width="150"></el-table-column>
          <el-table-column sortable prop="price" label="价格" width="80"></el-table-column>
          <el-table-column prop="img" label="图片" width="200">
            <template slot-scope="scope">
              <img :src="url+scope.row.img" min-width="70" height="70" />
            </template>
          </el-table-column>
          <el-table-column prop="state" label="物流" width="120" class="logistics"></el-table-column>
          <el-table-column prop="cop" label="操作">
            <el-button size="mini" type="success">修改订单</el-button>
            <el-button size="mini" type="warning">发货</el-button>
          </el-table-column>
        </el-table>
      </div>
      <el-pagination
        layout="total,prev, pager, next,jumper"
        @current-change="current_change"
        :total="total"
        :page-size="10"
        background
        class="pagination"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { scrollTo } from "@/utils/scroll-to";
export default {
  name: "notShipped",
  data() {
    return {
      search: "",
      tableData1: [],
      total: 1000, //默认数据总数
      pagesize: 9, //每页的数据条数
      currentPage: 1, //默认开始页面
      url: "http://localhost/",
      searchData: []
    };
  },
  // components: { Pagination },

  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios({
        url: "/php/orderSearchItem.php",
        method: "get",
        params: { state: "待发货" }
      }).then(res => {
        console.log(res);
        this.tableData1 = res.data.data;
        this.total = res.data.data.length;
      });
    },
    Search() {
      // search 是 v-model="search" 的 search
      const search = this.search;
      if (search) {
        this.searchData = this.tableData1.filter(function(product) {
          // 每一项数据
          // console.log("product", product);
          // console.log(Object.keys(product));
          return Object.keys(product).some(function(key) {
            // 每一项数据的参数名
            // console.log(key);
            return (
              String(product[key])
                // toLowerCase() 方法用于把字符串转换为小写。
                .toLowerCase()
                // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
                .indexOf(search) > -1
            );
          });
        });
        this.total = this.searchData.length;
      } else if (search.length == 0) {
        this.searchData = this.tableData1;
      } else {
        return this.searchData;
      }
    },
    current_change: function(currentPage) {
      this.currentPage = currentPage;
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    }
  }
};
</script>
<style lang="scss">
#notShipped {
  padding-top: 1rem;
  margin: 0rem 1rem 1rem 1rem;
  .search {
    .searchInput {
      float: left !important;
    }
    .el-input {
      width: 20rem;
      .el-input__inner {
        width: 20rem !important;
      }
    }

    .searchBtn {
      float: left !important;
      margin-left: 1rem;
    }
  }
  .data {
    position: relative;
    top: 1rem;
    .cell {
      text-align: center;
    }
    .is-leaf {
      color: #9093a6 !important;
    }
    .el-table_2_column_13 {
      color: #f05a5a;
      font-weight: 700;
    }
  }
  .pagination {
    margin: 2rem 0rem 0rem 18rem;
    .el-input__inner {
      width: 2rem !important;
    }
  }
}
</style>