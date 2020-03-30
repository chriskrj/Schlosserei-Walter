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
    <nuxt-link class="nav-link" to="/leistungen">Leistungen</nuxt-link>
    <nuxt-link class="nav-link" to="/karriere">Karriere</nuxt-link>
    <nuxt-link class="nav-link" to="/contact">Kontakt</nuxt-link>
  </div>
</nav>
</template>

<style lang="scss" scoped>
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
  height: auto;
  background-color: var(--main-bg-color);
  padding: 16px;
  display: flex;
  justify-content: flex-end;
  border-bottom-left-radius: 2vw;
  border-bottom-right-radius: 2vw;
}

.servicenav-link {
  color: white;
  margin-right: 1rem;

  &:hover {
    text-decoration: underline;
  }
}

.nav {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.nav-link {
  color: var(--main-headline-color);
  margin-right: 1rem;
  padding-bottom: 0.25em;

  &:hover {
    border-bottom: 1px solid currentColor;
  }

  &.is-open {
    border-bottom: 1px solid currentColor;
  }
}

</style>
