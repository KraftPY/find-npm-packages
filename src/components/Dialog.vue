<template>
  <div class="text-center">
    <v-dialog
      v-model="isOpen"
      width="500"
    >
      <v-card v-if="pack">
        <v-card-title class="headline grey lighten-2">
          {{ `Package name: ${pack.name}` }}
        </v-card-title>

          <v-container>
            <v-row no-gutters v-for="( value, name, index) in pack" :key="index">
              <template>
                <v-col cols="3">
                  <v-card
                    class="pa-2"
                    outlined
                    tile
                  >
                    <strong>{{formatName(name)}}</strong>
                  </v-card>
                </v-col>
                <v-col cols="9">
                  <v-card
                    class="pa-2"
                    outlined
                    tile
                    v-html="formatValue(name, value)"
                  >
                  </v-card>
                </v-col>
              </template>
            </v-row>

          </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="isOpen = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    props: {
      open: Boolean,
      evClose: Function,
      pack: Object
    },
    methods: {
      formatName(name) {
        return `${name[0].toUpperCase() + name.slice(1)}:`
      },
      formatValue(name, value) {
        let tempMaintainers = null
        switch (true) {
          case name === 'keywords':
            return value.join(', ')
          case name === 'links':
            return Object.entries(value)
                    .map( (el, i) => `${i+1}. ${el[0]}: <a href="${el[1]}" target="_blank">${el[1]}</a>`)
                    .join(';<br>')
          case name === 'author':
            return Object.entries(value)
                    .map( el => `${el[0]}: ${el[1]}`)
                    .join(';<br>')
          case name === 'publisher':
            return Object.entries(value)
                    .map( el => `${el[0]}: ${el[1]}`)
                    .join(';<br>')
          case name === 'maintainers':
            tempMaintainers = Object.entries(value).map( el => el[1])
            return tempMaintainers.map( el => Object.entries(el).map( secEl => `${secEl[0]}: ${secEl[1]}`).join(';<br>')).join(';<br><hr>')
          default:
            return value
        }
      }
    },
    computed: {
      isOpen: {
        get: function () {
            return this.open
        },
        set: function (val) {
          this.evClose(val)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>