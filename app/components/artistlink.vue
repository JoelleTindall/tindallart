<template>
    <div class="m-2 overflow-clip rounded-md max-h-64 md:max-h-screen shadow-offblack/50 shadow-md">
        <NuxtLink :to="for">
   
            <div class="relative lg:max-w-full ">

                <div class="transition-shadow duration-500 relative  h-full w-full  group shadow-sm shadow-offblack/30 hover:shadow-md">
                    <img class=" max-h-64 md:max-h-screen w-screen object-cover " :src="bgimg" alt="default">
                    <div class="absolute inset-0 bg-gray-700 opacity-60 "></div>
                    <div class="absolute inset-0 flex items-center justify-center transition-backdrop-blur duration-500 group-hover:backdrop-blur-sm">
                        <h2 class="text-offwhite text-4xl md:text-5xl text-shadow-lg text-shadow-offblack uppercase transition duration-500 hover:cursor-pointer group-hover:scale-105">Art by {{ name }}</h2>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    for?: string,

}>(), {
    for: 'default',
})
let name = ""
let bgimg = "images/danabg.jpg"
if (props.for == 'dana') {
    name = "Dana"

} else {
    name = "Karen"
    bgimg = "images/karenbg.jpg"
}

</script>