<template>
  <div>
    <header class="SectionHeader"> 
      <div class="SectionHeader-container">
        <img class="logo-lg" src="~/assets/logo-blau.png" width="418" />
        <Navigation />
      </div>
    </header>

    <HeroImage />
    <nuxt/>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import HeroImage from '~/components/HeroImage.vue'

export default {
  components: {
    Navigation,
    HeroImage
  }
}
</script>
<style>
html, body {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  background: white;
  color: #353535;
  width: 100vw;
  height: 100vh;
}

a, a:visited {
  color: #3edada;
  text-decoration: none;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
.SectionHeader {
  position: relative;
}

.SectionHeader-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.fadeOpacity-enter-active, .fadeOpacity-leave-active {
  transition: opacity .35s ease-out;
}

.fadeOpacity-enter, .fadeOpacity-leave-active {
  opacity: 0;
}
</style>

