<template>
    
    <main>
        <Hero></Hero>
        <div class="">
            
          <div class=" sm:p-0 md:p-1 lg:p-2 ">
            <div class=" lg:p-4 md:p-2 md:bg-choco/10  md:shadow-sm shadow-offblack/25 rounded flex md:flex-row md:flex-nowrap flex-wrap w-full justify-center">
                   <Artistlink artist="dana"/>
                   <Artistlink artist="karen"/>
            </div>
          </div>
        </div>
    </main>
</template>

<script setup>
definePageMeta({
    layout: 'nav'
})
useSeoMeta({
    title: 'Tindallart: Fine Art by Two Fine Artists',
    ogTitle: 'Tindallart', // Open Graph title
    description: 'Cincinnati based artists Karen Tindall and Dana Tindall',
});
</script>
