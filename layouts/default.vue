<template>
  <div>
    <header class="SectionHeader">
      <div class="SectionHeader-container u-limitWidth-12 u-align-center">
        <div class="SectionHeader-logo">
          <nuxt-link class="Logo" exact to="/">
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

