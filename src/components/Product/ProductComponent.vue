<template>
  <div class="card">

    <img
        src="https://t-static.dafiti.com.br/7OB-0kmEjzDtz7lRy512dami0GI=/fit-in/427x620/static.dafiti.com.br/p/182life-camiseta-182life-the-poet-preta-8398-8513452-1-product.jpg">

    <div class="card-content">

      <h4>Camiseta Hang Loose Classic Preta</h4>
      <div class="description">
        <span>R$ 99,90 </span>
        <span>R$ 54,99</span>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: "ProductComponent"
}
</script>

<style scoped>

.card {
  width: calc(100% / 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: dimgray;
  font-size: 1em;
  margin-bottom: 10px;
}

.card-content {
  padding: 15px 10px;
}

.card-content h4 {
  font-weight: normal;
}

.description span:first-child {
  text-decoration: line-through;
  color: darkblue;
}

@media (min-width: 600px){
  .card {
    width: calc(100% / 2);
    border-right: 10px solid #ffffff;
  }
}

@media (min-width: 768px) {
  .card {
    width: calc(100% / 3);
    margin-bottom: 10px;
    border-right: 10px solid #ffffff;
    font-size: 0.9em;
  }

  .card img{
    width: 100%;
  }

}

@media (min-width: 1024px) {
  .card {
    width: calc((100% / 5));
    border-right: 10px solid #ffffff;
  }

  .card img {
    width: 100%;
    height: 300px;
  }

}

</style>
