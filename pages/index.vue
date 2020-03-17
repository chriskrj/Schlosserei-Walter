<template>
  <div class="container">
    <h1>Herzlich Willkommen bei der Firma Walter Boike Schlosserei und Zerspanungstechnik</h1>
    <p><nuxt-link to="/ueber-uns">Über uns</nuxt-link></p>
    <p><nuxt-link to="/contact">Kontakt</nuxt-link></p>
  </div>
</template>

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

.container {
  padding: 60px;
  width: 100vw;
  height: 100vh;
  background: white;
}
.page-enter-active {
  animation: acrossIn .45s ease-out both;
} 

.page-leave-active {
  animation: acrossOut .65s ease-in both;
}

</style>

