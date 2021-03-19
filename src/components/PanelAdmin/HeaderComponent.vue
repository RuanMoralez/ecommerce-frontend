<template>
  <nav>
    <h3>
      <router-link to="/admin">Painel Admin</router-link>
    </h3>
  </nav>

</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped>
nav {
  width: 100%;
  height: 60px;
  background-color: #000;
  display: flex;
  align-items: center;
}

nav h3 {
  margin-left: 30px;
}

nav a {
  color: white;
}

</style>
