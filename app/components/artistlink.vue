<template>
    <div>
        <NuxtLink :to="for">{{name}}'s Page</NuxtLink>
    </div>
    
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    for?: string,

}>(), {
    for: 'default',
})
let name=""

if (props.for == 'dana'){
    name = "Dana"
}else{
    name = "Karen"
}

</script>