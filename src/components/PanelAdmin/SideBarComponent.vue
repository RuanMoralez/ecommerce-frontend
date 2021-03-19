<template>

  <nav>
    <sidebar-menu :menu="menu" />
  </nav>

</template>

<script>
export default {
  name: "SideBarComponent",
  data: function (){
    return{
      menu: [
        {
          href: '/admin',
          title: 'Dashboard',
          icon: 'fa fa-user'
        },
        {
          href: '/',
          title: 'E-commerce',
          icon: 'fas fa-store'
        },
        {
          title: 'Tema',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: '/admin/tema-cor',
              title: 'Cor'
            },
            {
              href: '/admin/tema-banner',
              title: 'Banner'
            }
          ]
        }
      ]
    }
  },
  mounted() {

  },
  methods:{
    openSubMenu: function (){
      this.$refs.subMenu.style.display="flex"
    }
  }
}
</script>

<style scoped>
nav {
  height: calc(100vh - 60px);
  float: left;
}

.section {
  margin-top: 30px;
  padding:20px 0;
  flex-direction: column;
}

.v-sidebar-menu {
  position: relative;
  height: calc(100vh - 60px);
  width: 250px;
}
</style>
