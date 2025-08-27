<template>
    <div class="m-2">
        <NuxtLink class="w-full h-full" :to="for">
            <!-- <div class="border-2 flex content-center items-center h-100 w-full bg-green-100 bg-cover bg-center" 
        :class="`bg-[url(${bgimg})]`">
            <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
    <div class="absolute inset-0 flex items-center justify-center">
                    <h2 class="text-white text-3xl font-bold hover:cursor-pointer">{{name}}'s Page</h2>

    </div>
        
        </div> -->
            <div class="relative max-w-xl lg:max-w-full">

                <div class="h-64 lg:h-screen w-full object-cover rounded-md group">
                    <div class="absolute rounded-md h-full w-full inset-0 bg-cover bg-center "
                        :class="`bg-[url(${bgimg})]`"></div>
                        <!-- animate-[var(--background-zoom)] group-hover:in not-hover:out -->
                    <!-- <img class="h-64 lg:h-screen w-full object-cover rounded-md" :src="bgimg" alt="default"> -->
                    <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                    <div class="absolute inset-0 flex items-center justify-center rounded-md transition-backdrop-blur duration-500 group-hover:backdrop-blur-sm">
                        <h2 class="text-white text-3xl text-shadow-xl text-shadow-offblack font-bold uppercase transition duration-500 hover:cursor-pointer group-hover:scale-105">Art by {{ name }}</h2>
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
let bgimg = "images/dana/Orange_Popsicle_2024_Mixed_media_18x7x4.jpeg"
if (props.for == 'dana') {
    name = "Dana"
} else {
    name = "Karen"
}

</script>