<template>
    <div class=" lg:m-auto min-h-fit bg-choco  text-offwhite lg:py-5">
        
        
        <div class="w-full min-h-full   md:p-4 lg:pb-10 text-center xl:max-w-3/4 m-auto">
            <div class="  py-5 md:p-2 md:rounded-2xl bg-offblack/5 md:shadow-xs shadow-offblack/25  ">
                <div class="mx-4 text-xl min-h-fit  md:p-2 lg:py-5 lg:flex lg:flex-row content-center items-center justify-center ">
                    <h2 class="text-5xl  lg:text-7xl text-center uppercase pb-4 lg:pb-0 lg:w-2/5">The Artist</h2>

                    <div class="lg:w-3/5"><p class="text-offwhite md:pl-2 lg:text-xl xl:text-2xl">{{ bio }}</p></div>
                </div>
            </div>
        </div>


        <artistquote v-if="name == 'Dana'" class="lg:m-auto" :quote="quote"></artistquote>
        <div v-else class="bg-strawb h-6 lg:h-10 content-center">
            <hr class="bg-offwhite/25 text-offwhite/25 border-0  m-auto h-1/2 block">
            </hr>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    artist: string,

}>(), {

    artist: 'Default',

})
let name = "";
let bio = "";
let quote = "";

switch (props.artist) {
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