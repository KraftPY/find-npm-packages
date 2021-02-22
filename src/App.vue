<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <Table />
      </v-container>
    </v-main>
    <v-footer app>
      <h1>footer there</h1>
    </v-footer>
  </v-app>
</template>

<script>
// import AppBar from './components/AppBar.vue'
import Table from './components/Table.vue'

export default {
  name: 'App',

  components: {
    // AppBar,
    Table
  },

  data: () => ({
    //
  }),
};
</script>
