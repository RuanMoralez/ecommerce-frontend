<template>
  <header>

    <nav v-bind:style="{backgroundColor: themeColor}">
      <!-- / Logo / -->
      <div id="logo"><h2><a href="#">E-commerce</a></h2></div>
      <!-- / search / -->
      <div id="search">
        <input type="text" placeholder="Faça sua pesquisa..."/>
        <a href="#" v-bind:style="{color: themeColor}"><i class="fas fa-search"></i></a>
      </div>

      <!-- / Group Login e Cart / -->
      <div id="group-icon">
        <div id="group-login">
          <div id="icon-login">
            <a href="#"><i class="fas fa-user-circle"></i></a>
          </div>
          <div id="link-login">
            <a href="#">Olá, faça login</a><br>
            <a href="#">ou cadastra-se</a>
          </div>
        </div>
        <a id="icon-cart" href="#"><i class="fas fa-shopping-bag"></i></a>
        <!-- / Button mobile / -->
        <div id="btn-menu">
          <a v-on:click="openMenu = !openMenu" href="#"><i
            :class="openMenu ? 'fas fa-times': 'fas fa-bars'"></i></a>
        </div>
      </div>
      <!-- / END Login e Cart / -->
    </nav>

    <MenuMobile v-if="openMenu" v-bind:themeColor="color"/>

  </header>


</template>

<script>

import MenuMobile from "@/components/themeMenu/MenuMobile";

export default {
    name: "HeaderComponent",
  components: {
    MenuMobile
  },
  props:{
    themeColor: String,
  },
  data: function () {
    return {
      openMenu: false,
      color: this.themeColor
    }
  },
  created() {

  }
}

</script>

<style scoped>

nav {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
}

nav a {
  color: #FFFFFF;
}

#logo {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6em;
}

#search {
  width: 65%;
  background-color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
}

#search input {
  width: 100%;
  border: 0;
  padding: 5px;
  height: 30px;
  border-radius: 2px;
}

#search a {
  padding: 5px;
}

#group-icon {
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5%;
  font-size: 1.4em;
}

#icon-login,
#link-login {
  display: none;
}

#btn-menu{
  width: 19px;
}

@media (min-width: 768px) {
  #icon-login {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

}

@media (min-width: 1024px) {
  nav{
    padding: 0;
  }

  #logo {
    width: 20%;
    font-size: 1em;
  }

  #btn-menu {
    display: none;
  }

  #group-login{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #icon-login{
    float: left;
    font-size: 34px;
  }
  #link-login {
    margin: 0 5px;
    display: block;
    font-size: 0.60em;
    float: left;
  }

  #icon-cart {
    font-size: 34px;
  }

  #search {
    width: 60%;
  }

  #group-icon {
    width: 20%;
  }


}

</style>
