<template>
  <div ref="navbar"
    class="sticky overflow-x-hidden top-0 z-50 bg-gradient-to-b from-darkgreen to-darkergreen shadow-[0px_4px_15px_0px_rgba(0,_0,_0,_0.35)] h-fit min-h-[96px] w-full transition-all duration-200"
    :style="[showMenu ? 'min-height:100dvh;' : 'min-height:96px;']">
    <div id="nav">
      <nav class="container min-w-full h-full mobileLandscape:flex mobileLandscape:justify-between mobileLandscape:items-center md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="my-2 pl-6">
            <div @click="showMenu && toggleNav()">
              <!-- <img src="~/assets/images/logos/logo-badge.png"
                class="md:visible h-20 min-w-20 shadow-sm rounded-[50%] bg-darkgreen"> -->
                <h2>Tindallart</h2>
            </div>
          </NuxtLink>

          <div class="mr-6 hover:cursor-pointer" @click="toggleNav">
            <div class="flex mobileLandscape:hidden md:hidden rounded-3xl p-2">
              <button class="group rounded-lg ">
                <div class="grid justify-items-center gap-1.5">
                  <span class="h-1 w-8 rounded-full bg-lightgray transition"
                    :class="[showMenu && 'rotate-45 translate-y-2.5']" />
                  <span class="h-1 w-8 rounded-full bg-lightgray transition" :class="[showMenu && 'scale-x-0']" />
                  <span class="h-1 w-8 rounded-full bg-lightgray transition"
                    :class="[showMenu && '-rotate-45 -translate-y-2.5']" />
                </div>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Nav -->
        <ul
          class="bg-center bg-size-[110%] flex flex-col items-center z-50 mobileLandscape:hidden md:hidden overflow-hidden text-5xl hover:cursor-pointer transition-all duration-200"
          :style="showMenu ? `height:calc(100dvh - ${height}px)` : 'height:0;'"
          @mouseover="hovering = true"
          @mouseleave="hovering = false">
<!--           
          <NavbarMobileItem
            v-for="item in menuItems"
            :key="item.to"
            :to="item.to"
            :name="item.name"
            :reverse="item.reverse"
            :hovering="hovering"
            @click="toggleNav"
          /> -->
        </ul>

        <!-- Desktop Nav -->
        <ul 
          class="hidden mobileLandscape:flex mobileLandscape:w-100 md:flex flex-row text-2xl md:text-3xl h-full py-0"
          @mouseover="hovering = true"
          @mouseleave="hovering = false">
          
          <NavItem
            v-for="item in menuItems"
            :key="item.to"
            :to="item.to"
            :name="item.name"
            :hovering="hovering"
          />
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const showMenu = ref(false);
const height = ref(0);
const navbar = ref(null);

const toggleNav = () => {
  const element = document.getElementById('nav');
  height.value = element.clientHeight;
  showMenu.value = !showMenu.value;
  document.body.style.overflow = showMenu.value ? "hidden" : "initial";
};

const handleWindowResize = () => {
  if (showMenu.value) {
    showMenu.value = false;
    document.body.style.overflow = "initial";
  }
};
const hovering = ref(false);

const menuItems = [
  { to: '/', name: 'Home' },
  { to: '/dana', name: 'Dana'},
  { to: '/karen', name: 'Karen' },
  { to: '/contact', name: 'Contact'}
];

onMounted(() => {
  window.addEventListener('resize', handleWindowResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleWindowResize);
  document.body.style.overflow = "initial";
});
</script>
