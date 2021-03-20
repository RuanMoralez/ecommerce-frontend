<template>
  <div class="content">

    <h2>Orfertas com preços imbatível</h2>

    <div class="listProduct">

      <ProductComponent />
      <ProductComponent />
      <ProductComponent />
      <ProductComponent />
      <ProductComponent />
      <ProductComponent />
      <ProductComponent />
      <ProductComponent />


    </div>

  </div>
</template>

<script>

import ProductComponent from "@/components/Product/ProductComponent";

export default {
name: "ListProductComponent",
  components:{
    ProductComponent
  }
}
</script>

<style scoped>

.listProduct{
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

</style>
