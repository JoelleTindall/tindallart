<template>
    
    <main>
        <Hero></Hero>
        <div>
            
          <div class="flex md:flex-row md:flex-nowrap flex-wrap w-full justify-center">
               <Artistlink for="dana"/>
               <Artistlink for="karen"/>
          </div>
        </div>
    </main>
</template>

<script setup>
useSeoMeta({
    title: 'TindallArt: fine art by two fine artists',
    ogTitle: 'Tindallart', // Open Graph title
    description: 'Cincinnati based artists Karen Tindall and Dana Tindall',
});
</script>
