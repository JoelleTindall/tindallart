<template>
    <div class="md:max-w-3/4 md:m-auto min-h-fit bg-none text-offwhite ">
        <!-- <banner src="/images/dana/Orange_Popsicle_2024_Mixed_media_18x7x4.jpeg" height="50px"></banner> -->
        <div class="w-full min-h-full p-4 text-center ">
            <!-- <h2 class="text-3xl pb-4">About {{ name }}</h2> -->
            <div class="mx-4 text-xl min-h-fit p-2  ">
                <p class="text-offwhite">{{ bio }}</p>
            </div>

        </div>
        <banner height="175px"></banner>
        <div class="w-full min-h-fit p-4 text-center">
            <div class="mx-4 text-xl min-h-fit p-2">
                 <h2 class="text-5xl text-center uppercase pb-4">The Art</h2>
                <p class="text-offwhite italic">"{{ quote }}"</p>
            </div>

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
        bio = "bio"
        quote = "quote"
        break;
}

</script>