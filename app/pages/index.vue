<template>
    <main>
        <div>
            <h1>walcome to tindall art .com</h1>
          <div class="flex md:flex-row flex-col">
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
