<template>
    <NuxtLink :to="to"
        class="group flex-1/4 flex flex-col content-center  hover:bg-choco bg-choco hover:text-offwhite hover:tracking-widest transition-all min-w-full text-center"
        :class="[
            isActive && !hovering
                ? 'text-offwhite tracking-widest '
                : ['text-offblack bg-strawb']
        ]">
        <div class="flex flex-row flex-wrap h-full">
            <div class="w-full flex-2/2 h-1/10">
                <div class=" group-hover:w-full transition-all h-full "
                    :class="[isActive && !hovering ? ('w-full ') : ('bg-none w-0')]" />
            </div>
            <div class=" font-[Open_Sans] uppercase link w-full flex-2/2 h-8/10 content-center text-shadow-offwhite/60 group-hover:text-shadow-xs transition-all"
                :class="[isActive && !hovering ? ('text-shadow-xs') : ('text-shadow-lg')]">
                {{ name }}
            </div>
            <div class="w-full flex-2/2 h-1/10">
                <div class=" group-hover:w-full transition-all h-full"
                    :class="[isActive && !hovering ? ('w-full') : ('bg-none w-0')]" />
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    to?: string,
    name?: string,
    reverse?: boolean,
    hovering?: boolean
}>(), {
    to: '/',
    name: 'Default',
    hovering: false
})

const route = useRoute();
const isActive = computed(() => route.path === props.to)



</script>
