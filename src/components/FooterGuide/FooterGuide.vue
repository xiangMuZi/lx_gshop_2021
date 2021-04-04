<!--
    非路由组件：底部组件vue
-->
<template>
  <div class="footer_guide border-1px">
    <!--强制绑定class动态的class指令-->
   <a href="javascript:;" class="guide_item" :class="{on: isCurrent('/msite')}" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: isCurrent('/search')}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/order'=== $route.path}"  @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <!--方式1：使用<a>标签添加 @click 进行跳转-->
  <!--  <a href="javascript:;" class="guide_item" :class="{on: '/profile'=== $route.path}"  @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </a>-->
    <!--方式2：使用路由自带的跳转组件标签<router-link> 添加 to="/path" 进行跳转-->
    <router-link href="javascript:;" class="guide_item" :class="{on: '/profile'=== $route.path}" to="/profile">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </router-link>
  </div>
</template>
<script>
  export default {
    methods:{
      // this.$router.push相当于路由链接<router-link>(可以返回到当前路由界面)
      // this.$router.replace是用新路由替换当前路由(不可以返回到当前路由界面)
      goTo(path){
        this.$router.replace(path)
      },
      isCurrent(path) {
        //console.log(this.$route.path)    /* /msite  */
        return this.$route.path === path;
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
