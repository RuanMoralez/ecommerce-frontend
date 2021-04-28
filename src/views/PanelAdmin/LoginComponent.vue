<template>
  <div>
    <div id="nav">
      <h4>Admin - Ecommerce</h4>
    </div>

    <!-- <div id="container">

      <div id="login">
        <form @submit.prevent="login">
          <label>E-mail</label><br>
          <input type="email" name="email" placeholder="Ex. exemplo@exemplo.com"><br>
          <label>Senha</label><br>
          <input type="password" name="password" placeholder="Senha"><br>
          <button>Entrar</button>
        </form>
      </div>

    </div> -->

    <div id="container">
        <div class="col q-gutter-y-md" style="max-width: 350px;">
          <q-input outlined v-model="text1" :dense="dense"  placeholder="exemplo@exemplo.com" >
            <template v-slot:append>
              <q-icon v-if="text1 !== ''" @click="text1 = ''" name="close" class="cursor-pointer" />
              <q-icon name="mail" />
            </template>
          </q-input>

          <q-input outlined v-model="text2" :dense="dense"  placeholder="senha" :type="isPwd ? 'password' : 'text'"  >
            <template v-slot:append>
              <q-icon v-if="text2 !== ''" @click="text2 = ''" name="close" class="cursor-pointer" />
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          
          <div class="row items-center">
            <q-checkbox v-model="right" label="Lembrar senha" />
            
            <div class="col">
              <a href="#" class="float-right" style="color:black;">Alterar senha</a>
            </div>
              
            
          </div>
          

           <q-btn style="background: #6959CD; color: white" label="Entrar" no-caps />
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data () {
    return {
      text1:'',
      text2:'',
      isPwd: true,
      dense: true,
      right: false,
    }
  }
}
</script>

<style scoped>
#nav {
  height: 80px;
  background: #6959CD;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
}

#container {
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
}

#login input {
  height: 40px;
  width: 300px;
  margin-bottom: 20px;
  margin-top: 10px;
  padding-left: 10px;
  color: #4F4F4F;
  font-size: 0.9em;
}

#login button {
  border: 0;
  border-radius: 3px;
  background: #6959CD;
  height: 40px;
  width: 80px;
  color: #FFFFFF;
  font-size: 0.9em;
}

</style>