<template>
  <div class="u-container u-marginBottom--r2 u-marginTop--r2">
    <div class="u-limitWidth-12 u-align-center">
      <div class="GridCol2MainAside-row u-row">
        <div class="GridCol2MainAside-col-main u-col">
          <h1 class="Base-h1">Herzlich Willkommen bei der Firma Walter Boike Schlosserei und Zerspanungstechnik</h1>
          <div class="MainContent">
              <p class="Base-p">
                Die Firma Schlosserei Boike...
              </p>
              <p class="Base-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eos optio! Vero, optio magni sapiente illo ea aut, dignissimos incidunt labore est ab sed quam, ipsa voluptatibus officia soluta voluptas.</p>
          </div>
        </div>
        <div class="GridCol2MainAside-col-aside u-col">
          <Infobox/>
        </div>
      </div>
      <div class="GridCol3Even-row u-row">
        <div class="GridCol3Even-col u-col">
          <TeaserButton headline="Headline 1" />
        </div>
        <div class="GridCol3Even-col u-col">
          <TeaserButton headline="Headline 2" />
        </div>
        <div class="GridCol3Even-col u-col">
          <TeaserButton headline="Headline 3" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Infobox from '~/components/Infobox.vue'
import TeaserButton from '~/components/TeaserButton.vue'

export default {
  transition: 'fadeOpacity',

  components: {
    Infobox,
    TeaserButton
  }
}
</script>
