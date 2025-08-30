<template>
    <div class="md:max-w-3/4 md:m-auto">
        <div class="w-full min-h-fit p-4 text-center bg-choco">
            <h2 class="text-3xl pb-4">About {{ name }}</h2>
            <div class="mx-4  min-h-fit p-2 bg-white rounded shadow-offblack/50 shadow-md">
                <p>{{ bio }}</p>
            </div>

        </div>
        <div class="w-full min-h-fit p-4 text-center bg-strawb">
            <div class="mx-4  min-h-fit p-2 bg-white rounded shadow-offblack/50 shadow-md">
                <p>{{ quote }}</p>
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