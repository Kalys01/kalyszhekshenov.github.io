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
  },
};
</script>

<style lang="scss">

</style>
