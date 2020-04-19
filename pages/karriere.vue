<template>
  <div class="u-container u-marginBottom--r2 u-marginTop--r2">
    <div class="u-limitWidth-12 u-align-center">
      <div class="GridCol2MainAside-row u-row">
        <div class="GridCol2MainAside-col-main u-col">
          <h1 class="Base-h1">Wir suchen Verstärkung für unser Team</h1>
          <div class="MainContent u-marginBottom--r2">
            <p class="Base-p">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            </p>
          </div>
          <Accordion id="jobs1" :content="jobContent" multiple />
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
import Accordion from '~/components/Accordion.vue'

const jobContent = [

]

export default {
  transition: 'fadeOpacity',

  components: {
    Infobox,
    Accordion
  },
  data() {
    return {
      jobContent: [
      {
        id: 1,
        active: false,
        title: 'Metallbauer Fachrichtung Konstruktionstechnik',
        start:'01.08.2020',
        time: '3,5 Jahre',
        skills: 'mindestens guter Hauptschulabschluss, handwerkliches Geschick',
        details: `
          <p class="Base-p">Come on, this is a Bluth family celebration. It's no place for children.</p>
        `
      },
      {
        id: 2,
        active: false,
        title: 'Zerspanungsmechaniker Fachrichtung Dreh- und Frästechnik',
        start:'01.08.2020',
        time: '3,5 Jahre',
        skills: 'sehr guter Hauptschulabschluss oder guter Realschulabschluss, gute Mathematikkenntnisse',
        details: `
          <p class="Base-p">Come on, this is a Bluth family celebration. It's no place for children.</p>
        `
      }
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
