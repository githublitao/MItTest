<template>
  <section>
    <mt-header style="height: 60px;font-size: 20px;z-index: 1000" title="关于我们">
      <router-link to="/home" slot="left">
        <mt-button icon="back"><i style="font-style: normal">返回</i></mt-button>
      </router-link>
    </mt-header>
    <div class="bubble">
      <div class="title-font">
        目的：
      </div>
      <div>
        <div>为广大群友提供服务信息</div>
      </div>
    </div>
    <div class="bubble">
      <div class="title-font">
        未来：
      </div>
      <div>
        <div>逐步完善服务性信息内容</div>
      </div>
    </div>
    <div class="bubble">
      <div class="title-font">
        注意：
      </div>
      <div>
        <div>你在变我在变时间也在变</div>
        <div>所有信息仅供大家来参考</div>
        <div>不保证信息百分百的准确</div>
      </div>
    </div>
    <div class="bubble">
      <div class="title-font">
        Q群：
      </div>
      <div>
        <div>无论你关注或不关注我们、我们都会在这里不离不弃</div>
        <div>全测试类群最全资料分类、最人性化贴心服务于群友</div>
        <div>599733338、期待你的加入！</div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
  export default {
        name: "about"
    }
</script>

<style scoped>
    .title-font{
        font-size: 20px;
        margin-bottom: 10px;
        font-weight: bold;
        color: #606266;
    }
    .bubble{
        width: 50%;
        margin: 20px;
        padding: 60px;
        display:  inline-block;
        border:  1px solid #606266;
        border-radius: 30px;
        box-shadow: 5px 5px 5px #606266;
    }

</style>
