<template>
  <div class="absolute bottom-6 right-6 sm:hidden z-30" @click="toggle">
    <button type="button" class="text-black dark:text-gray-300" aria-label="toggle menu">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="stream"
        class="svg-inline--fa fa-stream fa-w-16 w-5 h-5"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16zm480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: [],
  data: () => ({
    left: false
  }),
  methods: {
    toggle() {
      this.left = !this.left;
      !this.left
        ? document.getElementById("btn").classList.remove("-left-52")
        : document.getElementById("btn").classList.add("-left-52");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>