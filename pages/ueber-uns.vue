<template>
  <div class="container">
    <h1>This is the Über uns Page</h1>
    <p><nuxt-link to="/">Startseite</nuxt-link></p>
  </div>
</template>

<script>
export default {
  transition: 'fadeOpacity'
}
</script>

<style scoped>
  .container {
    background: white;
  }
</style>