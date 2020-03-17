<template>
    <ul class="MetaNavigation">
        <li><nuxt-link class="MetaNavigation-link" to="/impressum">Impressum</nuxt-link></li>
        <li><nuxt-link class="MetaNavigation-link" to="/datenschutz">Datenschutz</nuxt-link></li>
    </ul>
</template>
<style scoped>
.MetaNavigation {
    display: flex;
    list-style: none;
    
}

.MetaNavigation-link {
    color: white;
}

.MetaNavigation-link::before {
    content: "";

}
</style>