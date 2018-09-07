<template>
  <section>
    <mt-header style="height: 60px;font-size: 20px;z-index: 1000" title="添加">
      <router-link to="/blackList" slot="left">
        <mt-button icon="back"><i style="font-style: normal">返回</i></mt-button>
      </router-link>
      <mt-button style="font-size: 15px" slot="right" @click="addForm">保存</mt-button>
    </mt-header>
    <mt-field label="名称" placeholder="请输入公司名称" v-model="add.CompanyName"></mt-field>
    <mt-field label="地址" placeholder="请输入地址" v-model="add.CompanyAddress"></mt-field>
    <mt-field label="内容" placeholder="请输入内容" type="textarea" rows="6" v-model="add.ComplainData"></mt-field>
  </section>
</template>

<script>
/* eslint-disable */
  import {Indicator, MessageBox, Toast} from 'mint-ui';
  import {addBlack} from '../../api/api';

  export default {
    data () {
      return {
        add:{
          CompanyName: '',
          CompanyAddress: '',
          ComplainData: ''
        }
      }
    },
    methods: {
      // 校验公司名称
      checkName(){
        if (this.add.CompanyName.length === 0){
          Toast({
            message: '名称不能为空',
            position: 'bottom',
            duration: 4000
          });
          return false
        } else if ( this.add.CompanyName.length > 128) {
          Toast({
            message: '名称只能输入1-128个字符',
            position: 'bottom',
            duration: 4000
          });
          return false
        } else {
          return true
        }
      },
      // 校验地址
      checkAddress(){
        if ( this.add.CompanyAddress.length === 0){
          Toast({
            message: '地址不能为空',
            position: 'bottom',
            duration: 4000
          });
          return false
        } else if ( this.add.CompanyAddress.length > 128) {
          Toast({
            message: '地址只能输入1-128个字符',
            position: 'bottom',
            duration: 4000
          });
          return false
        } else {
          return true
        }
      },
      // 校验内容
      checkData(){
        if ( this.add.ComplainData.length === 0){
          Toast({
            message: '内容不能为空',
            position: 'bottom',
            duration: 4000
          });
          return false
        } else if ( this.add.ComplainData.length > 1024) {
          Toast({
            message: '内容只能输入1-1024个字符',
            position: 'bottom',
            duration: 4000
          });
          return false
        } else {
          return true
        }
      },
      // 添加名单
      addForm() {
        if (this.checkName() && this.checkAddress() && this.checkData()) {
          MessageBox.confirm('确定添加?').then(action => {
            Indicator.open();
            let self = this;
            try {
              let params = JSON.stringify(self.add);
              addBlack(params).then(_data => {
                let {msg, code, data} = _data;
                if (code === '999999') {
                  Toast({
                    message: '添加公司成功',
                    position: 'bottom',
                    duration: 4000
                  });
                  Indicator.close();
                  self.$router.push({path: '/blackList'});
                } else {
                  Indicator.close();
                  Toast({
                    message: msg,
                    position: 'bottom',
                    duration: 4000
                  });
                }
              })
            } catch (e) {
              Indicator.close();
              console.log(e);
              Toast({
                message: e,
                position: 'bottom',
                duration: 4000
              });
            }
          });
        }
      }

    },
}
</script>

<style scoped>

</style>
