<template>
    
    <main>
        <Hero></Hero>
        <div>
            
          <div class="p-2 lg:p-4 flex md:flex-row md:flex-nowrap flex-wrap w-full justify-center">
               <Artistlink artist="dana"/>
               <Artistlink artist="karen"/>
          </div>
        </div>
    </main>
</template>

<script setup>
definePageMeta({
    layout: 'nav'
})
useSeoMeta({
    title: 'TindallArt: Fine Art by Two Fine Artists',
    ogTitle: 'Tindallart', // Open Graph title
    description: 'Cincinnati based artists Karen Tindall and Dana Tindall',
});
</script>
