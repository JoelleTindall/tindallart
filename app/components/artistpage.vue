<template>
  <div class="relative h-full overflow-hidden flex flex-col">
    <!-- Stack container -->
    <div class="relative flex-1 overflow-hidden">
      <!-- Artist Statement (base layer) -->
      <div class="h-full w-full">
        <Artiststatement :for="for" />
      </div>

      <!-- Gallery (slides over) -->
      <div
        class="absolute inset-0 bg-white z-20 transition-transform duration-500 ease-in-out"
        :class="showGallery ? 'translate-y-0' : '-translate-y-full'"
      >
        <Swipergallery :for="for" />
      </div>
    </div>

    <!-- Toggle button -->
    <button
      @click="toggleGallery"
      class="border-b-1 rounded-2xl text-3xl bg-none w-full py-5 z-30 relative"
    >
      {{ showGallery ? 'Hide Gallery' : 'View Gallery' }}
    </button>
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
