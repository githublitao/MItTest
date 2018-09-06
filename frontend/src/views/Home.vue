<template>
  <section>
    <mt-header fixed title="成都软件测试" style="height: 60px;font-size: 20px"></mt-header>
    <div style="margin-top: 70px">
      <!--<template v-for="(item) in $router.options.routes" v-if="!item.M">-->
        <mt-cell v-for="(item) in $router.options.routes"
                 v-if="!item.M"
                 :index="item.path"
                 :key="item.path"
                 :title=item.name
                 :to="item.children[0].path"
                 is-link>
          <div slot="icon"><i :class="item.iconCls"></i></div>
        </mt-cell>
      <!--</template>-->
    </div>
    <mt-tabbar>
      <div style="height: 60px;margin: auto"><div style="font-style: normal;font-size: 20px;color: #606266;padding-top:15px">
        群号: 599733338
      </div></div>
    </mt-tabbar>
  </section>
</template>

<script>
/* eslint-disable */
    export default {
        data() {
            return {
              selected: "",
            }
        },
        methods: {
        },
        mounted() {
        }
    }

</script>

<style scoped lang="scss">

</style>
