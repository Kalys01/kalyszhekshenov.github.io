<template>
  <nav
    class="bg-black font-medium z-20 text-gray-300 absolute t-0 w-full dark:bg-gray-300 dark:text-black"
  >
    <div class="px-6 py-3 mx-auto flex justify-between items-center">
      <div class="flex items-center justify-between">
        <div>
          <router-link
            class="text-xl font-bold md:text-2xl hover:text-gray-700 dark:hover:text-gray-800"
            to="/"
          >
            <div class="text-gray-300 dark:text-black md:mx-4 h-5 w-5">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user"
                class="svg-inline--fa fa-user fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                />
              </svg>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div class="items-center flex justify-between">
        <div class="flex item-center">
          <router-link
            v-for="(navLink, id) in navLinks"
            :key="id"
            class="invisible sm:mx-4 sm:visible"
            :to="navLink.to"
          >{{navLink.name}}</router-link>
          <button
            @click="switchTheme"
            class="text-gray-300 cursor-pointer pt-1 dark:text-black md:mx-4 h-5 w-5"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="adjust"
              class="svg-inline--fa fa-adjust fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "navbar",
  data: () => ({
    navLinks: [
      { name: "Home", to: "/" },
      { name: "Contact", to: "/contact" },
      { name: "About", to: "/about" }
    ]
  }),
  methods: {
    ...mapActions({ switchTheme: "TOGGLE_THEME" })
  }
};
</script>

<style lang="scss">
a.exac-active {
  border-bottom: 2px solid white;
}
</style>
