<template>
  <div class=" bg-choco">
    <!-- zoomed in -->
<h2 class="text-5xl text-center uppercase py-10 text-offwhite lg:text-8xl ">The Art</h2>
    <div @click="(e) => toggleHideText()" class="  top-0 left-0 right-0 h-dvh max-h-dvh min-h-fit max-w-dvw z-1000 bg-black/75 backdrop-blur-sm "
      :class="[zoom ? 'fixed' : 'hidden']">
      <div
        class="absolute right-3 top-3 z-1001 bg-black/50 rounded-4xl fill-white hover:cursor-pointer hover:opacity-90 active:opacity-90 opacity-50"
        :class="[hideText && 'hidden']"
        @click="(e) => toggleZoom()">
        <svg class="h-[40px] md:h-[58px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224z" />
        </svg>
      </div>
      <div
        class=" w-full h-full p-2 mobileLandscape:p-0 flex flex-wrap lg:flex-row  content-center justify-center m-auto">
        <div v-if="selected[0]!='src'" class="flex-1/1 mobileLandscape:max-h-screen mobileLandscape:min-w-screen md:max-h-dvh  lg:flex-2/3">
          <NuxtImg :src="selected[0]" class="max-h-130 md:max-h-screen m-auto py-4 mobileLandscape:py-0 rounded-lg"/>
        </div>
        <div
          class=" transition flex-1/1 w-full text-balance mobileLandscape:absolute mobileLandscape:bottom-0 mobileLandscape:bg-black/50 mobileLandscape:h-fit md:absolute md:bottom-0 md:bg-black/50 md:p-10 lg:bg-black/0 lg:relative lg:p-7 p-5 lg:flex-1/3  content-center text-lightgray"
          :class="[hideText && 'opacity-0 lg:opacity-100']">
          <h2 class="artdescription text-2xl">{{ selected[1] }}</h2>
          <p class=" artdescription pt-2 text-lightgray text-lg">{{ selected[2] }}</p>
        </div>
      </div>
    </div>

    <!-- gallery -->

    <div class="flex flex-wrap pb-10 justify-center">
      <div class="flex flex-col m-2 min-h-fit lg:w-120 md:w-5/12 w-120  "
        v-for="art in arts" :key="art.src">
       
          <div @click="(e) => toggleZoom(`images/${art.artist}/${art.src}`, art.name, art.description)" class="w-full h-full hover:cursor-pointer hover:scale-102 p-2 shadow-offblack/20 shadow-xl transition-all hover:shadow-offblack/30 hover:p-1  bg-blueb">
            <div>
              <NuxtImg class=" shadow-md shadow-offblack/20 object-contain h-full w-full" :src="`/images/${art.artist}/${art.src}`"
                :alt="art.name + art.description" />
            </div>
            <div class="pt-2 hover:cursor-pointer">
              <p class="artdescription text-xl text-offwhite font-bold hover:cursor-pointer">{{ art.name }}</p>
              <p class="artdescription text-offwhite italic hover:cursor-pointer">{{ art.description }}</p>
            </div>
          </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

const zoom = ref(false);
const hideText = ref(false);


const props = withDefaults(defineProps<{
  for: string
}>(), {
  for: 'karen',
});

let arts: any[] = [];

