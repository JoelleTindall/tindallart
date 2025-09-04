<template>

  <div class="h-full bg-choco">
    <!-- <banner height="20px"></banner> -->
    <div class=" flex items-center justify-center text-balance py-10 bg-strawb">
      <h1 class="text-center text-6xl p-5 uppercase">THE ART OF {{ for }} TINDALL</h1>
    </div>
    <Artiststatement :for="for"></Artiststatement>

    <arts for="dana"></arts>
  </div>
  <!-- <div class="relative h-full overflow-hidden flex flex-col"> -->
  <!-- Stack container -->
  <!-- <div class="relative flex-1 overflow-hidden"> -->
  <!-- Artist Statement (base layer) -->


  <!-- Gallery (slides over) -->
  <!-- <div
        class=" h-full w-full bg-white"
       
      >
        <Swipergallery :for="for" />
      </div>
            <div class="border-2 border-amber-700 h-full w-full absolute inset-0 bg-white z-20 transition-transform duration-500 ease-in-out"
            :class="showGallery ? 'translate-y-0' : '-translate-y-full'">
            <Navbar/> -->
  <!-- <Artiststatement :for="for" />
      </div>
    </div> -->

  <!-- Toggle button -->
  <!-- <button
      @click="toggleGallery"
      class=" rounded-2xl text-3xl bg-none w-full py-5 z-30 relative"
    >
      {{ showGallery ? 'Hide Gallery' : 'View Gallery' }}
    </button>
  </div> -->
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
