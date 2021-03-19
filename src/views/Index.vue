<template>

  <div>

    <HeaderComponent v-bind:themeColor="color"/>

    <Banner1Component v-if="banner === '1' "/>
    <Banner2Component v-if="banner === '2' "/>
    <Banner3Component v-if="banner === '3' "/>
    lista produto

  </div>

</template>

<script>

import HeaderComponent from "@/components/HeaderComponent";
import Banner1Component from "@/components/themeBanner/Banner1Component";
import Banner2Component from "@/components/themeBanner/Banner2Component";
import Banner3Component from "@/components/themeBanner/Banner3Component";

export default {
  name: 'Home',
  components: {
    HeaderComponent,
    Banner1Component,
    Banner2Component,
    Banner3Component
  },
  data: function () {
    return {
      color: 'blueviolet',
      banner: 0
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
    }
  }
}
</script>
