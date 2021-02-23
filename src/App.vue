<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <Table />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
  import Table from './components/Table.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      Table,
      Footer,
    }
  }
</script>
