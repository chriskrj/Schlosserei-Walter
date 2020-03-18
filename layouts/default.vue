<template>
  <div>
    <header class="SectionHeader"> 
      <div class="SectionHeader-container">
        <div class="SectionHeader-logo">
          <img class="logo-lg" src="~/assets/logo-blau.svg" />
        </div>
        <Navigation />
      </div>
    </header>

    <HeroImage />
    <nuxt/>

    <Footer />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import HeroImage from '~/components/HeroImage.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navigation,
    HeroImage,
    Footer
  }
}
</script>
<style>
:root {
  --main-headline-color: #003996;
  --main-bg-color: #003996;
  --main-text-color: #353535;
}
html, body {
  font-family: "Roboto", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  background: white;
  color: #353535;
  width: 100vw;
  height: 100vh;
  font-size: 18px;
}

a, a:visited {
  color: var(--main-text-color);
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
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
}

.SectionHeader-logo {
  width: 50%;
  padding: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.logo-lg {
  width: 100%;
}

.fadeOpacity-enter-active, .fadeOpacity-leave-active {
  transition: opacity .35s ease-out;
}

.fadeOpacity-enter, .fadeOpacity-leave-active {
  opacity: 0;
}
</style>

