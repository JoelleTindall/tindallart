<template>
    <div class="m-2 overflow-clip">
        <NuxtLink class="w-full h-full " :to="for">
   
            <div class="relative lg:max-w-full ">

                <div class="transition-shadow duration-500 relative  h-full w-full rounded-md group shadow-sm shadow-offblack/30 hover:shadow-md">
                    <img class="max-h-64 md:max-h-full w-screen object-cover rounded-md" :src="bgimg" alt="default">
                    <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                    <div class="absolute inset-0 flex items-center justify-center rounded-md transition-backdrop-blur duration-500 group-hover:backdrop-blur-sm">
                        <h2 class="text-white text-4xl md:text-5xl text-shadow-xl text-shadow-offblack uppercase transition duration-500 hover:cursor-pointer group-hover:scale-105">Art by {{ name }}</h2>
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