<template>
  <div class="u-container u-marginBottom--r2 u-marginTop--r2">
    <div class="u-limitWidth-12 u-align-center">
      <div class="GridCol2MainAside-row u-row">
        <div class="GridCol2MainAside-col-main u-col">
          <h1 class="Base-h1">Über uns</h1>
          <div class="MainContent">
            <p class="Base-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.              </p>
            <p class="Base-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eos optio! Vero, optio magni sapiente illo ea aut, dignissimos incidunt labore est ab sed quam, ipsa voluptatibus officia soluta voluptas.</p>
            <ul class="Base-ul">
              <li>Nulla consequat massa quis enim</li>
              <li>Nulla consequat massa quis enim</li>
              <li>Nulla consequat massa quis enim</li>
            </ul>
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
  }
}
</script>

<style scoped>
  .container {
    background: white;
  }
</style>
