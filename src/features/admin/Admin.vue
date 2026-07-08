<script setup lang="ts">
import { ref } from "vue";
import AdminLogin from "./components/AdminLogin.vue";
import AdminDashboard from "./components/AdminDashboard.vue";

const isAuthenticated = ref(false);

const handleLogin = (credentials: { username: string; password: string }) => {
  // Store authentication in sessionStorage (cleared when tab closes)
  sessionStorage.setItem("adminAuth", JSON.stringify(credentials));
  isAuthenticated.value = true;
};

const handleLogout = () => {
  sessionStorage.removeItem("adminAuth");
  isAuthenticated.value = false;
};

// Check if already authenticated on mount
if (sessionStorage.getItem("adminAuth")) {
  isAuthenticated.value = true;
}
</script>

<template>
  <div class="admin-page">
    <AdminLogin v-if="!isAuthenticated" @login="handleLogin" />
    <AdminDashboard v-else @logout="handleLogout" />
  </div>
</template>

<style scoped lang="scss">
.admin-page {
  width: 100%;
  min-height: 100vh;
}
</style>
