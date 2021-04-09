<template>
  <div>

    <div id="container">
      <div id="content">
        <div class="box login" v-bind:style="{backgroundColor: loginBackground}">
          <h3 v-bind:style="{color: loginTextColor}">Login do cliente</h3>

          <form @submit.prevent="login">
            <label v-bind:style="{color: loginTextColor}">E-mail</label><br>
            <input v-model="user.email" type="email" name="email" placeholder="Ex. exemplo@exemplo.com"><br>
            <label v-bind:style="{color: loginTextColor}">Senha</label><br>
            <input v-model="user.password" type="password" name="password" placeholder="Senha"><br>
            <button v-bind:style="{backgroundColor: loginBackgroundButton, color: loginTextButton}">Entrar</button>
          </form>

        </div>

        <div class="box register">

          <div id="close"><a v-on:click="this.closeLoginAndRegister">X</a></div>

          <h3>Cadastre-se</h3>

          <form>
            <label>Primeiro Nome</label><br>
            <input type="text" name="firstName" placeholder="Ex. Joao"><br>
            <label>último Nome</label><br>
            <input type="text" name="lastName" placeholder="Ex. Silva"><br>
            <label>E-mail</label><br>
            <input type="email" name="email" placeholder="Ex. exemplo@exemplo.com.br"><br>
            <label>Senha</label><br>
            <input type="password" name="password"><br>
            <button>Continuar</button>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: "LoginAndRegister",
  data: function (){
    return{
      black: 'black',
      white: 'white',
      loginTextColor: String,
      loginTextButton: String,
      loginBackgroundButton: String,
      loginBackground: String,
      registerTextColor: String,
      registerTextButton: String,
      registerBackgroundButton: String,
      registerBackground: String,

      user:{
        email: '',
        password: ''
      }
    }
  },

  mounted() {
    this.changeLoginAndRegister()
  },

  methods:{

    //Chage Color and Background this LoginAndRegister
    changeLoginAndRegister:function(){
      this.loginTextColor = this.white
      this.loginTextButton = this.white
      this.loginBackground = this.black
      this.loginBackgroundButton = this.white
      this.loginTextButton = this.black
    },

    //Close component LoginAndRegister
    closeLoginAndRegister: function(){
      this.$emit('closeLoginAndRegister')
    },

    //Authentication User
    async login(){

      const response = await axios.post('http://127.0.0.1:8000/api/auth/login', this.user)
      //localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user))
      location.reload()

      //localStorage.setItem('user', response.data.user)
      //const user = JSON.parse(localStorage.getItem('user'));
      //console.log(user.id)

    }

  }
}
</script>

<style scoped>

#container {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

#content {
  width: 80%;
  height: 600px;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
}

.box {
  width: 50%;
  border-right: 1px solid #ccc;
}

.box h3 {
  margin-bottom: 50px;
  font-size: 2em;
}

.box input {
  margin-bottom: 20px;
  height: 40px;
  padding: 5px;
  font-size: 16px;
  width: 300px;
  border: 1px solid #ccc;
}

.box button {
  height: 35px;
  width: 80px;
  background: black;
  color: #fff;
  border: 0;
  border-radius: 3px;
}

.login{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.register{
  display: flex;
  flex-direction: column;
  align-items: center;
}

#close{
  width: 100%;
  text-align: right;
  position: relative;
  margin-top: 20px;
  margin-right: 60px;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: lighter;
}

#close a {
  color: #000000;
}

</style>