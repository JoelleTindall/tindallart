<template>
    <div class=" md:m-auto min-h-fit  text-offwhite bg-gradient-to-b from-choco via-choco to-strawb">
<div class="m-2">
            <div class="w-full min-h-full  text-center  bg-darkchoco">
                <div class="mx-4 text-xl min-h-fit p-5  ">
                    <h2 class="text-4xl text-center uppercase pb-4">Affiliations</h2>
    
    
                    <ul class="grid grid-cols-2 gap-4">
    
                        <li v-for="aff in affiliations" :key="aff.name" class="m-auto">
    
                            <p class="text-2xl font-semibold">{{ aff.name }}</p>
                            <p>{{ aff.location }}</p>
    
                        </li>
    
                    </ul>
    
    
                </div>
    
            </div>
</div>

    </div>
</template>

<script setup lang="ts">

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
