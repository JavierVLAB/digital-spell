<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      flat
    >

    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="4"
          >
          <enter-pad @image="image = $event"></enter-pad>

          </v-col>

          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <sketch-pad :image="image"></sketch-pad>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SketchPad from './components/SketchPad.vue'
import EnterPad from './components/EnterPad.vue'

export default {
  name: 'App',

  components: {
    SketchPad,
    EnterPad
  },

  data: () => ({
    image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
  })
};
</script>
