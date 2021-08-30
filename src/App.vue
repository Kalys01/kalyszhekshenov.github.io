<template>
  <div id="app">
    <Nav-bar/>
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import { mapGetters } from 'vuex'

export default {
  name: "App",
  components: {
    NavBar
  },
  beforeMount() {
    this.$store.dispatch("INIT_THEME");
  },
  computed: {
    layout() {
      const layoutName = this.$route.meta.layout || 'MainLayout';
      return () => import(`@/layouts/${layoutName}.vue`)
    },
    ...mapGetters({theme: "GET_THEME"})
  },
  watch: {
    theme(newTheme, oldTheme) {
      newTheme === "light"
      ? document.querySelector("html").classList.remove('dark')
      : document.querySelector("html").classList.add('dark');
    },
  },
};
</script>

<style lang="scss">

</style>
