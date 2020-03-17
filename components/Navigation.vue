<template>
<nav class="Navigation">
<div class="servicenav">
    <a class="servicenav-link" href="tel:+49431337598">0431 / 33 75 98</a>
    <a class="servicenav-link" href="tel:+49431337373">0431 / 33 73 73</a>
    <a class="servicenav-link" href="mailto:info@schlosserei-boike.de">info@schlosserei-boike.de</a>
</div>
  <div class="nav">
    <nuxt-link class="nav-link" exact to="/">Startseite</nuxt-link>
    <nuxt-link class="nav-link" to="/ueber-uns">Über uns</nuxt-link>
    <nuxt-link class="nav-link" to="/contact">Kontakt</nuxt-link>
  </div>
</nav>
</template>

<style scoped>
.Navigation {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-end;
    width: 50%;
}

.servicenav {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: var(--main-bg-color);
    padding: 16px;
    display: flex;
    justify-content:flex-end;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

.servicenav-link {
    color: white;
    margin-right: 1rem;
}

.nav {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 16px;
    display: flex;
    justify-content:flex-end;
}

.nav-link {
    color: var(--main-headline-color);
    margin-right: 1rem;
}

</style>