<template>
  <v-card class="mx-auto" max-width="1000">
    <v-card-title>
      <v-text-field
        v-model="search"
        filled
        solo
        append-icon="mdi-magnify"
        label="Package search"
        clearable
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="arrPackages"
      hide-default-footer
      :page.sync="page"
      :items-per-page="itemsPerPage"
      @page-count="pageCount = $event"
      @click:row="choosePackage"
    ></v-data-table>
    <div class="text-center pt-2">
      <v-pagination
      v-model="page"
      :length="pageCount"
      :total-visible="7"
    ></v-pagination>
    </div>
    <Dialog :open="isOpen" :evClose="evClose" :pack="pack"/>
  </v-card>
</template>

<script>
  import { mapActions, mapMutations, mapState } from 'vuex'
  import Dialog from '@/components/Dialog.vue' 
  export default {
    data () {
      return {
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
          { text: 'Version', value: 'version' },
          { text: 'Date', value: 'date' },
        ],
        isOpen: false,
        pack: null,
      }
    },
    components: {
      Dialog
    },
    computed: {
      ...mapState(['arrPackages'])
    },
    methods: {
      ...mapActions(['GET_ARRAY_PACKAGES']),
      ...mapMutations(['CLEAR_PACKAGES_ARRAY']),
      choosePackage(item) {
        this.pack = item
        this.isOpen = true
      },
      evClose(val) {
        this.isOpen = val
      }
    },
    watch: {
      search(val) {
        if (val) {
          this.GET_ARRAY_PACKAGES(val)
        } else {
          this.CLEAR_PACKAGES_ARRAY()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>