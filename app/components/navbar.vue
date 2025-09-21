<template>
  <div ref="navbar"
    class=" fixed bg-none overflow-x-hidden top-0 z-50   h-fit min-h-[70px] w-full transition-all duration-200"
    :style="[showMenu ? 'min-height:100dvh;' : 'min-height:72px;', navHidden ? 'transform: translateY(-70px); opacity:0;' : 'transform: translateY(0); opacity:1;']">
      <div id="nav">
      <nav class="container min-w-full min-h-full mobileLandscape:flex mobileLandscape:justify-between mobileLandscape:items-center md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between h-full min-h-[70px]">
          <NuxtLink to="/" class=" group my-2 pl-6 h-full group-hover:cursor-pointer">
            <div @click="showMenu && toggleNav()" class="min-h-full bg-black/10 rounded-lg group-hover:cursor-pointer h-full border-2">
            
                <h2 class="h-full text-3xl p-2 group-hover:cursor-pointer">Tindallart</h2>
            </div>
          </NuxtLink>

          <div class=" absolute right-0 mr-6 hover:cursor-pointer" @click="toggleNav">
            <div class="flex mobileLandscape:hidden md:hidden rounded-3xl p-2">
              <button class="group rounded-lg ">
                <div class="grid justify-items-center gap-1.5">
                  <span class="h-1 w-8 rounded-full bg-offblack transition"
                    :class="[showMenu && 'rotate-45 translate-y-2.5']" />
                  <span class="h-1 w-8 rounded-full bg-offblack transition" :class="[showMenu && 'scale-x-0']" />
                  <span class="h-1 w-8 rounded-full bg-offblack transition"
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
          
          <NavbarMobileItem
            v-for="item in menuItems"
            :key="item.to"
            :to="item.to"
            :name="item.name"
           
            :hovering="hovering"
            @click="toggleNav"
          />
        </ul>

        <!-- Desktop Nav -->
        <ul 
          class="hidden mobileLandscape:flex mobileLandscape:w-100 md:flex flex-row text-2xl md:text-3xl h-full py-0  bg-strawb rounded-bl"
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
const navHidden = ref(false);
let lastScrollTop = 0;
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


const handleScroll = () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop && lastScrollTop > 100) {
    if (!navHidden.value && !showMenu.value) {
      navHidden.value = true;
    }
  } else if (st < lastScrollTop - 2) {
    if (navHidden.value) {
      navHidden.value = false;
    }
  }
  lastScrollTop = st <= 0 ? 0 : st;
};

onMounted(() => {
  window.addEventListener('resize', handleWindowResize);
  window.addEventListener('scroll', handleScroll);

});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleWindowResize);
  window.removeEventListener('scroll', handleScroll);
  document.body.style.overflow = "initial";
});
</script>
