<template>
  <div>

    <div id="container">
      <div id="content">
        <div class="box login" v-bind:style="{backgroundColor: loginBackground}">
          <h3 v-bind:style="{color: loginTextColor}">Login do cliente</h3>

          <!-- <form @submit.prevent="login">
            <label v-bind:style="{color: loginTextColor}">E-mail</label><br>
            <input v-model="user.email" type="email" name="email" placeholder="Ex. exemplo@exemplo.com"><br>
            <label v-bind:style="{color: loginTextColor}">Senha</label><br>
            <input v-model="user.password" type="password" name="password" placeholder="Senha"><br>
            <button v-bind:style="{backgroundColor: loginBackgroundButton, color: loginTextButton}">Entrar</button>
          </form> -->
          
          <!-- form -->
          <q-form @submit.prevent="login" class="q-gutter-md">
            <div class="row q-col-gutter-mg" style="max-width: 300px">
              <!-- email -->
              <q-input dark outlined :dense="dense" placeholder="exemplo@exemplo.com.br" class="col-sm-12"
                v-model="user.email"
                @blur="$v.user.email.$touch"
                @keyup.enter="submit"
                :error="$v.user.email.$error"
                error-message="E-mail invalido"
              />
              <!-- password -->
              <q-input dark outlined :dense="dense" placeholder="senha" :type="isPwd1 ? 'password' : 'text'"
                class="col-sm-12"

                v-model="user.password"
                @blur="$v.user.password.$touch"
                @keyup.enter="submit"
                :error="$v.user.password.$error"
                error-message="Mínimo 4 caracteres, senha invalida!"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd1 ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd1 = !isPwd1"
                  />
                </template>
              </q-input>

              <q-btn label="Entrar" type="submit" color="white" text-color="black" />
            </div>
            <!-- progress -->
            <div class="flex flex-center" style="height:30px;">
              <q-circular-progress
                v-bind:style="{ display: progress2 }"
                indeterminate
                size="30px"
                color="white"
                class="q-ma-md"
              />
            </div>
          </q-form>
        </div>

        <div class="box register">
          <!-- close button -->
          <div id="close"><q-icon name="close" style="font-size: 32px;cursor:pointer;" class="close" v-on:click="this.closeLoginAndRegister" /></div>
          
 
          <!-- <h4>Cadastre-se</h4> -->

          <!-- <form @submit.prevent="handleSubmit">
            <label>Primeiro Nome</label><br>
            <input v-model="registerUser.name" type="text" name="firstName" placeholder="Ex. Joao"><br>
            <label>último Nome</label><br>
            <input v-model="registerUser.lastName" type="text" name="lastName" placeholder="Ex. Silva"><br>
            <label>E-mail</label><br>
            <input v-model="registerUser.email" type="email" name="email" placeholder="Ex. exemplo@exemplo.com.br"><br>
            <label>Senha</label><br>
            <input v-model="registerUser.password" type="password" name="password" placeholder="Senha"><br>
            <label>Confirmar senha</label><br>
            <input v-model="registerUser.passwordConfirmation" type="password" name="passwordConfirmation" placeholder="Confirmar senha"><br>

            <button>Continuar</button>
          </form> -->
          
              
              <h4 style="margin-bottom:40px;">Cadastre-se</h4>
    
              <!-- form -->
              <q-form @submit.prevent="handleSubmit" class="q-gutter-md">
                <div class="row q-col-gutter-mg" style="max-width: 300px">

                  <!-- name -->
                  <q-input outlined v-model="registerUser.name" :dense="dense" placeholder="nome" class="col-sm-12"
                    :rules="[val => !!val || '* Obrigatório']"
                    lazy-rules
                  />

                  <!-- surname -->
                  <q-input outlined v-model="registerUser.lastName" :dense="dense" placeholder="sobre nome" class="col-sm-12"
                    :rules="[val => !!val || '* Obrigatório']"
                    lazy-rules
                  />

                  <!-- email -->
                  <q-input outlined :dense="dense" placeholder="exemplo@exemplo.com.br" class="col-sm-12"
                    v-model="registerUser.email"
                    @blur="$v.registerUser.email.$touch"
                    @keyup.enter="submit"
                    :error="$v.registerUser.email.$error"
                    error-message="E-mail invalido"
                  />

                  <!-- password -->
                  <q-input outlined :dense="dense" placeholder="senha" :type="isPwd2 ? 'password' : 'text'"
                    class="col-sm-12"

                    v-model="registerUser.password"
                    @blur="$v.registerUser.password.$touch"
                    @keyup.enter="submit"
                    :error="$v.registerUser.password.$error"
                    error-message="Senha invalida ou as senhas não conferem"
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd2 ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd2 = !isPwd2"
                      />
                    </template>
                  </q-input>

                  <!-- password confirmation -->
                  <q-input outlined :dense="dense" placeholder="confirmar senha" :type="isPwd2 ? 'password' : 'text'"
                    class="col-sm-12"

                    v-model="registerUser.passwordConfirmation"
                    @blur="$v.registerUser.passwordConfirmation.$touch"
                    @keyup.enter="submit"
                    :error="$v.registerUser.passwordConfirmation.$error"
                    error-message="Senha invalida ou as senhas não conferem"

                    :rules="[
                      val => !!val || '* Required'
                    ]"
                    lazy-rules
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd2 ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd2 = !isPwd2"
                      />
                    </template>
                  </q-input>
                  <q-btn label="Continuar" type="submit" color="dark" />
                  
                </div>

                <!-- progress -->
                <div class="flex flex-center">
                  <q-circular-progress
                    v-bind:style="{ display: progress }"
                    indeterminate
                    size="30px"
                    color="black"
                    class="q-ma-md"
                  />
                </div>
              </q-form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>


