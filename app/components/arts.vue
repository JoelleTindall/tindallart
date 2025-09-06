<template>
  <div class=" bg-gradient-to-b from-choco to-strawb">
    <div class="flex flex-wrap pb-10 justify-center">

      <div class="flex flex-col m-2 p-2  min-h-fit lg:w-120 md:w-5/12 w-120 shadow-offblack/20 shadow-xl  bg-darkchoco "
        v-for="art in arts" :key="art.src">
        <div>
          <NuxtImg class=" shadow-md shadow-offblack/20 object-contain h-full w-full" :src="`images/dana/${art.src}`"
            :alt="art.name + art.description" />
        </div>
        <div class="pt-2">
          <p class="artdescription text-xl text-offwhite font-bold">{{ art.name }}</p>
          <p class="artdescription text-offwhite italic">{{ art.description }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtImg } from '#components';
import { ref, onMounted } from 'vue'

const props = withDefaults(defineProps<{
  for: string
}>(), {
  for: 'karen',
})

let allImages = {}
const images = ref<any[]>([])
let arts: any[] = []

switch (props.for) {
  case "dana":

    arts = [
      { src: '3 Corndogs!, 2025,  10” x 6.5” x 3.5” Mixed media.jpeg', name: '3 Corndogs!', description: '10” x 6.5” x 3.5” Mixed media' },
      { src: 'Big Fat Burger, 8.25” x 7” x 7” Mixed media.jpg', name: 'Big Fat Burger', description: '8.25” x 7” x 7” Mixed media' },
      { src: 'Bomb Pop, 2025, 18” x 5.5” x 5.5” Mixed media.jpg', name: 'Bomb Pop', description: '18” x 5.5” x 5.5” Mixed media' },
      { src: 'Breakfast Treat, 2025, 12” x 9 “ x 2.5” Mixed media.jpg', name: 'Breakfast Treat', description: '12” x 9 “ x 2.5” Mixed media' },
      { src: 'Corndog with Mustard, 2025, approx 10” x 4” x 4” Mixed media.jpg', name: 'Corndog with Mustard', description: 'approx 10” x 4” x 4” Mixed media' },
      { src: 'Dreamsicle, 2025, 16” x 5.5”x 2.5” Mixed media.jpg', name: 'Dreamsicle', description: '16” x 5.5”x 2.5” Mixed media' },
      { src: 'Everything Bagel with Lox, Onions and Capers, 2025, 10” x 8” x 3.5” Mixed media.jpeg', name: 'Everything Bagel w/ Lox, Onions, and Capers', description: '10” x 8” x 3.5” Mixed media' },
      { src: 'Orange_Popsicle_2024_Mixed_media_18x7x4.jpeg', name: 'Orange Popsicle', description: 'Mixed_media_18x7x4' },
      { src: 'Pancakes, 2025,  10”x 9”x3.5” Mixed media.jpeg', name: 'Pancakes', description: '10”x 9”x3.5” Mixed media' },
      { src: 'PB&J (tasted!), 2025, Approx. 10” x 12” x 3.5” Mixed media.jpg', name: 'PB&J (tasted!)', description: 'Approx. 10” x 12” x 3.5” Mixed media' },
      { src: 'Pee Wee’s Corndog, 2025, Approx 18” x 5” x 4”.jpg', name: 'Pee Wee’s Corndog', description: 'Approx 18” x 5” x 4” Mixed Media' },
      { src: 'Raspberry Chip Cone, 2025, Approx 14” x 6” x 6.jpeg', name: 'Raspberry Chip Cone', description: 'Approx 14” x 6” x 6 Mixed media' },
      { src: 'Superman Cone, 2025, Approx. 14” x 6” x 6” Mixed media.jpeg', name: 'Superman Cone', description: 'Approx. 14” x 6” x 6” Mixed media' },

    ];
    break;
  case "karen":
    arts = [
      { src: 'images/karen/', name: '', description: '' },
      { src: 'images/karen/', name: '', description: '' },
      { src: 'images/karen/', name: '', description: '' },
      { src: 'images/karen/', name: '', description: '' }
    ];
    break;
}

// switch (props.for) {
//   case "dana":
//     allImages = import.meta.glob('~/assets/images/dana/*', { eager: true })
//     break
//   case "karen":
//     allImages = import.meta.glob('~/assets/images/karen/*', { eager: true })
//     break
// }

// onMounted(async () => {
//   const entries = Object.entries(allImages)
//   const processed = await Promise.all(entries.map(async ([path, mod]) => {
//     const parts = path.split('/')
//     const artist = parts.at(-2) || ''
//     const fileName = parts.at(-1) || ''
//     const description = fileName.replace(/\.[^/.]+$/, '')

//     // const watermarked = await addWatermark((mod as any).default)

//     return {
//       artist,
//       src: (mod as any).default,
//       description,
//     }
//   }))
//   images.value = processed
// })
</script>
