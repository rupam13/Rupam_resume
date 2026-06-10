<script setup lang="ts">
import { useRole } from "../composables/useRole";
import Button from "./Button.vue";
import { computed } from "vue";

const { currentRole, toggleRole } = useRole();

const label = computed(() => {
  return currentRole.value === "servicenow" ? "Switch to AI Role" : "Switch to ServiceNow Role";
});
</script>

<template>
  <div class="role-switcher">
    <Button
      variant="border"
      size="sm"
      @click="toggleRole"
      data-cursor="circle-white"
      data-sound="click"
      data-hoversound="hover"
    >
      {{ label }}
    </Button>
  </div>
</template>

<style scoped lang="scss">
.role-switcher {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
  
  @include mixins.mq("md") {
    top: 24px;
    right: 24px;
    bottom: auto;
  }
}
</style>
