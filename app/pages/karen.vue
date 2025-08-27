<template>
    <!-- <h2>Dana Tindall</h2> -->
    <div>
        <artiststatement for="karen">

            <p>
                bio
            </p>

            <p class="pt-10 ">
                "statement."
            </p>
        </artiststatement>
        <arts for="karen"></arts>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'nav'
})
useSeoMeta({
    title: 'Dana Tindall',
    ogTitle: 'Tindallart - Dana Tindall', // Open Graph title
    description: 'The art of Dana Tindall',
});
</script>
