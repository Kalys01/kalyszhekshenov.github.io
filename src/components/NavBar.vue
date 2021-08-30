<template>
  <nav class="bg-black font-medium text-gray-300 absolute t-0 w-full dark:bg-gray-300 dark:text-black">
    <div
      class="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <div>
          <router-link
            class="text-xl font-bold md:text-2xl hover:text-gray-700 dark:hover:text-gray-800"
            to="/"
            >Brand
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button
            type="button"
            class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div class="items-center md:flex">
        <div class="flex flex-col md:flex-row md:mx-6">
          <router-link
            v-for="(navLink, id) in navLinks"
            :key="id"
            class="my-1 hover:text-gray-700 dark:hover:text-gray-900 md:mx-4 md:my-0"
            :to="navLink.to"
          >
            {{navLink.name}}
          </router-link>
          <button @click="darkMode" class="text-gray-300 cursor-pointer pt-0.5 dark:text-black md:mx-4 h-5 w-5">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="adjust" class="svg-inline--fa fa-adjust fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"></path></svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'navbar',
  data: () => ({
    navLinks: [
      // {name: 'Home', to: '/'},
      {name: 'Contact', to: '/contact'},
      {name: 'About',  to: '/about'}
    ],
    theme: false
  }),
  methods: {
    ...mapActions({darkMode: "TOGGLE_THEME"}),
  }
}
</script>

<style>
a.exac-active {
  text-decoration: underline;
}
</style>
