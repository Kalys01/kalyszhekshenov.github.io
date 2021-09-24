<template>
  <div
    class="bg-black w-52 space-y-6 py-7 px-2 absolute inset-y-0 left-0 shadow transform transition duration-200 ease-in-out dark:bg-gray-300"
    :class="{'-translate-x-full': showSidebar}"
  ></div>
</template>

<script>
import { bus } from '../main'

export default {
  name: 'theSidebar',
  data:() => ({
    showSidebar: Boolean
  }),
  created() {
    bus.$on('portal', data => {
      this.showSidebar = data
    })
  },
};
</script>

<style lang="scss" scoped>
</style>