<template>
  <div>
    <!-- <img class="moon" src="~/assets/FullMoon2010.png" /> -->
    <Navigation />
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
  background: #222;
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

.fadeOpacity-enter-active, .fadeOpacity-leave-active {
  transition: opacity .35s ease-out;
}

.fadeOpacity-enter, .fadeOpacity-leave-active {
  opacity: 0;
}
</style>

