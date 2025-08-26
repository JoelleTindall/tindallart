<template>
    <NuxtLink class="w-full h-full" :to="for">
    <div class="border-2 flex content-center items-center text-center h-100 w-full bg-green-100 bg-cover bg-center bg-[url(images/dana/Orange_Popsicle_2024_Mixed_media_18x7x4.jpeg)]" >
        <p>{{name}}'s Page</p>
        <!-- <img :src="bgimg"/> -->
    </div>
    </NuxtLink>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    for?: string,

}>(), {
    for: 'default',
})
let name=""
let bgimg="/images/dana/Orange_Popsicle_2024_Mixed_media_18x7x4.jpeg"
if (props.for == 'dana'){
    name = "Dana"
}else{
    name = "Karen"
}

</script>