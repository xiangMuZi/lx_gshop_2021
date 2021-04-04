<!--
   非路由组件HeaderTop【路由组件 Msite/Search/Order/Profile 的页首子组件】
-->
<template>
  <!--提取路由组件Msite/Search/Order/Profile的公共<header>-->
  <header class="header">
    <!-- 使用插槽<slot>实现父子组件间通信【搜索】-->
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <!-- 使用插槽<slot>实现父子组件间通信【登录/注册】-->
    <slot name="right"></slot>
  </header>
</template>
<script>
  export default {
    //声明接收父组件的属性, 这个属性就会成为组件对象的属性
    props:{
      title: String
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  /*提取路由组件Msite/Search/Order/Profile的公共css(.header)*/
  .header
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-sousuo
        font-size 25px
        color #fff
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #fff
      text-align center
      .header_title_text
        font-size 20px
        color #fff
        display block
    .header_login
      font-size 14px
      color #fff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      .header_login_text
        color #fff
</style>
