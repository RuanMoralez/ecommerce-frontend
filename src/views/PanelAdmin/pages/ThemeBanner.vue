<template>

  <Dashboard>
    <div slot="slot-page" class="content">
      <h2>Personalizar: Banner</h2>

      <ul>
        <li><a href="#" @click.stop.prevent v-on:click="changeBanner(1)">Banner1</a></li>
        <li><a href="#" @click.stop.prevent v-on:click="changeBanner(2)">Banner2</a></li>
        <li><a href="#" @click.stop.prevent v-on:click="changeBanner(3)">Banner3</a></li>
      </ul>

    </div>
  </Dashboard>

</template>

<script>
import Dashboard from "@/views/PanelAdmin/Dashboard";

export default {
  name: "ThemeBanner",
  components: {
    Dashboard
  },
  methods:{
    changeBanner: function (banner){
      localStorage.setItem('banner', banner)
      alert('Cor: '+ banner + ', Salvo.')
    }
  }
}
</script>

<style scoped>

ul li {
  padding: 8px 0;
  list-style: none;
}

ul li a {
  color: #6959CD;
}

</style>
