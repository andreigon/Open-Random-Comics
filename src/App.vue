<script lang="ts">
import { defineComponent } from 'vue'
import Background from './components/Background.vue'
import MainBlock from './components/Main-Block.vue'
import Buttons from './components/Buttons.vue'
import { ComicsInterface } from '@/types/comicInt'

// import vue from '@vitejs/plugin-vue'
// import API from './components/ComicsComponent.vue'

interface ComponentData {
  comicPapper: Array<ComicsInterface>
}

export default defineComponent({
  name: 'ComponentData',
  components: {
    Background,
    MainBlock
    // Buttons,
    // API
    //  your component
  },

  data(): ComponentData {
    return {
      comicPapper: [
        {
          title: '',
          num: '',
          image: ''
        }
      ]
    }
  },

  // created: function() {
  //   this.fetchData();
  // },

  methods: {
    // fetchData: function(){
    //   this.$http.get('https://xkcd.com/info.0.json')
    //   .then(response=>{
    //     this.getComics=response.json
    //   console.log(response.json)
    // })
    // }
  }
})
</script>

<template>
  <div id="app">
    <!-- {{ getComics }} -->
    <div class="top"><Background /></div>
    <!-- <div class="name">Bad Map Projection: Liquid Resize</div> -->
    <div class="buttons"><Buttons /></div>
    <div class="MainBBlock">
      <MainBlock />
      <!-- <API/> -->
    </div>
    <div class="buttons"><Buttons /></div>
  </div>
</template>

<style scoped lang="scss">
#app {
  width: 100%;
  max-width: 1920px;
  align-items: center;
  justify-content: center;
  min-height: 1623px;
  max-height: auto;
  background-color: #0e2f51;
}

.name {
  width: auto;
  height: auto;
  display: flex;
  color: aliceblue;
  align-items: center;
  justify-content: center;
  margin: 30px 50%;
  white-space: nowrap;
}
</style>
