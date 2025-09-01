<template>
    <ClientOnly>

        <div ref="containerRef" class="border-2 max-h-full">

            <swiper-container style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="mySwiper"
                thumbs-swiper=".mySwiper2"  space-between="10" :navigation="true" :slides-per-view="1" :auto-height="true">
              
                <swiper-slide v-for="(img) in images" :key="img.src" class="bg-black/95 color-white flex flex-col">
                    <img :src="img.src" :alt="img.description" />
                    <div class=" max-h-10 h-fit  content-center items-center ">
                        <p class="artdescription  text-center text-white">{{ img.description }}</p>
                    </div>
                </swiper-slide>

            </swiper-container>

            <swiper-container class="mySwiper2" space-between="10" :slides-per-view="5" :free-mode="true"
                :watch-slides-progress="true">
        
                <swiper-slide v-for="(img) in images" :key="img.src" class=" hover:cursor-pointer hover:opacity-100">
                        <img :src="img.src"/>
                </swiper-slide>
            </swiper-container>

        </div>

    </ClientOnly>
</template>

<script setup lang="ts">
const containerRef = ref(null)

const swiper = useSwiper(containerRef)



const props = withDefaults(defineProps<{
    for: string
}>(), {
    for: 'karen',
})

let allImages = {}
const images = ref<any[]>([])

switch (props.for) {
    case "dana":
        allImages = import.meta.glob('~/assets/images/dana/*', { eager: true })
        break
    case "karen":
        allImages = import.meta.glob('~/assets/images/karen/*', { eager: true })
        break
}

onMounted(async () => {
    const entries = Object.entries(allImages)
    const processed = await Promise.all(entries.map(async ([path, mod]) => {
        const parts = path.split('/')
        const artist = parts.at(-2) || ''
        const fileName = parts.at(-1) || ''
        const description = fileName.replace(/\.[^/.]+$/, '')

        // const watermarked = await addWatermark((mod as any).default)

        return {
            artist,
            src: (mod as any).default,
            description,
        }
    }))
    images.value = processed
})
</script>


<style lang="css">
swiper-container {
    width: 100%;
    height: 100%;
}

swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #444;
    display: flex;
    justify-content: center;
    align-items: center;
}

swiper-slide img {
    /* display: sw </swiper-slidek; */
    width: 100%;
    height: 100%;
    object-fit: cover;
}

body {
    background: #000;
    color: #000;
}

swiper-container {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
}

swiper-slide {
    background-size: cover;
    background-position: center;
}

.mySwiper {
    height: 80%;
    width: 100%;
}

.mySwiper2 {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
}

.mySwiper2 swiper-slide {
    width: 25%;
    height: 100%;
     opacity: 0.4;
}

.mySwiper2 swiper-slide:hover {
 
     opacity: 1;
}

.mySwiper2 .swiper-slide-thumb-active {
     opacity: 1; 
}

swiper-slide img {
    display: sw </swiper-slidek;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* swiper-container::part(button-next),
swiper-container::part(button-prev) {
    color: white;
    fill: white;
    background-color: rgba(0, 0, 0, 0.414);
    padding: 4px;
    border-radius: 0.25rem;
    transition: background-color 200ms;
}

swiper-container::part(button-next):hover,
swiper-container::part(button-prev):hover,
swiper-container::part(button-next):active,
swiper-container::part(button-prev):active {
    background-color: black;

}

swiper-container::part(bullet-active) {
    background-color: lightgreen;
}

swiper-container::part(bullet) {
    background-color: darkcyan;
}

.swiper-1 {
    width: 100%;
    height: auto;
} */
</style>
