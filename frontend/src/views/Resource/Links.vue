<template>
  <form action="" v-on:submit.prevent="" style="margin-top: 5px">
    <mt-search v-model="value" placeholder="请输入关键字" @keyup.native.enter="search(value)" :show="true">
      <mt-loadmore
        :bottom-method="loadBottom"
        :top-method="loadTop"
        :bottom-all-loaded="allLoaded"
        :bottomPullText='bottomPullTextVal'
        :bottomDropText='bottomDropTextVal'
        :bottomLoadingText='bottomLoadingTextVal'
        :topPullText='topPullTextVal'
        :topDropText='topDropTextVal'
        :topLoadingText='topLoadingTextVal'
        :autoFill="false"
        @bottom-status-change="handleBottomChange"
        @top-status-change="handleTopChange"
        ref="loadmore">
        <div style="margin-top: 80px">
          <mt-cell
            v-for="item in result"
            :key="item.id"
            :title="item.remarks"
            :to ='{name: "链接详情", query:item}'
          >
          </mt-cell>
        </div>
      </mt-loadmore>
    </mt-search>
  </form>
</template>

<script>
/* eslint-disable */
import { getLinksList } from '../../api/api';
import { Toast, Indicator  } from 'mint-ui';
export default {
  name: 'blackList',
  data () {
    return {
      total: '',
      value: '',
      result: [],
      searchCondition: {
        pageVal: 1,
        pageSize: 20
      },
      allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉
      status: "",
      bottomPullTextVal: '上划加载更多数据',
      bottomDropTextVal: '释放更新',
      bottomLoadingTextVal: '加载中...',
      topPullTextVal: '下拉加载更多数据',
      topDropTextVal: '释放更新',
      topLoadingTextVal: '加载中...',
      topStatus: '',
      bottomStatus: ''
    }
  },
  methods: {
    search(){
      let self = this;
      let params = { page: self.searchCondition.pageVal, name: self.value};
      let header = {};
      Indicator.open();
      try {
        getLinksList(header, params).then((res) => {
          // self.listLoading = false;
          let {msg, code, data} = res;
          if (code === '999999') {
            self.total = data.total;
            console.log(data.data);
            data.data.forEach((item) => {
              self.result.push(item);
            });
            Indicator.close()
            // self.result = data.data
          }
          else {
            Indicator.close();
            Toast({
              message: '查询失败',
              position: 'bottom',
              duration: 5000
            });
          }
        })
      } catch (e) {
        Indicator.close();
            Toast({
              message: e,
              position: 'bottom',
              duration: 5000
            });

      }
    },
    //上拉加载
    loadBottom () {
      if (this.searchCondition.pageVal < this.total) {
        this.searchCondition.pageVal++;
        this.$refs.loadmore.onBottomLoaded();
        this.search();
      } else {
        this.$refs.loadmore.onBottomLoaded();
          Toast('我是底线的！');
      }
    },
    //下拉刷新
    loadTop () {
      this.allLoaded = false;
      this.searchCondition.pageVal = 1;
      let self = this;
      let params = { page: self.searchCondition.pageVal, name: self.value};
      let header = {};
      getLinksList(header, params).then((res) => {
        // self.listLoading = false;
        let { msg, code, data } = res;
        if (code === '999999') {
          self.total = data.total;
          console.log(data.data);
          self.result = data.data
          // self.result = data.data
        }
        else {
          Toast({
            message: msg,
            position: 'bottom',
            duration: 5000
          });
        }
      });
      this.$refs.loadmore.onTopLoaded();
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
  },
  mounted () {
    Indicator.open();
    this.search();
    Indicator.close();
  }
}
</script>

<style scoped>

</style>
