<template>
  <div class="group-banner">
    <!-- <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true">
      <div><a href="#"><img class="slide-img"
                            src="https://appb2c-pages.s3.amazonaws.com/site/2020/ace/vitrine-bubble-blusas-desktop.jpg"></a>
      </div>
      <div><a href="#"><img class="slide-img"
                            src="https://appb2c-pages.s3.amazonaws.com/site/2020/maternidade/vitrine-bubble-jeans-desktop.jpg"></a>
      </div>
      <div><a href="#"><img class="slide-img"
                            src="https://images.tcdn.com.br/img/img_prod/743485/1604870247_banner603.jpg"></a></div> -->
    
    <!-- show btn next/previows -->
    <!-- <template #prevArrow="arrowOption">
      <div class="custom-arrow">
        {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
      </div>
    </template>

    <template #nextArrow="arrowOption">
      <div class="custom-arrow">
        {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
      </div>
    </template>

    </VueSlickCarousel> -->

    <!-- new carrousel -->
    <q-carousel
      height="100%"
      animated
      v-model="slide"
      navigation
      prev-icon="arrow_back_ios"
      next-icon="arrow_forward_ios"
      navigation-icon="radio_button_unchecked"
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://appb2c-pages.s3.amazonaws.com/site/2020/ace/vitrine-bubble-blusas-desktop.jpg" />
      <q-carousel-slide :name="2" img-src="https://appb2c-pages.s3.amazonaws.com/site/2020/maternidade/vitrine-bubble-jeans-desktop.jpg" />
      <q-carousel-slide :name="3" img-src="https://images.tcdn.com.br/img/img_prod/743485/1604870247_banner603.jpg" />
    </q-carousel>

  </div>
</template>

<script>

// import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "Banner2Component",
  components: {
    // VueSlickCarousel
  },
  data: function (){
    return{
      slide: 1,
      autoplay: true,
    }
  }
}
</script>

<style scoped>

.group-banner {
  height: 250px;
}

@media (min-width: 768px) {

  .group-banner {
    height: 300px;
  }
}
</style>
