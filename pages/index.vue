<template>
  <div class="u-container">
    <div class="u-limitWidth-12 u-align-center">
      <div class="GridCol2MainAside-row u-row">
        <div class="GridCol2MainAside-col-main u-col">
          <h1>Herzlich Willkommen bei der Firma Walter Boike Schlosserei und Zerspanungstechnik</h1>
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
  }
}
</script>
