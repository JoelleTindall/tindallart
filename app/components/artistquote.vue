<template>
    <div class="w-full min-h-fit  text-center bg-cover bg-center bg-fixed" >
        <div class="h-full w-full  min-h-fit  bg-strawb">

            <div class=" p-4 rounded-2xl ">

                <div class="lg:max-w-3/4 lg:m-auto">
                    <svg class="w-10 h-10 text-blueb/75  mb-4 transform -scale-x-100" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path
                            d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                    <p class="text-offblack/90 bg-radial  rounded-2xl  italic text-xl lg:text-3xl ">
                        {{ quote }}</p>
                    <div class=" flex justify-end">
                        <svg class="w-10 h-10 transform -scale-y-100  text-blueb/75  mb-4" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path
                                d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <!-- <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
            <svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path
                    d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <p class="text-offblack/90 bg-radial  rounded-2xl  italic text-2xl lg:text-3xl lg:max-w-3/4 lg:m-auto">
                {{ quote }}</p>
        </blockquote> -->

    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    quote: string,

}>(), {

    quote: 'Default',

})

// const src = 'https://picsum.photos/3024';

</script>