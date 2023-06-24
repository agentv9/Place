<template>
  <div class="wrapper">
    <canvas class="zoomables" id="zoomMe" style="border:3px solid var(--g2);background-color: rgb(15, 15, 15);">Your browser does not support the HTML5 canvas tag.</canvas>
  </div>
</template>

<script>
export default {
    name: "PlaceCanvas"
}
</script>

<style>
.wrapper {
    height: 100vh;
    width: 100%;
   
    z-index: 100;
    left: 0px;
    top: 0px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.zoomables {
            width: 75vh;
            height: 75vh;
        }
</style>