<template>
  <div id="menu-mobile">

    <!-- Group profile -->
    <div id="group-profile">
      <!-- Group imagem profile -->
      <div id="img-profile">
        <div id="img-radius">
          <i class="far fa-user"></i>
        </div>
      </div>
      <!-- Group text profile -->
      <div id="group-text">
        <div id="text-profile">
          <h4>Bem-vindo</h4>
          <p>Entre na sua conta para ver suas compras, favoritos e etc.</p>
        </div>
      </div>

      <!-- Group login profile -->
      <div id="group-login">
        <button id="btn-login" v-bind:style="{backgroundColor: themeColor}">Entrar</button>
        <button id="btn-register" v-bind:style="{backgroundColor: themeColor}">Cadastrar</button>
      </div>

    </div>

    <hr>

  </div>
</template>

<script>
export default {
  name: "MenuMobile",
  props: {
    themeColor: String
  }
}
</script>

<style scoped>

#menu-mobile {
  width: 100%;
  /*height: calc(100vh - 60px);*/
  height: 100%;
  background-color: #FFFFFF;
}

#group-profile{
  padding: 30px 20px;
}

#img-profile{
  float: left;
  width: 20%;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#img-radius{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 75px;
  border-radius: 100%;
  background: lavender;
}

#img-profile i{
  font-size: 2em;
  padding: 20px;
  color: #A9A9A9;
}

#group-text{
  display: flex;
  align-items: center;
  height: 75px;
  width: 70%;
  padding-left: 10px;
}

#text-profile h4{
  padding-bottom: 5px;
}

#text-profile p{
  font-size: 15px;
  color: grey;
}

#group-login{
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

#group-login button{
  width: 49%;
  height: 40px;
  border-radius: 5px;
  border: 0;
  color: #fff;
  background-color: blueviolet;
  font-size: 0.9em;
}

@media (min-width: 1024px) {
  #menu-mobile{
    display: none;
  }
}

</style>
