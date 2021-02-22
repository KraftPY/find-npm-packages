<template>
  <v-card class="mx-auto" max-width="1000">
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Package search"
        clearable
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      hide-default-footer
      :page.sync="page"
      :items-per-page="itemsPerPage"
      @page-count="pageCount = $event"
      :loading="isLoad"
      loading-text="Loading... Please wait"
    ></v-data-table>
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>
    </div>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        isLoad: false,
        search: '',
        page: 1,
        pageCount: 0,
        itemsPerPage: 10,
        headers: [
          {
            text: 'Package name',
            align: 'start',
            value: 'name',
          },
          { text: 'Type', value: 'type' },
          { text: 'Hits', value: 'hits' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            type: 'npm',
            hits: 1646499797979,
          },
          {
            name: 'Ice cream sandwich',
            type: 'npm',
            hits: 6944512132,
          },
          {
            name: 'Eclair',
            type: 'git',
            hits: 153454435345,
          },
          {
            name: 'Cupcake',
            type: 'npm',
            hits: 26464664161,
          },
          {
            name: 'Gingerbread',
            type: 'git',
            hits: 55646311213465, 
          },
          // {
          //   name: 'Jelly bean',

          // },
          // {
          //   name: 'Lollipop',

          // },
          // {
          //   name: 'Honeycomb',

          // },
          // {
          //   name: 'Donut',

          // },
          // {
          //   name: 'KitKat',

          // },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>