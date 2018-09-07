<template>
  <section>
    <mt-header style="height: 60px;font-size: 20px;z-index: 1000" title="添加">
      <router-link to="/Resource" slot="left">
        <mt-button icon="back"><i style="font-style: normal">返回</i></mt-button>
      </router-link>
      <mt-button style="font-size: 15px" slot="right" @click="addForm">保存</mt-button>
    </mt-header>
    <mt-field label="备注" placeholder="请输入链接备注" v-model="add.remarks"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" v-model="add.password"></mt-field>
    <mt-field label="链接" placeholder="请输入链接地址" type="textarea" rows="6" v-model="add.links"></mt-field>
  </section>
</template>

<script>
/* eslint-disable */
import { Toast, MessageBox, Indicator } from 'mint-ui';
import { addLinks } from '../../api/api';
export default {
  data () {
    return {
      add:{
        links: '',
        password: '',
        remarks: ''
      }
    }
  },
  methods: {
    // url格式校验
    checkUrl(value) {
      var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
        + "?(([0-9a-zA-z_!~*'().&=+$%-]+: )?[0-9a-zA-z_!~*'().&=+$%-]+@)?" // ftp的user@
        + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
        + "|" // 允许IP和DOMAIN（域名）
        + "([0-9a-zA-z_!~*'()-]+\.)*" // 域名- www.
        + "([0-9a-zA-z][0-9a-zA-z-]{0,61})?[0-9a-zA-z]\." // 二级域名
        + "[a-zA-z]{2,6})" // first level domain- .com or .museum
        + "(:[0-9]{1,4})?" // 端口- :80
        + "((/?)|" // a slash isn't required if there is no file name
        + "(/[0-9a-zA-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
      var re = new RegExp(strRegex);
      let result = re.test(value);
      if (result) {
        return true
      } else {
        return false
      }
    },
    // 校验备注信息
    checkRemarks(){
      if (this.add.remarks.length === 0){
        Toast({
          message: '备注不能为空',
          position: 'bottom',
          duration: 4000
        });
        return false
      } else if ( this.add.remarks.length > 128) {
        Toast({
          message: '备注只能输入1-128个字符',
          position: 'bottom',
          duration: 4000
        });
        return false
      } else {
        return true
      }
    },
    // 校验密码
    checkPassword(){
      if ( this.add.password.length > 128) {
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
    // 校验url
    checkLinksUrl(){
      if ( this.add.links.length === 0){
        Toast({
          message: '链接不能为空',
          position: 'bottom',
          duration: 4000
        });
        return false
      } else if ( this.add.links.length > 1024) {
        Toast({
          message: '链接只能输入1-1024个字符',
          position: 'bottom',
          duration: 4000
        });
        return false
      } else if (!this.checkUrl(this.add.links)) {
        Toast({
          message: '请输入有效的链接地址！',
          position: 'bottom',
          duration: 4000
        });
        return false
      } else {
        return true
      }
    },
    addForm(){
      if ( this.checkRemarks() && this.checkPassword() && this.checkLinksUrl() ){
        MessageBox.confirm('确定添加?').then(action => {
          Indicator.open();
          try {
            let self = this;
            let params = JSON.stringify(self.add);
            addLinks(params).then(_data => {
              let {msg, code, data} = _data;
              if (code === '999999') {
                Toast({
                  message: '添加链接信息成功',
                  position: 'bottom',
                  duration: 4000
                });
                Indicator.close();
                self.$router.push({path: '/Resource'});
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
