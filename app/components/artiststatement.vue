<template>
    <div class="w-full border-2 min-h-fit p-4 text-center">
        <h2 class="text-3xl">About {{ name }}</h2>
        <div class="m-4 border-2 min-h-fit p-2">
            <slot />
        </div>

    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    for: string,

}>(), {

    for: 'Default',

})
let name = "";
switch (props.for) {
    case "dana":
        name = "Dana"
        break;
    case "karen":
        name = "Karen"
        break;
}

</script>