<template>
  <div @click="$router.push({name:'entry',params: {id:10}})" class="entry-container mb-3 pointer p-2">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">16</span>
      <span class="mx-1 fw-light">Julio</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magnam iste iure vel sequi enim, praesentium natus aut neque ad fugiat atque officiis dolorem doloribus quod veniam dolor tenetur pariatur.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition:0.2s all ease-in;

  &:hover{
    background-color: lighten($color: grey, $amount: 45) ;
    transition: 0.2s all ease-in;
  }
  .entry-description{
    font-size: 12px;
  }
}
</style>