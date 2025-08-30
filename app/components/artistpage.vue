<template>
    <div>
        <Artiststatement :for="for"/>
        <div class="text-center"><h2 class="text-4xl p-10">{{ for }}'s Gallery</h2></div>
        <Swipergallery :for="for"/>
    </div>
</template>

<script setup lang="ts">
const containerRef = ref(null)

const swiper = useSwiper(containerRef)



const props = withDefaults(defineProps<{
    for: string
}>(), {
    for: 'karen',
})


// switch (props.for) {
//     case "dana":
    
//     break
//     case "karen":
//         allImages = import.meta.glob('~/assets/images/karen/*', { eager: true })
//         break
// }




</script>
