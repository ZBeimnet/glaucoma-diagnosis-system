<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div class="flex items-center py-4 px-2">
            <span class="font-semibold text-gray-500 text-lg"
              >GDS Admin</span
            >
          </div>
        </div>
          <!-- Primary Navbar items -->

          <div class="nav flex items-center ml-5 space-x-1">
            <router-link
              to="/admin/dashboard"
              class="
                py-4
                px-2
                text-gray-500
                font-semibold
                hover:text-blue-500
                transition
                duration-300
              "
              >Dashboard</router-link
            >

            <router-link
              to="/admin/manage"
              class="
                py-4
                px-2
                text-gray-500
                font-semibold
                hover:text-blue-500
                transition
                duration-300
              "
              >Manage Health center</router-link
            >
          </div>
          <!-- Secondary Navbar items -->
          <div class="hidden md:flex items-center space-x">
            <router-link
              to="/"
              class="
                py-2
                px-2
                font-medium
                text-gray-500
                rounded
                hover:bg-blue-500
                hover:text-white
                transition
                duration-300
              "
              @click="logout"
              >Log out</router-link
            >
          </div>
        </div>
      </div>
    
  </nav>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "NavbarAdmin",
  setup() {
    const store = useStore();
    
    const logout = () => localStorage.clear();

    return {
      logout
    };
  }
});
</script>


<style>
</style>
