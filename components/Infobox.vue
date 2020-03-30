<template>
  <div class="Infobox-container">
    <div class="Infobox">
      <h3 class="Base-h3">Unsere Öffnungfszeiten</h3>
      <div class="Infobox-content">
        <p><strong>Montags - Donnerstags</strong></p>
        <p>Werkstatt: 07:00 Uhr - 15:45 Uhr<br/>
        Büro: 08:00 Uhr - 15:45 Uhr</p>
        <p><strong>Freitags</strong></p>
        <p>Werkstatt: 07:00 Uhr - 13:15 Uhr<br/>
        Büro: 08:00 Uhr - 13:15 Uhr</p>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .Infobox-container {
    background-color: --var(--main-bg-color);
    border-radius: 8px;
  }

  .Infobox {
    padding: calc($susy-gutter-grid * 2vw);
  }
</style>
