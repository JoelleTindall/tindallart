<template>

  <div class="h-full bg-choco">
    <!-- <banner height="20px"></banner> -->
<!-- <banner height="100%" src="images/dana/Orange_Popsicle_2024_Mixed_media_18x7x4.jpeg"> -->
  
        <div class="flex items-center justify-center text-balance  bg-strawb">
          <div class=" py-10 w-full h-full ">
            <h1 class="text-center text-6xl lg:text-8xl p-5 uppercase">THE ART OF {{ for }} TINDALL</h1>
          </div>
        </div>
  
<!-- </banner> -->
    <Artiststatement :for="for"></Artiststatement>

    <arts :for="for"></arts>
    <Affiliates :for="for"/>
  </div>

</template>

<script setup lang="ts">
const showGallery = ref(false);

const props = withDefaults(defineProps<{ for: string }>(), {
  for: 'karen',
});

function toggleGallery() {
  showGallery.value = !showGallery.value;
}
</script>
