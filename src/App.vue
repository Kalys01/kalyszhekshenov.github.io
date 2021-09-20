<template>
  <div id="app">
    <div class="relative">
      <TheNavBar />
      <component :is="layout">
        <router-view />
      </component>
      <HamburgerMenu />
      <div
         id="btn"
        class="absolute z-0 border-black top-0 -left-52 shadow w-52 h-full bg-black md:hidden dark:bg-gray-300"
      ></div>
    </div>
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";
import HamburgerMenu from "@/components/HamburgerMenu.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    TheNavBar,
    HamburgerMenu
  },
  beforeMount() {
    this.$store.dispatch("INIT_THEME");
  },
  computed: {
    layout() {
      const layoutName = this.$route.meta.layout || "MainLayout";
      return () => import(`@/layouts/${layoutName}.vue`);
    },
    ...mapGetters({ theme: "GET_THEME" })
  },
  watch: {
    theme(newTheme, oldTheme) {
      newTheme === "light"
        ? document.querySelector("body").classList.remove("dark")
        : document.querySelector("body").classList.add("dark");
    }
  }
};
</script>

<style lang="scss">
</style>
