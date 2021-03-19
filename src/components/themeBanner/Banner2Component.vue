<template>
  <div id="group-banner">
    <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true">
      <div><a href="#"><img class="slide-img"
                            src="https://appb2c-pages.s3.amazonaws.com/site/2020/ace/vitrine-bubble-blusas-desktop.jpg"></a>
      </div>
      <div><a href="#"><img class="slide-img"
                            src="https://appb2c-pages.s3.amazonaws.com/site/2020/maternidade/vitrine-bubble-jeans-desktop.jpg"></a>
      </div>
      <div><a href="#"><img class="slide-img"
                            src="https://images.tcdn.com.br/img/img_prod/743485/1604870247_banner603.jpg"></a></div>
    </VueSlickCarousel>
  </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "Banner2Component",
  components: {
    VueSlickCarousel
  }
}
</script>

<style scoped>

.slide-img {
  width: 100%;
  height: 150px;
}

@media (min-width: 768px) {

  .slide-img {
    width: 100%;
    height: 300px;
  }
}
</style>
