<template>
  <div class="Infobox-container Base-theme--dark">
    <div class="Infobox">
      <h3 class="Base-h3 u-textAlign--center">Unsere Öffnungfszeiten</h3>
      <div class="Infobox-content u-textAlign--center">
        <p class="Base-p"><strong>Montags - Donnerstags</strong></p>
        <p class="Base-p">Werkstatt: 07:00 Uhr - 15:45 Uhr<br/>
        Büro: 08:00 Uhr - 15:45 Uhr</p>
        <p class="Base-p"><strong>Freitags</strong></p>
        <p class="Base-p">Werkstatt: 07:00 Uhr - 13:15 Uhr<br/>
        Büro: 08:00 Uhr - 13:15 Uhr</p>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .Infobox-container {
    position: relative;
    background-color: var(--main-bg-color);
    border-radius: 8px;
    overflow: hidden;

    &::after {
      position: absolute;
      bottom: -25%;
      right: -10%;
      width: 100%;
      height: 100%;
      content: "";
      background-size: contain;
      background-image: url('../assets/Images/logo-white.svg');
      background-position: bottom right;
      background-repeat: no-repeat;
      opacity: 0.2;
    }
  }

  .Infobox {
    padding: calc(16px + 2vw);
  }
</style>
