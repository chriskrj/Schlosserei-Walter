<template>
  <div class="u-container u-marginBottom--r2 u-marginTop--r2">
    <div class="u-limitWidth-12 u-align-center">
      <div class="GridCol2MainAside-row u-row">
        <div class="GridCol2MainAside-col-main u-col">
          <h1 class="Base-h1">Leistung  Kompetenz</h1>
          <div class="MainContent">
            <p class="Base-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>

            <ul class="Base-ul u-marginTop--r2 u-marginBottom--r2">
              <li>CNC Dreh- und Frästeile</li>
              <li>Schweißfachbetrieb nach ISO-3834, <br/>Zertifiziert nach DIN EN 1090 EXC 2  (bis S355 und CrNi-Stähle)</li>
              <li>Zertifizierter Fachbetrieb nach WHG</li>
              <li>Neuanfertigungen</li>
              <li>Reparaturen Instandhaltungen </li>
              <li>Konstruktionszeichnung, Werkplanung, Entwürfe</li>
            </ul>

            <h4 class="Base-h4">Unser Maschinenpark umfasst:</h4>
            <ul class="Base-ul u-marginTop--r2 u-marginBottom--r2">
              <li>3 Achs Fräszentrum (4 Stück)</li>
              <li>4 Achs Fräszentrum</li>
              <li>Drehbänke mit angetriebenen Werkzeugen und Y-Achse (3 Stück)</li>
              <li>Konventionelle Drehbank</li>
              <li>Konventionelle Fräse</li>
              <li>Fräse mit DIN Steuerung</li>
              <li>25 Tonnen Presse</li>
              <li>Blechschere</li>
              <li>Kantbank</li>
              <li>Schweißgeräte bis über 400 A</li>
              <li>LKW mit Kran</li>
            </ul>
            <!--<ImageSlider id="ImageSlider" :content="images"/>-->
          </div>
        </div>
        <div class="GridCol2MainAside-col-aside u-col">
          <Infobox/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Infobox from '~/components/Infobox.vue'

export default {
  transition: 'fadeOpacity',

  components: {
    Infobox
  },
  data() {
    return {
      images: [
      {
        id: 1,
        url: 'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg',
        alt: 'Image 1',
        description:"Ich bin eine BU"
      },
      {
        id: 2,
        url: 'https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg',
        alt: 'Image 2',
        description:"Ich bin eine BU 2"
      },
      ]
    }
  }
}
</script>

<style scoped>
  .container {
    background: white;
  }
</style>
