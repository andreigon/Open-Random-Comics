<script lang="ts">
import { defineComponent } from 'vue'
import getRandomComicsNumber from './Main-Block.vue'
export default defineComponent({
  name: 'Buttons',
  components: {
    // MainBlock
  },
  data() {
    return {}
  },

  mounted() {},

  methods: {
    // getRandomComicsNumber() {
    //     const min:number = 1;
    //     const max:number = 2789;
    //     const randomNumber:number = Math.floor(Math.random() * (max - min + 1)) + min;
    //     return randomNumber;
    // },
    // requestPreviousComics() {
    //     const requestedComicsNumber = this.currentComicsNumber - 1;
    //     console.log({ requestedComicsNumber });
    //     if (requestedComicsNumber < 1) return;
    //     // this.getComicsByNumber(requestedComicsNumber);
    // },
    // requestNextComics() {
    //     const requestedComicsNumber = this.currentComicsNumber + 1;
    //     if (requestedComicsNumber > this.maxComicsNumber) return;
    //     // this.getComicsByNumber(requestedComicsNumber);
    // }
  }
})
</script>

<template>
  <!-- <div class="ButtonContaineer">
    <Button class="change-rotate">>|</Button>
    <button class="next-rotate">></button>
    <button class="random" @click="getRandomComicsNumber">RANDOM</button>
    <button class="next">></button>
    <Button class="change">>|</Button>
    
  </div> -->
</template>

<style lang="scss">
.ButtonContaineer {
  display: flex;
  // margin: 0 50%;
  max-width: 1920px;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 65px;
}
.change {
  margin: 0 45px;
  min-width: 80px;
  height: 65px;
  background-color: #0a2037;
  border: none;
  color: #ffffff;
  &:hover {
    background-color: #f26a15;
  }
  &:active {
    background-color: #a3501d;
  }
  &-rotate {
    margin: 0 45px;
    border: none;
    rotate: 180deg;
    width: 80px;
    height: 65px;
    background-color: #0a2037;
    color: #ffffff;
    &:hover {
      background-color: #f26a15;
    }
    &:active {
      background-color: #a7460a;
    }
  }
}

.next {
  margin: 0 45px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f26a15;
  border: none;
  color: #ffffff;
  &:hover {
    background-color: #a3501d;
  }
  &:active {
    background-color: #0a2037;
  }
  &-rotate {
    margin: 0 45px;
    rotate: 180deg;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #f26a15;
    border: none;
    color: #ffffff;
    &:hover {
      background-color: #a3501d;
    }
    &:active {
      background-color: #0a2037;
    }
  }
}

.random {
  margin: 45px 45px;
  width: 320px;
  height: 65px;
  font-family: 'Roboto';
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  background-color: #f26a15;
  text-align: center;
  border: none;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  &:hover {
    background-color: #f5f5f5;
    color: #f26a15;
  }
  &:active {
    border: 1px solid #f26a15;
  }
}
</style>
