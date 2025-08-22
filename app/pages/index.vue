<template>
    <main>
        <div>
            <h1>walcome to tindall art .com</h1>
            <div><NuxtLink to="dana">Dana's Page</NuxtLink></div>
            <div><NuxtLink to="karen">Karen's Page</NuxtLink></div>
        </div>
    </main>
</template>

<script setup>
useSeoMeta({
    title: 'Tindallart - Artworks of Karen and Dana Tindall',
    ogTitle: 'Tindallart', // Open Graph title
    description: 'Cincinnati based artists Karen Tindall and Dana Tindall',
});
</script>
