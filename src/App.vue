<script lang="ts">
import { defineComponent } from 'vue'
import BackgroundBlock from './components/Background-Block.vue'
import MainBlock from './components/Main-Block.vue'
import { ComicsInterface } from '@/types/comicInt'

interface ComponentData {
  comicPapper: Array<ComicsInterface>
}

export default defineComponent({
  name: 'ComponentData',
  components: {
    BackgroundBlock,
    MainBlock
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

  methods: {}
})
</script>

<template>
  <div id="app">
    <div class="top"><BackgroundBlock /></div>
    <div class="MainBlock">
      <MainBlock />
    </div>
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
</style>
