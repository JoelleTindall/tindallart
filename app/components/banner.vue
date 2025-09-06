<template>
    <div class="bg-fixed bg-bottom bg-cover h-50 " :style="`background-image:url(${src});height:${height}`">
        <slot/>
    </div>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps < { src?: string, height?: string } > (), {
    src: 'https://picsum.photos/3024',
    height: '200px'
});
</script>