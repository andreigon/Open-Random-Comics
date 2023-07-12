<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Background',
  data() {
    return {
      photoUrl: '@/assets/HeaderImage.png'
    }
  },

  mounted() {},

  methods: {}
})
</script>

<template>
  <div class="container">
    <div class="header">
      <img
        class="header-image"
        src="@/assets/HeaderImage.png"
        alt="IMAGE ERORR"
        title="Header Image"
      />

      <span class="header-image-text">TEST TASK FOR SOME WEB AGENCY</span>
      <span class="header-image-author"> by GonAndrei</span>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  height: 100%;
  width: 100%;
}
.header {
  display: flex;
  position: relative;
  border: none;
  box-sizing: border-box;
  width: 100%;
  height: 30%;
  &-image {
    min-width: 300px;
    width: 100%;
    max-height: 508px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin-bottom: 80px;
    &-text {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      font-size: 44px;
      position: absolute;
      width: 100%;
      margin-top: 15%;
      text-transform: uppercase;
      color: white;
      white-space: nowrap;
      animation: showTop 2s;
      z-index: 1;
    }
    &-author {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 300;
      font-size: 25px;
      position: absolute;
      width: 100%;
      margin-top: 15px;
      // text-transform: uppercase;
      color: white;
      animation: showAuthor 3s;
      z-index: 1;
    }

    @keyframes showAuthor {
      0% {
        opacity: 0;
        transform: translatex(-300%);
      }
      100% {
        opacity: 1;
        transform: translatex(auto);
      }
    }
    @keyframes showTop {
      0% {
        opacity: 0;
        transform: translateY(-900%);
      }
      100% {
        opacity: 1;
        transform: translateY(auto);
      }
    }
  }
}
</style>
