<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
  <div class="p-4 ">
    <div class="min-w-fit lg:max-w-3/5 m-auto p-1 bg-darkchoco">
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

        <div class="flex flex-wrap pb-1.5">
          <label for="name"
            class="flex-2/2 text-2xl text-offblack text-shadow-sm text-shadow-offwhite/15">Name</label>
          <input id="name" type="text" name="name" autocomplete="true"
            class="placeholder:text-gray-400  text-offblack border-offblack/75 border-2 rounded bg-offwhite/90 flex-2/2 min-h-fit text-lg" placeholder="Required"
            required />
        </div>

        <div class="flex flex-wrap pb-1.5">
          <label for="email"
            class="flex-2/2 text-2xl text-offblack text-shadow-sm text-shadow-offwhite/15">Email</label>
          <input id="email" type="email" name="email" autocomplete="true"
            class="placeholder:text-gray-400 text-black border-offblack/75 border-2 rounded bg-offwhite/90 flex-2/2 min-h-fit text-lg" placeholder="Required"
            required />
        </div>

        <div class="flex flex-wrap pb-3">
          <label for="phone"
            class="flex-2/2 text-2xl text-offblack text-shadow-sm text-shadow-offwhite/15">Phone
            Number</label>
          <input id="phone" name="phone" type="tel" autocomplete="true"
            class="placeholder:text-gray-400 text-black border-offblack/75 border-2 rounded bg-offwhite/90 flex-2/2 min-h-fit text-lg" placeholder="Optional" />
        </div>

        <div class="flex flex-wrap">
          <div class="text-center w-full mt-2">
            <label for="message"
              class="flex-2/2  text-2xl text-offblack text-shadow-sm text-shadow-offwhite/15">Message</label>
          </div>
          <textarea id="message" name="message"
            class="p-3 mt-2 h-36 w-full resize-none rounded-lg bg-offwhite/95 shadow-sm text-lg border-2 border-black placeholder:text-gray-400 text-black"
            placeholder="What's on your mind?" required></textarea>
        </div>

        <div class="content-center text-center w-full py-8">
          <input type="submit" value="Send Message"
            class="w-full text-2xl border-2 rounded bg-choco p-4 text-white border-offblack shadow-offblack/60 shadow-sm hover:shadow-md hover:bg-darkchoco hover:text-white hover:border-black transition-all">
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
