<script setup lang="ts">
import WhatsappIcon from "./icons/Whatsapp.vue";
</script>

<template>
  <a
    href="https://wa.me/918857851277?text=Hi"
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-float-btn"
    title="Chat with Rupam on WhatsApp"
    aria-label="Chat on WhatsApp"
    data-cursor="circle-white"
    data-hoversound="hover"
  >
    <div class="whatsapp-float-pulse"></div>
    <div class="whatsapp-float-icon-wrapper">
      <WhatsappIcon class="whatsapp-float-icon" />
    </div>
    <span class="whatsapp-float-label">Chat on WhatsApp</span>
  </a>
</template>

<style scoped lang="scss">
.whatsapp-float-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  color: #ffffff;
  padding: 10px 18px 10px 12px;
  border-radius: 50px;
  box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4), 0 4px 10px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 15px 35px rgba(37, 211, 102, 0.6), 0 6px 15px rgba(0, 0, 0, 0.4);

    .whatsapp-float-label {
      max-width: 140px;
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    padding: 12px;
    border-radius: 50%;
  }
}

.whatsapp-float-icon-wrapper {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.whatsapp-float-icon {
  width: 100%;
  height: 100%;
}

.whatsapp-float-label {
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.3px;
  white-space: nowrap;
  font-family: inherit;

  @media (max-width: 768px) {
    display: none;
  }
}

.whatsapp-float-pulse {
  position: absolute;
  inset: -4px;
  border-radius: 50px;
  border: 2px solid rgba(37, 211, 102, 0.6);
  animation: pulseRipple 2s infinite ease-out;
  pointer-events: none;

  @media (max-width: 768px) {
    border-radius: 50%;
  }
}

@keyframes pulseRipple {
  0% {
    transform: scale(0.95);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.35);
    opacity: 0;
  }
}
</style>
