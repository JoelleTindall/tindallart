<template>
    <div class=" md:m-auto min-h-fit pt-10 text-offwhite bg-strawb lg:px-5">
        <div
            class="m-2 mt-0 py-4 lg:max-w-full md:max-w-150 md:m-auto bg-blueb lg:bg-offwhite/25 rounded-xl shadow-sm shadow-offblack/25 lg:flex lg:flex-row lg:items-center lg:p-5 xl:p-10  ">
            <div class="lg:flex-1/2">
                <h2
                    class="text-4xl text-balance lg:text-7xl xl:text-8xl  m-auto text-center uppercase py-4 text-offwhite lg:text-offblack">
                    Affiliations
                    & Links</h2>
            </div>
            <div class="lg:flex-1/2 lg:pl-5 xl:p-5">
                <div
                    class=" w-full min-h-full text-center bg-blueb lg:rounded lg:p-6 lg:pt-10 lg:shadow-sm lg:shadow-offblack/75 ">
                    <div class="mx-4 text-xl min-h-fit p-5 bg-offwhite/50 rounded shadow-sm shadow-offblack/25 ">
                        <ul class="grid grid-cols-2 gap-4 lg:gap-6 xl:gap-10">

                            <li v-for="aff in affiliations" :key="aff.name" class="">
                                <div v-if="aff.link"
                                    class="group rounded hover:bg-offwhite/75  hover:shadow-md active:bg-offwhite/75 active:shadow-md p-1">
                                    <div class="flex flex-col">
                                        <a class="hover:cursor-pointer" :href="aff.link"
                                            target="_blank">
                                            <div class="hover:cursor-pointer text-offblack ">
                                                <p class="hover:cursor-pointer text-lg xl:text-2xl font-semibold">
                                                    {{ aff.name
                                                    }}</p>
                                                <p class="hover:cursor-pointer font-normal text-base md:text-lg">
                                                    {{ aff.location }}</p>
                                            </div>
                                            <div class="flex justify-center m-auto items-center">
                                                <p class="text-sm font-normal group-hover:cursor-pointer underline">Link</p>
                                                <svg class="fill-offblack" xmlns="http://www.w3.org/2000/svg"
                                                    width="20" height="20" viewBox="0 -960 960 960">
                                                    <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344z" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div v-else class="p-1">
                                    <p class="text-lg xl:text-2xl font-semibold text-offblack">{{ aff.name }}</p>
                                    <p class="text-offblack text-base md:text-lg">{{ aff.location }}</p>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div class=" w-3/4 lg:w-full m-auto p-4">
                        <NuxtLink to="/contact"
                            class="block group w-full h-full border-2 border-offblack/60 text-2xl xl:text-3xl p-4 rounded hover:text-offwhite active:text-offwhite bg-offwhite/80 hover:bg-choco active:bg-choco text-offblack shadow-sm shadow-offblack/25 hover:border-black active:border-black hover:shadow-md active:shadow-md transition">
                            <div class="flex flex-row flex-nowrap items-center justify-center font-[Open_Sans]">
                                Contact
                                <svg class="fill-offblack group-hover:fill-offwhite group-active:fill-offwhite transition"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960">
                                    <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344z" />
                                </svg>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const props = withDefaults(defineProps<{
    artist: string
}>(), {
    artist: 'karen',
});

let affiliations: any[] = [];


switch (props.artist) {
    case "dana":

        affiliations = [
            { name: 'Button Gallery', location: 'Douglas, MI', link:'https://www.buttonartgallery.com/' },
            { name: 'Art Resource Team (ART)', location: 'Cincinnati, OH' },
            { name: 'WashPark Gallery', location: 'Cincinnati, OH' },
            { name: 'Paradigm Home Design', location: 'Cincinnati, OH' }
        ];
        break;
    case "karen":
        affiliations = [
            { name: 'Art Resource Team (ART)', location: 'Cincinnati, OH' },
            { name: 'Paradigm Home Design', location: 'Cincinnati, OH' }
        ];
        break;
};



</script>
