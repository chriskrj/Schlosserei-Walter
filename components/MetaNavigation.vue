<template>
    <ul class="MetaNavigation">
        <li class="MetaNavigation-item"><nuxt-link class="MetaNavigation-link" to="/impressum">Impressum</nuxt-link></li>
        <li class="MetaNavigation-item"><nuxt-link class="MetaNavigation-link" to="/datenschutz">Datenschutz</nuxt-link></li>
    </ul>
</template>
<style lang="scss" scoped>
.MetaNavigation {
  display: flex;
  list-style: none;
}

.MetaNavigation-item {
  &:last-child {
    margin-left: 16px;
  }
}

.MetaNavigation-link {
  color: white;
}
</style>
