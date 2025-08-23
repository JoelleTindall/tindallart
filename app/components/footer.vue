<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
  <footer class="flex flex-col text-center mt-auto max-w-screen bottom-0 p-2 lg:p-8">
    <hr
      class="lg:my-10 mt-6 mb-4 h-px border-t-2 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400">

    <div class="flex flex-col lg:flex-row min-w-full lg:px-5">
      <div class="flex-1/3 lg:flex-1/4 text-nowrap grow lg:text-left text-xs lg:text-sm content-center">
        <p>© Tindallart 2025</p>
      </div>
   

      <div class="flex-1/3 lg:flex-1/4 shrink lg:text-right content-center">
        <NuxtLink to="/contact"
          class=" text-offblack/75 text-xs  lg:text-sm font-normal hover:text-darkgreen hover:underline transition">
          Contact</NuxtLink>
      </div>
    </div>
  </footer>
</template>