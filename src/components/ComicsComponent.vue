/** * ШАГИ: * 1. создайте класс requestController и определите необходимые переменные для вызова API
* 2. Создайте метод, который будет получать текущий (последний добавленный) комикс, и установите
currentComicsNumber и * maxComicsNumber соответственно, вызовите этот метод при загрузке * 3.
Зарегистрируйте событие для случайного номера комикса и добавьте всю цепочку событий, чтобы
отобразить его * 4. Добавьте в приложение предыдущий / следующий, первый / последний и получите
функциональность Comic by ID * 5. Соответствующим образом отрегулируйте состояния пользовательского
интерфейса https://xkcd.com/info.0.json */

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import { info } from 'console'
import { title } from 'process'

export default defineComponent({
  name: 'API',
  data() {
    return {
      info: [],
      errors: []
    }
  },
  created() {
    // axios.get('https://xkcd.com/info.0.json')
    // .then(response =>{
    //   this.info=response.data
    //   console.log(response)
    // })
    // .catch(e=>{
    //   this.errors.push(e)
    // })
  },

  mounted() {
    //   axios
    //     .get('https://xkcd.com/info.0.json')
    //     .then(response => (this.info = response.data.title));
    // .catch(error => console.log(error));
    axios
      .get('/api/info.0.json')
      .then((response) => {
        console.log(response.data)
        this.info = response.data.title
      })
      .catch((error) => {
        console.log(error)
      })
  },

  methods: {}
})
</script>

<template>
  <div class="body">{{ info }}</div>
</template>

<style>
.body {
  color: rgb(177, 179, 180);
}
</style>
