<template>
  <v-card
    :loading="loading"
    class="mx-auto"
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
      contain
      max-width="300"
      :src="source"
    ></v-img>

    <v-card-title class="py-2">Imagen de Entrada</v-card-title>

    <v-card-text>
        <v-file-input
          class="mt-1 pt-2"
          accept="image/png, image/jpeg, image/bmp"
          prepend-icon="mdi-camera"
          label="Imagen"
          @change="updateImageWithFile"
        ></v-file-input>
        <v-checkbox
          v-model="isCleaning"
          class="mt-0"
          label="Limpiar y Proteger"
          color="primary"
          hide-details
        ></v-checkbox>
        <v-textarea
          name="My Spell"
          class="mt-2 pt-4"
          label="Magía Personal"
          rows="1"
          auto-grow
          value=""
          hint="Escribe aquí tu magía personal"
        ></v-textarea>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="primary"
        text
        @click="$emit('image',source)"
      >
        Transformar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
      source: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      isCleaning: true
    }),
    computed: {

    },
    methods: {
      updateImageWithFile (e) {
        this.source= URL.createObjectURL(e)
        console.log(this.source)
      }
    }
  }
</script>