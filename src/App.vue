<template>
  <div id="app">
    <div class="relative">
      <TheNavBar />
      <component :is="layout">
        <router-view />
      </component>
      <TheSidebarMobile />
      <HamburgerMenu />
    </div>
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";
import HamburgerMenu from "@/components/HamburgerMenu.vue";
import TheSidebarMobile from "@/components/TheSidebarMobile.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    TheNavBar,
    HamburgerMenu,
    TheSidebarMobile,
  },
  beforeMount() {
    this.$store.dispatch("INIT_THEME");
  },
  computed: {
    layout() {
      console.log(this.$route.meta);
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
