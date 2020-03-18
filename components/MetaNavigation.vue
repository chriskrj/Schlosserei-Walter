<template>
    <ul class="MetaNavigation">
        <li><nuxt-link class="MetaNavigation-link" to="/impressum">Impressum</nuxt-link></li>
        <li><nuxt-link class="MetaNavigation-link" to="/datenschutz">Datenschutz</nuxt-link></li>
    </ul>
</template>
<style lang="scss" scoped>
.MetaNavigation {
  display: flex;
  list-style: none;
}

.MetaNavigation-link {
  color: white;

  &::before {
    content: "";
    display: inline-block;
    font-family: "iconfont";
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    vertical-align: middle;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 1em;
    color: white;
    margin-right: 0.33em;
    margin-bottom: 0;
    white-space: nowrap;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
