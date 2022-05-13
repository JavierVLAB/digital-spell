<template>
  <div>
    <v-img
      height="250"
      :src="myImage"
    ></v-img>
    {{ image }}
    <v-btn
      color="deep-purple lighten-2"
      text
      @click="changeSource"
    >
      Reserve
    </v-btn>
    <!--
    <vue-p5
      @preload="preload"
      @setup="setup"
      @draw="draw">
    </vue-p5>-->
  </div>
</template>

<script>
//import VueP5 from "vue-p5";

let originalImage
//let modifiedImage

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
      spell += 'Que esta imagen venefice a todos los seres '
      console.log(spell)
      return this.image
    }
  },
  methods: {
    preload(sk) {
      originalImage = sk.createImage('https://cdn.vuetifyjs.com/images/cards/cooking.png');
      //originalImage = sk.loadImage('../assets/logo.png')//https://cdn.vuetifyjs.com/images/cards/cooking.png');
      originalImage.resize(400,300);
      //modifiedImage = sk.createImage(originalImage.width, originalImage.height);  
    },
    setup(sk) {
      sk.createCanvas(400, 300);
      sk.background(200);
      
      //if(originalImage.width > originalImage.height){
      //  imageIsLandscape = true;
      //}
      sk.image(originalImage,0,0)//, 400, 300,
        //0, 0, originalImage.width, originalImage.height);


      //modifiedImage = this.ppp(originalImage);

      //protection(originalImage,modifiedImage);
      //this.showImages(sk,originalImage,modifiedImage);  
      
    },
    draw(sk) {
      sk.noLoop()
      
    },
    showImages(sk,imgIN,imgOUT) {
      sk.image(imgIN,
        50, 150, 400, 300,
        0, 0, imgIN.width, imgIN.height);

      sk.image(imgOUT,
          550, 150, 400, 300,
          0, 0, imgOUT.width, imgOUT.height);
    },
    ppp(imgIN) {
      let spell = ''

      spell += 'Este pixel es limpiado de energía caotica, dañida y de la mala intención'
      spell += 'pero mantiene cualquier energía sana de los lugares, seres y obejtos presentes'
      spell += 'OM AH HUNG, para limpiar'
      spell += 'este pixel es activado magicamente para emanar buena energia'
      spell += 'reforzamos la buena energía, las buenas intenciones, los buenos deseos, el amor'
      spell += 'OM MANI PADME HUNG'
      spell += 'para el beneficio de todos los seres'
      console.log(spell)

      return imgIN;
    },
    changeSource(){

    }
  }
};
</script>