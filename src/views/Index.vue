<template>
  <div>
    <HeaderComponent v-bind:themeColor="color" @openLoginAndRegister="updateStatusLoginAndRegister(true)" v-bind:user="user"/>
    <Banner1Component v-if="banner === '1' "/>
    <Banner2Component v-if="banner === '2' "/>
    <Banner3Component v-if="banner === '3' "/>
    <LoginAndRegister v-if="statusLoginAndRegister" @closeLoginAndRegister="updateStatusLoginAndRegister(false)"/>
    <ListProductComponent/>
  </div>
</template>



<script>
import HeaderComponent from "@/components/HeaderComponent";
import Banner1Component from "@/components/ThemeBanner/Banner1Component";
import Banner2Component from "@/components/ThemeBanner/Banner2Component";
import Banner3Component from "@/components/ThemeBanner/Banner3Component";
import ListProductComponent from "@/components/Product/ListProductComponent"
import LoginAndRegister from "@/components/Auth/LoginAndRegisterComponent";

export default {
  name: 'Home',
  components: {
    HeaderComponent,
    Banner1Component,
    Banner2Component,
    Banner3Component,
    ListProductComponent,
    LoginAndRegister

  },
  data: function () {
    return {
      color: 'blueviolet',
      banner: 0,
      statusLoginAndRegister: false,

      user:{
        id:String,
        name:String,
        email: String
      }
    }
  }, created() {
    this.changeThemeColor()
    this.changeBanner()
  },
  methods: {
    changeThemeColor: function () {
      this.color = localStorage.getItem('color')
    },
    changeBanner: function () {
      this.banner = localStorage.getItem('banner')
    },
    updateStatusLoginAndRegister: function (status) {
      this.statusLoginAndRegister = status
    }
  }
}
</script>
