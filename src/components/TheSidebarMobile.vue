<template>
  <transition
    enter-active-class=""
    enter-from-class=""
    enter-to-class=""
    leave-active-class=""
    leave-from-class=""
    leave-to-class=""
  >
    <div
      class="flex justify-center bg-black w-52 space-y-6 pt-7 py-7 h-max-screen px-2 absolute inset-y-0 left-0 shadow transform transition duration-200 ease-in-out sm:hidden dark:bg-gray-300"
      :class="{ '-translate-x-full': showSidebar }"
    >
      <div class="flex flex-col mt-7" @click="closeSidebar">
        <router-link
          class="text-xl my-6 font-bold text-gray-300 dark:text-black"
          v-for="(navlink, index) in navLinks"
          :key="index"
          :to="navlink.to"
        >
          {{ navlink.name }}
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script>
import { bus } from "../main";
import { mapGetters } from "vuex";

export default {
  name: "theSidebar",
  data: () => ({
    showSidebar: Boolean,
  }),
  created() {
    bus.$on("portal", (data) => {
      this.showSidebar = !data;
      console.log(this.showSidebar);
    });
  },
  mounted() {
    if (this.showSidebar == false) {
      window.addEventListener("click", this.closeSidebar);
    }
  },
  computed: {
    ...mapGetters({ navLinks: "links" }),
  },
  methods: {
    closeSidebar() {
      console.log("methods - " + this.showSidebar);
      this.showSidebar = true;
      console.log("methods + " + this.showSidebar);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>