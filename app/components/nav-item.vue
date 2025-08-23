<template>
    <NuxtLink 
        :to="to" 
        class="group flex-1/4 shrink hover:text-shadow-gray-100/40 hover:text-shadow-md active:text-shadow-gray-100/40 active:text-shadow-md transition-all"
        :class="[isActive ? ('text-shadow-gray-100/40 text-shadow-md') : ('text-shadow-2xs text-shadow-transparent')]">
        <div 
            class=" group-active:bg-blue-400 group-hover:bg-blue-600/50  h-24 content-center"
            :class="[isActive ? ('bg-green-200') : ('bg-none'), isActive && 'mobileLandscape:bg-lightgreen']">
            <div class="w-full px-4 group-hover:py-6 group-active:py-6 transition-padding duration-400 group-hover:bg-green-100/85 group-active:bg-green-100/85 flex content-center justify-center">
                <p 
                    class="link font-normal mobileLandscape:text-lg group-active:text-green-500 group-hover:text-offblack group-hover:scale-105 group-hover:cursor-pointer group-active:scale-105 transition-all"
                    :class="[isActive ? ('text-offblack scale-105') : ('text-gray-100/95'), isActive && 'mobileLandscape:text-offblack scale-105']">{{ name }}
                </p>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    to?: string,
    name?: string
}>(), {
    to: '/',
    name: 'Default',

})

const route = useRoute();
const isActive = computed(() => route.path === props.to)
</script>