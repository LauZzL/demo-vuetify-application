<template>
  <v-footer padless>
    <v-col
        class="text-center"
        cols="12"
    >
      Copyright @ 2022-{{ new Date().getFullYear() }} <strong>Vuetify Application Demo.</strong> All Rights Reserved
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "footerComponents",
}
</script>

<style scoped>
footer {
  width: 100%;
}
</style>