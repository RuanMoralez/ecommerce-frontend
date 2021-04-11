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
            <div v-if="name === ''">
              <a v-on:click="this.openLoginAndRegister">Olá, faça login</a><br>
            </div>
            <div v-if="name !== ''">
              <a v-on:click="openMenuUser" style='color: #fff'>Olá, {{ name }}!</a>
            </div>
            <a v-on:click="this.openLoginAndRegister" v-if="name === '' ">ou cadastre-se</a>
          </div>
        </div>
        <div id="menuUser" v-bind:style="{backgroundColor: themeColor}" v-if="statusMenuUser">
          <ul>
            <li><a href="#">Perfil</a></li>
            <hr>
            <li><a v-on:click="logout" ><i class="fas fa-door-open"></i>Logout</a></li>
          </ul>
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

import MenuMobile from "@/components/ThemeMenu/MenuMobile";

export default {
  name: "HeaderComponent",
  components: {
    MenuMobile
  },

  props: {
    themeColor: String,
  },

  data: function () {
    return {
      openMenu: false,
      color: this.themeColor,
      statusMenuUser: false,
      name: '',
    }
  },

  mounted() {
    console.log(this.user)
    this.checkUser()
  },

  methods: {
    openLoginAndRegister: function () {
      this.$emit("openLoginAndRegister")
    },
    checkUser: function () {
      let user = JSON.parse(localStorage.getItem('user'))
      this.name = user.name
    },
    openMenuUser: function (){
      this.statusMenuUser = !this.statusMenuUser
    },
    logout: function (){
      localStorage.removeItem('user')
      location.reload()
    }
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
  width: 100%;
  position: fixed;
  z-index: 2;
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

#btn-menu {
  width: 19px;
}

#menuUser{
  margin-top: 160px;
  background: #6959CD;
  width: 200px;
  position: fixed;
  padding: 5px 10px;
}

#menuUser ul li{
  padding: 5px;
}

#menuUser a{
  font-size: 15px;
}

#menuUser i{
  margin-right: 5px;
}

@media (min-width: 768px) {
  #icon-login {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

}

@media (min-width: 1024px) {
  nav {
    padding: 0;
  }

  #logo {
    width: 20%;
    font-size: 1em;
  }

  #btn-menu {
    display: none;
  }

  #group-login {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #icon-login {
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
