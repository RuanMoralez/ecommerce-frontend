<template>
  <div>
    <div id="nav">
      <h2>Admin - Ecommerce</h2>
    </div>

    <div id="container">

      <div id="login">
        <form @submit.prevent="login">
          <label>E-mail</label><br>
          <input type="email" name="email" placeholder="Ex. exemplo@exemplo.com"><br>
          <label>Senha</label><br>
          <input type="password" name="password" placeholder="Senha"><br>
          <button>Entrar</button>
        </form>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "LoginComponent"
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