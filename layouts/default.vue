<template>
  <div>
    <header class="SectionHeader">
      <div class="SectionHeader-container">
        <div class="SectionHeader-logo">
          <nuxt-link class="nav-link" exact to="/">
            <img class="logo-lg" src="~/assets/Images/logo-blau.svg" />
          </nuxt-link>
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

