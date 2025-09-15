<template>
    <div class=" lg:m-auto min-h-fit bg-none text-offwhite lg:pt-10">
        <!-- <banner src="/images/dana/Orange_Popsicle_2024_Mixed_media_18x7x4.jpeg" height="50px"></banner> -->
        <div class="w-full min-h-full p-4 text-center lg:max-w-4/5 lg:m-auto">
            <div class="mx-4 text-xl min-h-fit p-2 lg:flex lg:flex-row content-center items-center ">
                <h2 class="text-5xl lg:text-7xl text-center uppercase pb-4 lg:w-2/5">The Artist</h2>

                <p class="text-offwhite lg:w-3/5 lg:text-2xl">{{ bio }}</p>
            </div>

        </div>
        <!-- <banner height="175px"></banner> -->
        <artistquote v-if="name == 'Dana'" class="lg:m-auto" :quote="quote"></artistquote>
        <!-- <div class="w-full min-h-fit p-4 text-center">
            <div class="mx-4 text-xl min-h-fit p-2 lg:flex lg:flex-row-reverse content-center items-center ">
                <h2 class="text-4xl text-center uppercase pb-4 lg:w-2/5 lg:text-6xl">The Art</h2>
                <p class="text-offwhite italic lg:w-3/5 lg:text-2xl">{{ quote }}</p>
            </div>

        </div> -->
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    for: string,

}>(), {

    for: 'Default',

})
let name = "";
let bio = "";
let quote = "";

switch (props.for) {
    case "dana":
        name = "Dana"
        bio = "Dana Tindall lives and has a studio in northern Kentucky. He has been professionally creating fine artwork since 1980 and has exhibited work in multiple solo and juried group shows locally, nationally, and internationally. He has received professional development grants from the Kentucky Arts Council, and was awarded an Al Smith Fellowship. He graduated from Austin College (BA, Art), MA in Art from the University of Dallas, and holds an Ed.D from the University of Cincinnati."
        quote = "This art is all about American consumerism, overabundance, and liking things. I make these pieces because they are images of what people know and like. They are absurd images; on the surface they don’t offend and are friendly. I make them oversized and out of proportion to draw attention to them, invite comments/conversation and perhaps a laugh. Humor as a part of these pieces is important."
        break;
    case "karen":
        name = "Karen"
        bio = "I hold degrees in fine art, graphic art, and occupational therapy and feel elements of each of those fields are reflected in my work. Most of my work represents my search for the quiddities of an object, a place or technique. Smaller formats are preferred as they force the viewer to look more closely and to pay attention to the result of those searches."
        quote = ""
        break;
}

</script>