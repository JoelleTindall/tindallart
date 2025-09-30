<template>
    <NuxtLink :to="to"
        class="group flex-1/4 flex flex-col content-center odd:bg-offwhite/10  hover:bg-choco  hover:text-offwhite hover:tracking-widest transition-all min-w-full text-center"
        :class="[
            isActive && !hovering
                ? 'text-offwhite tracking-widest !bg-choco '
                : ['text-offblack/90 ']
        ]">
        <div class="flex flex-row flex-wrap h-full ">
            <div class="w-full flex-2/2 h-1/10">
                <div class=" group-hover:w-full transition-all h-full "
                    :class="[isActive && !hovering ? ('w-full ') : ('bg-none w-0')]" />
            </div>
            <div class="font-[open_sans] uppercase link w-full flex-2/2 h-8/10 content-center   group-hover:bg-offblack/10 group-hover:text-shadow-offwhite/60 group-hover:text-shadow-xs transition-all"
                :class="[isActive && !hovering ? ('text-shadow-xs bg-offblack/10') : ('text-shadow-lg '), hovering && isActive ? (''):('')]">
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
    hovering?: boolean
}>(), {
    to: '/',
    name: 'Default',
    hovering: false
})

const route = useRoute();
const isActive = computed(() => route.path === props.to)



</script>
