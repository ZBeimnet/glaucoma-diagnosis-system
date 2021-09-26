<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div class="flex items-center py-4 px-2">
            <span class="font-semibold text-gray-500 text-lg"
              >GDS HealthCenter</span
            >
          </div>
        </div>
          <!-- Primary Navbar items -->

          <div class="nav flex items-center ml-5 space-x-1">
            <router-link
              to="/dashboard"
              class="
                py-4
                px-2
                text-gray-500
                font-semibold
                hover:text-blue-500
                transition
                duration-300
              "
              v-if="userRole === 'admin'"
              >Dashboard</router-link
            >
            <router-link
              to="/user"
              v-if="userRole === 'admin'"
              class="
                py-4
                px-2
                text-gray-500
                font-semibold
                hover:text-blue-500
                transition
                duration-300
              "
              >Register User</router-link
            >

            <router-link
              to="/reception"
              class="
                py-4
                px-2
                text-gray-500
                font-semibold
                hover:text-blue-500
                transition
                duration-300
              "
              v-if="userRole === 'reception'"
              >Reception</router-link
            >
            <router-link
              to="/patientQueue"
              class="
                py-4
                px-2
                text-gray-500
                font-semibold
                hover:text-blue-500
                transition
                duration-300
              "
              v-if="userRole === 'doctor'"
              >Patient Queue</router-link
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
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "NavbarHealthCenter",
  setup() {
    const store = useStore();

    const userRole = JSON.parse(localStorage.getItem('user')).role;

    const logout = () => localStorage.clear();

    return {
      userRole,
      logout,
    };
  },
});
</script>


<style>
</style>
