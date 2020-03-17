<template>
<div class="SectionFooter-container">
    <div class="SectionFooter-logo">
        <img src="~/assets/logo-white.svg" alt="Logo" width="100" height="100c">
    </div>
    <MetaNavigation />
     <p class="copyright">© 2020 Schlosserei Boike</p>
</div>
</template>
<script>
import MetaNavigation from '~/components/MetaNavigation.vue'

export default {
  components: {
    MetaNavigation
  }
}
</script>
<style scoped>
.SectionFooter-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--main-bg-color);
    margin-top: 1vw;
    padding: 2rem;
}

.copyright {
    color: white;
}
</style>