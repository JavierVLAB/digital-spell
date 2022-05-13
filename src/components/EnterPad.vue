<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="source"
    ></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>
          <v-file-input
            accept="image/png, image/jpeg, image/bmp"

            prepend-icon="mdi-camera"
            label="Imagen"
            @change="test"
          ></v-file-input>
          <v-btn
            color="deep-purple lighten-2"
            text
            @click="$emit('image','https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg')"
          >
            Reserve
          </v-btn>
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-card-actions>

      <v-btn
        color="deep-purple lighten-2"
        text
        @click="$emit('image','https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg')"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
      source: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
    }),
    computed: {

    },
    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      changeSource () {
        this.source = 'https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg'
      },
      sendImage () {
        this.$emit("image",this.source)
      },
      test (e) {
        this.source= URL.createObjectURL(e)
        console.log(this.source)
      }
    }
  }
</script>