import axios from 'axios'

import { required, sameAs, minLength, email  } from 'vuelidate/lib/validators'

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
      
      dense: true,
      isPwd1: true,
      isPwd2: true,

      progress: 'none', 
      progress2: 'none',
      user:{
        email: '',
        password: '',
      },

      //register user
      registerUser: {
        name: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      }
      

    }
  },

  //validations with vuelidate
  validations: {
    registerUser: {
      email: { required, email },
      password: { required, minLength: minLength(4) },
      passwordConfirmation: { required, sameAsemail2: sameAs('password'), minLength: minLength(4) }
    },
    user: {
      email: { required, email },
      password: { required, minLength: minLength(4) },
    }
  },

  mounted() {
    this.changeLoginAndRegister()
    // Users.listar().then(resposta => {
    //   console.log(resposta.data)
    //   this.users = resposta.data
    // })
  },

  methods:{

    //Chage Color and Background this LoginAndRegister
    changeLoginAndRegister:function(){
      this.loginTextColor = this.white
      this.loginTextButton = this.white
      this.loginBackground = this.black
      this.loginBackgroundButton = this.white
      this.loginTextButton = this.black
      document.body.className = 'block';
    },

    //Close component LoginAndRegister
    closeLoginAndRegister: function(){
      document.body.className = 'def';
      this.$emit('closeLoginAndRegister')
    },

    //Authentication User
    // async login(){
    //   const response = await axios.post('http://127.0.0.1:8000/api/auth/login', this.user)
    //   //localStorage.setItem('token', response.data.token);
    //   localStorage.setItem('user', JSON.stringify(response.data.user))
    //   location.reload()

    //   //localStorage.setItem('user', response.data.user)
    //   //const user = JSON.parse(localStorage.getItem('user'));
    //   //console.log(user.id)

    // },

    async login(){
      this.progress2 = 'flex'

      try{
        const response = await axios.post('http://127.0.0.1:8000/api/auth/login', this.user)
        //localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user))

        this.progress2 = 'none'

        this.$q.notify({
          color: 'green-6',
          textColor: 'white',
          icon: 'done',
          message: 'Bem vindo! '
        })

        location.reload()

        //localStorage.setItem('user', response.data.user)
        //const user = JSON.parse(localStorage.getItem('user'));
        //console.log(user.id)

        

      } catch (e) {
        this.progress2 = 'none'

        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'E-mail ou senha invalidos!'
        })    
      }
    },

    //register user 1
  //   async handleSubmit() {
  //     const response = await axios.post('register', {
  //       name: this.registerUser.name,
  //       last_name: this.registerUser.lastName,
  //       email: this.registerUser.email,
  //       password: this.registerUser.password,
  //       password_confirmation: this.registerUser.passwordConfirmation
  //     });
        
  //     console.log(response);
  //   }
  // }

    //register user 3
    async handleSubmit() {
      this.progress = 'flex'

     try {
       const response = await axios.post('register', {
        name: this.registerUser.name,
        last_name: this.registerUser.lastName,
        email: this.registerUser.email,
        password: this.registerUser.password,
        password_confirmation: this.registerUser.passwordConfirmation
      });

      this.progress = 'none'

      this.$q.notify({
        color: 'green-6',
        textColor: 'white',
        icon: 'done',
        message: 'Usuário cadastrado com sucesso!'
      })

      console.log(response);
     } catch (e) {

        this.progress = 'none'

        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Ocorreu um erro. O usuário não foi cadastrado!'
        })      

     }
    },

    // register user 2
    // async handleSubmit() {
    //   const data = {
    //     name: this.registerUser.name,
    //     last_name: this.registerUser.lastName,
    //     email: this.registerUser.email,
    //     password: this.registerUser.password,
    //     password_confirmation: this.registerUser.passwordConfirmation
    //   };

    //   console.log(data);
    // }

  }


  

}
</script>

<style scoped>

.close {
  transition: 0.8s;  
} .close:hover {
  opacity: 0.6;
  transition: 0.8s;
}


#container {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
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

/* .box button {
  height: 35px;
  width: 80px;
  background: black;
  color: #fff;
  border: 0;
  border-radius: 3px;
} */

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