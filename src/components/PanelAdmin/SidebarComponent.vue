<template>
  <div class="section">
    <sidebar-menu :menu="menu"/>
  </div>
</template>

<script>

export default {
  name: "SidebarComponent",
  components: {},
  data: function () {
    return {
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
            },
          ],
        }
      ]
    }
  }
}
</script>

<style scoped>

.section{
  float: left;
}

.v-sidebar-menu {
  position: relative;
  height: calc(100vh - 60px);
  width: 220px;
}
</style>
