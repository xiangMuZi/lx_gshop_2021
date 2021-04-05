<!--
     应用根组件vue
-->
<template>
  <div>
    <router-view/>
    <!--3、使用组件-->
    <!--控制Footer的显示隐藏-->
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  /*引入FooterGuide组件*/
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import {reqCategorys} from './api'

  export default {
    /*2、定义为组件标签*/
    components:{
      FooterGuide
    },
    //测试异步获取数据
    async mounted(){
      const result = await reqCategorys();
      console.log(result);
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
