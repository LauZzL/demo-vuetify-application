<template>
  <div>
    <v-app >

      <v-app-bar app clipped-left width="100%">
        <header-components />
      </v-app-bar>

      <v-navigation-drawer app clipped fixed permanent width="200">
        <aside-components />
      </v-navigation-drawer>

      <!-- 根据应用组件来调整你的内容 -->
      <v-main>

        <!-- 给应用提供合适的间距 -->
        <v-container fluid>
          <!-- 如果使用 vue-router -->
          <router-view ></router-view>
        </v-container>
      </v-main>

      <v-footer app height="40">
        <footer-components />
      </v-footer>
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src

import FooterComponents from "../components/footerComponents";
import AsideComponents from "../components/asideComponents";
import HeaderComponents from "../components/headerComponents";
export default {
  name: 'Home',
  components: {
    HeaderComponents,
    AsideComponents,
    FooterComponents

  }
}
</script>
<style>
.col {
  padding: 0;
}

</style>
