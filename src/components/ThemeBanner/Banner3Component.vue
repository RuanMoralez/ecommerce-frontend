<template>
  <!-- Group banner -->
  <div class="group-banner">
    <!-- Col1 slide -->
    <div id="box-column1">
      <!-- Slide -->
      <VueSlickCarousel id="slide-slick" :arrows="true" :dots="true" style="width: 100%; height: 100%;"
                        :autoplay="true">
        <div>
          <img class="slide-img"
               src="https://super.abril.com.br/wp-content/uploads/2012/03/por-que-medidas-de-roupas-nacc83o-sacc83o-padronizadas.jpg"
               alt="">
        </div>
        <div>
          <div class="slide">
            <img class="slide-img" src="https://namu.com.br/portal/wp-content/uploads/2019/10/roupas.png" alt="">
          </div>
        </div>
        <div>
          <div class="slide">
            <img class="slide-img" src="https://exame.com/wp-content/uploads/2020/05/walmart-1.jpg" alt="">
          </div>
        </div>
        <div>
          <div class="slide">
            <img class="slide-img" src="http://blog.sebraees.com.br/wp-content/uploads/2019/02/roupas-1.jpeg" alt="">
          </div>
        </div>
      
        <!-- show btn next/previows -->
        <template #prevArrow="arrowOption">
          <div class="custom-arrow">
            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
          </div>
        </template>

        <template #nextArrow="arrowOption">
          <div class="custom-arrow">
            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
          </div>
        </template>
      
      </VueSlickCarousel>
    </div>
    <!-- Col2 Banner -->
    <div id="box-column2">
      <!-- Banner1 -->
      <div id="box1-banner"
           style="background-image: url('https://i.pinimg.com/originals/fa/ff/25/faff25db3b406a1df6729c2b7dbe7297.png'); background-repeat: no-repeat; background-position: center; background-size: cover"></div>
      <!-- Banner2 -->
      <div id="box2-banner"
           style="background-image: url('https://i.pinimg.com/originals/b1/d9/71/b1d971f5896fe0a3d6709d2c2ca20636.png');  background-repeat: no-repeat; background-position: center; background-size: cover"></div>
    </div>
  </div>

</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "Banner3Component",
  components: {
    VueSlickCarousel
  }
}
</script>

<style scoped>

.slide-img {
  width: 100%;
}

#box-column1 {
  width: 100%;
  background-color: brown;
  height: 200px;
}

#box1-banner {
  width: 100%;
  background-color: green;
  height: 200px;
}

#box2-banner {
  width: 100%;
  background-color: blueviolet;
  height: 200px;
}

@media (min-width: 768px) {

  .group-banner {
    padding: 1%;
    height: 270px;
    display: flex;
  }

  #box-column1 {
    width: 50%;
    background-color: cornflowerblue;
    height: 100%;
  }

  #box-column2 {
    width: 50%;
    height: 100%;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  #box1-banner {
    width: 100%;
    height: 100%;
    background-color: red;
    margin-right: 1.5%;
  }

  #box2-banner {
    width: 100%;
    height: 100%;
    background-color: green;
  }
}

@media (min-width: 1024px) {
  .group-banner {
    padding: 1%;
    height: 330px;
    display: flex;
  }

  #box-column1 {
    width: 50%;
    background-color: cornflowerblue;
    height: 100%;
  }

  #box-column2 {
    width: 50%;
    height: 100%;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  #box1-banner {
    width: 100%;
    height: 100%;
    background-color: red;
    margin-right: 1.5%;
  }

  #box2-banner {
    width: 100%;
    height: 100%;
    background-color: green;
  }
}

/* config banner */
.slick-slider {overflow:hidden; width: 113% !important; left: -7%;}

.slick-prev {left:7%;z-index:1;}
.slick-next {right:6%;z-index:1;}

</style>
