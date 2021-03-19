<template>

  <div>

    <HeaderComponent/>
    <div class="pages">
      <SidebarComponent/>
      <slot name="slot-page"></slot>
    </div>

  </div>


</template>

<script>

import HeaderComponent from "@/components/PanelAdmin/HeaderComponent";
import SidebarComponent from "@/components/PanelAdmin/SidebarComponent";

export default {
  name: "Dashboard",
  components: {
    SidebarComponent,
    HeaderComponent
  }

}
</script>

<style scoped>

.pages{
  display: flex;
  flex-direction: row;
}
</style>
