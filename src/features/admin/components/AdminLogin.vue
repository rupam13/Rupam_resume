<script setup lang="ts">
import { ref } from "vue";

const username = ref("");
const password = ref("");
const error = ref("");
const isLoading = ref(false);

const emit = defineEmits<{
  login: [{ username: string; password: string }];
}>();

const handleLogin = async () => {
  error.value = "";

  if (!username.value || !password.value) {
    error.value = "Please enter username and password";
    return;
  }

  isLoading.value = true;

  // Simulate login delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (username.value === "rupam13" && password.value === "123456890") {
    emit("login", { username: username.value, password: password.value });
    username.value = "";
    password.value = "";
  } else {
    error.value = "Invalid username or password";
  }

  isLoading.value = false;
};

const handleKeypress = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    handleLogin();
  }
};
</script>

<template>
  <div class="admin-login">
    <div class="admin-login-container">
      <div class="admin-login-box">
        <h1 class="admin-login-title">Admin Panel</h1>
        <p class="admin-login-subtitle">Manage Your Portfolio Projects</p>

        <form @submit.prevent="handleLogin" class="admin-login-form">
          <div class="admin-login-group">
            <label class="admin-login-label">Username</label>
            <input
              v-model="username"
              type="text"
              class="admin-login-input"
              placeholder="Enter username"
              :disabled="isLoading"
              @keypress="handleKeypress"
            />
          </div>

          <div class="admin-login-group">
            <label class="admin-login-label">Password</label>
            <input
              v-model="password"
              type="password"
              class="admin-login-input"
              placeholder="Enter password"
              :disabled="isLoading"
              @keypress="handleKeypress"
            />
          </div>

          <div v-if="error" class="admin-login-error">{{ error }}</div>

          <button
            type="submit"
            class="admin-login-button"
            :disabled="isLoading"
          >
            {{ isLoading ? "Logging in..." : "Login" }}
          </button>
        </form>

        <p class="admin-login-info">
          Demo: rupam13 / 123456890
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;

  &-container {
    width: 100%;
    max-width: 400px;
  }

  &-box {
    background: white;
    border-radius: 12px;
    padding: 40px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  }

  &-title {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 8px;
    text-align: center;
    color: #333;
  }

  &-subtitle {
    font-size: 14px;
    color: #666;
    text-align: center;
    margin-bottom: 30px;
  }

  &-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &-label {
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }

  &-input {
    padding: 12px 16px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 14px;
    transition: border-color 0.2s;

    &:focus {
      outline: none;
      border-color: #667eea;
    }

    &:disabled {
      background-color: #f5f5f5;
      cursor: not-allowed;
    }
  }

  &-error {
    padding: 12px;
    background-color: #fee;
    border: 1px solid #fcc;
    border-radius: 8px;
    color: #c33;
    font-size: 14px;
  }

  &-button {
    padding: 12px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover:not(:disabled) {
      opacity: 0.9;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  &-info {
    margin-top: 20px;
    font-size: 12px;
    color: #999;
    text-align: center;
  }
}
</style>
