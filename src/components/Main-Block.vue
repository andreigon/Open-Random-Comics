<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import Buttons from './Buttons.vue'

// interface ComponentData {
//   comicPapper: Array<ComicsInterface>
// }

export default defineComponent({
  name: 'MainBlock',



  components: {
    Buttons
  },
  data() {
    return {
      ComicsTitle: '',
      error: [],
      ComicsData: '',
      currentComicsNumber: '',
      // randomNumber: '',
      min: 1,
      max: 2800,
      ComicsImage: ''
    }
  },

  mounted() {
    this.getRandomComicsNumber()
  },

  methods: {
    getRandomComicsNumber() {
      this.randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
      this.currentComicsNumber=this.randomNumber
      this.getComics()
    },

    getComicasNumberPlus() {
      this.currentComicsNumber=++this.currentComicsNumber
      this.getComics()
    },

    getComicasNumberMinus() {
      this.currentComicsNumber=--this.currentComicsNumber
      this.getComics()
    },

    getComicsNumberMin(){
      this.currentComicsNumber=this.min
      this.getComics()
    },

    getComicsNumberMax(){
      this.currentComicsNumber=this.max
      this.getComics()
    },

    
    getComics() {
      axios
        .get('/apiURL/' + this.currentComicsNumber + '/info.0.json')
        .then((response) => {
          console.log(response.data)
          this.ComicsTitle = response.data.title
          console.log(response.data.img)
          this.ComicsImage = response.data.img
          const image1 = (response.data.img('image1').src = response.data.img)
          this.ComicsImage = 'image1'
          console.log(this.ComicsImage)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
})
</script>

<template>
  <div class="title">{{ ComicsTitle }} </div>
  <div class="mid">
      <div class="ButtonContaineer">
      <Button class="change-rotate" @click="getComicsNumberMin()" >>|</Button>
      <button class="next-rotate" @click="getComicasNumberMinus()">></button>
      <button class="random" @click="getRandomComicsNumber ()">RANDOM</button>
      <button class="next" @click="getComicasNumberPlus()">></button>
      <Button class="change"  @click="getComicsNumberMax()">>|</Button>
    </div>
  </div>
  <div class="api"><img :src="ComicsImage">
    <!-- <div class="comics"> </div> -->
  </div>
  <div class="mid">
      <div class="ButtonContaineer">
      <Button class="change-rotate" @click="getComicsNumberMin()">>|</Button>
      <button class="next-rotate" @click="getComicasNumberMinus()">></button>
      <button class="random" @click="getRandomComicsNumber()">RANDOM</button>
      <button class="next" @click="getComicasNumberPlus()">></button>
      <Button class="change" @click="getComicsNumberMax()">>|</Button>
    </div>
  </div>
</template>

<style lang="scss">
.api {
  // max-width: auto;
  // width: auto;
  max-height: auto;
  max-width: 800px;

  margin: 3% auto;
  padding: 8px;
  // width: 50%;
  text-align: center;
  // overflow-clip-margin: content-box;
  display: flex;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  /* margin-top: 30%; */

  // margin: 15px 25%;
  // position: relative;
  /* height: 1115px; */
  /* width: 100%;
    height: 70%; */
}
// .comics {
//   max-width: 100%;
//   max-height: 100%;
//   margin: 3% 25%;
  
//   display: flex;
//   background-color: #ffffff;
//   align-items: center;
//   justify-content: center;
// }
.title {
  width: auto;
  height: auto;
  display: flex;
  color: aliceblue;
  align-items: center;
  justify-content: center;
  margin: 30px 50%;
  white-space: nowrap;
}

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
  min-height: 65px;
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
    min-width: 80px;
  min-height: 65px;
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
  min-width: 60px;
  min-height: 60px;
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
    min-width: 60px;
    min-height: 60px;
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
