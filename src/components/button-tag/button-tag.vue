<template>
  <div class="button-tag">
    <div class="fonction-group">
          <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
          <label class="btn function-btn btn-outline-primary" for="btnradio1">Play</label>

          <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
          <label class="btn function-btn btn-outline-primary" for="btnradio2">Share</label>

          <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
          <label class="btn function-btn btn-outline-primary" for="btnradio3">APP</label>

          <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
          <label class="btn function-btn btn-outline-primary" for="btnradio4">Watch Later</label>
        </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
  .function-btn {
    margin-right: 10px;
  
  }
</style>