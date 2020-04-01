<template>
  <div class="TeaserButton-container">
    <div class="TeaserButton">
      <h3 class="Base-h3">{{headline}}</h3>
    </div>
  </div>
</template>
<script>
export default {
  props: ['headline']
}
</script>
<style lang="scss" scoped>
  .TeaserButton-container {
    position: relative;
    background-color: gray;
    border-radius: 8px;
    width: 100%;
    height: auto;
  }

  .TeaserButton {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: calc(16px + 2vw);
  }
</style>
