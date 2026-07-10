<script setup lang="ts">
import Button from "./Button.vue";
import { locale } from "../i18n/store";

// Language switch disabled - English only
</script>

<template>
  <Button
    variant="border"
    size="sm"
    disabled
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
    >{{ locale }}</Button
  >
</template>
