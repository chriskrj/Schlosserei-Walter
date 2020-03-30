<template>
  <div class="u-container">
    <div class="u-limitWidth-12 u-align-center">
      <div class="GridColMain">
        <h1>Herzlich Willkommen bei der Firma Walter Boike Schlosserei und Zerspanungstechnik</h1>

      </div>
      <div class="GridColAside">
        <Infobox/>
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
