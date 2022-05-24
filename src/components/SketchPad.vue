<template>
  <div>
    <v-img
      contain
      max-width="100%"
      :src="myImage"
    ></v-img>
    <v-btn
      color="primary lighten-2"
      text
      @click="newTabImage"
    >
      <a color="deep-purple lighten-2" style="text-decoration: none" :href="myImage" download>Descargar</a>
    </v-btn>

  </div>
</template>

<script>
export default {
  name: "p5-example",
  props: {
    image: {
      type: String,
      default: ''
    }
  },
  components: {
    //VueP5
  },
  data: () => ({

  }),
  computed: {
    myImage() {
      let spell = ''

      spell += 'Esta imagen es limpiada de energía caotica, dañida y cualquier mala intención '
      spell += 'pero mantiene cualquier energía sana, limpia y amorosa de los lugares, seres y obejtos presentes '
      spell += 'con OM AH HUNG limpiamos esta imagen '
      spell += 'Este imagen es activada magicamente para emanar buena energía '
      spell += 'reforzamos la buena energía, las buenas intenciones, los buenos deseos, el amor '
      spell += 'OM MANI PADME HUNG '
      spell += 'Que esta imagen Beneficie a todos los seres '
      console.log(spell)
      return this.image
    }
  },
  methods: {
    newTabImage() {
      var link = document.createElement("a");
      link.download = this.myImage;
      //link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");//image.src; //canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); //image.src; // "canvasCtx"
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};
</script>