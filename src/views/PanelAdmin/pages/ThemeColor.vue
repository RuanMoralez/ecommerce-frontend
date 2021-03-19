<template>
  <Dashboard>

    <div slot="slot-page" class="content">

      <h2>Personalizar: Cor</h2>

      <div class="section">

        <div class="group-color">
          <label for="favcolor">Altere a cor desejada: </label>
          <input type="color" id="favcolor" name="favcolor" v-model="color">
        </div>

        <button @click.stop.prevent v-on:click="changeColor()">Salvar</button>

      </div>

    </div>

  </Dashboard>
</template>

<script>
import Dashboard from "@/views/PanelAdmin/Dashboard";

export default {
  name: "ThemeColor",
  components: {
    Dashboard
  },
  data: function (){
    return{
      color: '#000000'
    }
  },
  methods:{
    changeColor: function (){
      localStorage.setItem('color', this.color)
      alert('Cor: '+ this.color+ ', Salvo.')
    }
  }
}
</script>

<style scoped>

.section button {
  padding: 10px 20px;
  border: 0;
  border-radius: 3px;
  background-color: black;
  margin-top: 20px;
  color: #fff;
}

</style>
