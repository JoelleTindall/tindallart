<template>
    <div class=" md:m-auto min-h-fit pt-10 text-offwhite bg-strawb">
        <div class="m-2 mt-0 lg:max-w-3/4 md:m-auto">
            <h2 class="text-4xl lg:text-7xl text-center uppercase pb-4 text-offblack">Affiliations & Links</h2>

            <div class="w-full min-h-full  text-center">
                <div class="mx-4 text-xl min-h-fit p-5  ">
                    <ul class="grid grid-cols-2 gap-4">
                        <li v-for="aff in affiliations" :key="aff.name" class="m-auto">

                            <p class="text-2xl font-semibold text-offblack">{{ aff.name }}</p>
                            <p class="text-offblack">{{ aff.location }}</p>

                        </li>
                    </ul>

                </div>
                <div class=" w-full lg:w-2/4 lg:m-auto p-4">
                    <NuxtLink to="/contact"
                        class="block group w-full h-full border-2 border-offblack text-2xl p-4 rounded hover:text-offblack bg-choco hover:bg-blueb text-offwhite shadow-sm shadow-offblack/25 hover:border-black hover:shadow-md transition">

                        <div class="flex flex-row flex-nowrap items-center justify-center font-[Open_Sans]">
                            Contact
                            <svg class="fill-offwhite group-hover:fill-offblack group-active:fill-offblack transition"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960">
                                <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344z" />
                            </svg>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const props = withDefaults(defineProps<{
    for: string
}>(), {
    for: 'karen',
});

let affiliations: any[] = [];


switch (props.for) {
    case "dana":

        affiliations = [
            { name: 'Button Gallery', location: 'Douglas, MI' },
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
