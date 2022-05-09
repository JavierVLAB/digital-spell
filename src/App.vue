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
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <v-img
                contain
                max-height="80%"
                max-width="100%"
                src="https://picsum.photos/id/11/500/300"
              ></v-img>

            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <sketch-test />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SketchTest from './components/SketchTest.vue';

export default {
  name: 'App',

  components: {
    SketchTest
  },

  data: () => ({

  })
};
</script>
