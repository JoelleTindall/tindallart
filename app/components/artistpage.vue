<template>

  <div class="h-full bg-strawb">
        <div class="flex items-center justify-center text-balance bg-strawb">
          <div class=" py-10 w-full h-full ">
            <h1 class="text-center text-6xl lg:text-8xl lg:pt-12 p-5 uppercase">WORKS BY {{ artist }} TINDALL</h1>
          </div>
        </div>
    <Artiststatement :artist="artist"></Artiststatement>
    <arts :artist="artist"></arts>
    <Affiliates :artist="artist"/>
  </div>

</template>

<script setup lang="ts">
const showGallery = ref(false);

const props = withDefaults(defineProps<{ artist: string }>(), {
  artist: 'karen',
});

function toggleGallery() {
  showGallery.value = !showGallery.value;
}
</script>