switch (props.for) {
  case "dana":

    arts = [
      { src: '3 Corndogs!, 2025,  10” x 6.5” x 3.5” Mixed media.jpeg', name: '3 Corndogs!', description: '10” x 6.5” x 3.5” Mixed media', artist: props.for },
      { src: 'Big Fat Burger, 8.25” x 7” x 7” Mixed media.jpg', name: 'Big Fat Burger', description: '8.25” x 7” x 7” Mixed media', artist: props.for },
      { src: 'Bomb Pop, 2025, 18” x 5.5” x 5.5” Mixed media.jpg', name: 'Bomb Pop', description: '18” x 5.5” x 5.5” Mixed media', artist: props.for },
      { src: 'Breakfast Treat, 2025, 12” x 9 “ x 2.5” Mixed media.jpg', name: 'Breakfast Treat', description: '12” x 9” x 2.5” Mixed media', artist: props.for },
      { src: 'Corndog with Mustard, 2025, approx 10” x 4” x 4” Mixed media.jpg', name: 'Corndog with Mustard', description: 'Approx 10” x 4” x 4” Mixed media', artist: props.for },
      { src: 'Dreamsicle, 2025, 16” x 5.5”x 2.5” Mixed media.jpg', name: 'Dreamsicle', description: '16” x 5.5” x 2.5” Mixed media', artist: props.for },
      { src: 'Everything Bagel with Lox, Onions and Capers, 2025, 10” x 8” x 3.5” Mixed media.jpeg', name: 'Everything Bagel w/ Lox, Onions, and Capers', description: '10” x 8” x 3.5” Mixed media', artist: props.for },
      { src: 'Orange_Popsicle_2024_Mixed_media_18x7x4.jpeg', name: 'Orange Popsicle', description: '18” x 7” x 4” Mixed media', artist: props.for },
      { src: 'Pancakes, 2025,  10”x 9”x3.5” Mixed media.jpeg', name: 'Pancakes', description: '10” x 9” x 3.5” Mixed media', artist: props.for },
      { src: 'PB&J (tasted!), 2025, Approx. 10” x 12” x 3.5” Mixed media.jpg', name: 'PB&J (tasted!)', description: 'Approx. 10” x 12” x 3.5” Mixed media', artist: props.for },
      { src: 'Pee Wee’s Corndog, 2025, Approx 18” x 5” x 4”.jpg', name: 'Pee Wee’s Corndog', description: 'Approx 18” x 5” x 4” Mixed Media', artist: props.for },
      { src: 'Raspberry Chip Cone, 2025, Approx 14” x 6” x 6.jpeg', name: 'Raspberry Chip Cone', description: 'Approx 14” x 6” x 6 Mixed media', artist: props.for },
      { src: 'Superman Cone, 2025, Approx. 14” x 6” x 6” Mixed media.jpeg', name: 'Superman Cone', description: 'Approx. 14” x 6” x 6” Mixed media', artist: props.for },

    ];
    break;
  case "karen":
    arts = [
      { src: 'Arches-2025-4_X4.5_-acrylic and prismacolor on paper.jpg', name: 'Arches', description: '4” x 4.5” Acrylic and prismacolor on paper', artist: props.for },
      { src: 'Canyonlands-2025-4.5_X5.5_ acrylic and prismacolor on paper.jpg', name: 'Canyonlands', description: '4.5” x 5.5” Acrylic and prismacolor on paper', artist: props.for },
      { src: 'Cloudscape with barn-2025-5_X5_ gouache on paper.jpg', name: 'Cloudscape with Barn', description: '5” x 5” Gouache on paper', artist: props.for },
      { src: 'Cloudscape-2025-4.75_X5_-gouache on paper.jpg', name: 'Cloudscape', description: '4.75” x 5” Gouache on paper', artist: props.for },
      { src: 'Jewelry Box-2025-4_X6_ acrylic on canvas.jpg', name: 'Jewlery Box', description: '4” x 6” Acrylic on canvas', artist: props.for },
      { src: 'N-Letters from Jack-2025-5_X5_ gouache on paper.jpg', name: 'N - Letters from Jack', description: '5” x 5” Gouache on paper', artist: props.for },
      { src: 'Q-Letters from Jack-2025-5_X5_ gouache on paper.jpg', name: 'Q - Letters from Jack', description: '5” x 5” Gouache on paper', artist: props.for },
      { src: 'S-Letters from Jack-2025-5_X5_-gouache on paper.jpg', name: 'S - Letters from Jack', description: '5” x 5” Gouache on paper', artist: props.for },
      { src: 'September 18 2024-2024-4_X4_ acrylic on canvas.jpg', name: 'September 18 2024', description: '4” x 4” Acrylic on canvas', artist: props.for },
      { src: 'Utah Moonrise-2025-13_X8_ acrylic and prismacolor on paper.jpg', name: 'Utah Moonrise', description: '13” x 8” Acrylic and prismacolor on paper', artist: props.for },
      { src: 'Window Tint-2025-4_X6_ acrylic on canvas.jpg', name: 'Window Tint', description: '4” x 6” Acrylic on canvas', artist: props.for },
      { src: 'Yard Art-2025-4_X6_ acrylic on canvas.jpg', name: 'Yard Art', description: '4” x 6” Acrylic on canvas', artist: props.for },
    ];
    break;
};


const selected = ref(['src', 'name', 'description']);

const toggleZoom = (src: string = "src", name: string = "name", description: string = "description") => {
  zoom.value = !zoom.value;
  hideText.value = false;
  if (zoom.value) {
    selected.value = [src, name, description];
  }
  document.body.style.overflow = zoom.value ? "hidden" : "initial";
};

const toggleHideText = () => {
  hideText.value = !hideText.value;
};

onBeforeUnmount(() => {

  document.body.style.overflow = "initial";
});

</script>
