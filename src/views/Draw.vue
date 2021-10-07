<template>
<div>
  <navbar></navbar>
  <h1 class="text-6xl font-normal leading-normal mt-4 mb-2 text-pink-800">Draw Page</h1>
  <div class="grid grid-cols-2 gap-3 bg-gray-800">
    
    <div class="col-span-1"> 
     <h2 class="text-2xl font-semibold leading-normal mt-4 mb-2 text-pink-800"> Your Bet</h2>
      <div v-for="number in this.numbers" :key="number"> 
            <button  v-on:click="takeValue(number)" type="submit"  class="bg-pink-800 hover:bg-blue-dark text-white font-bold h-12 w-12 my-3 py-2 px-4 rounded">{{number}}</button>
            <button  v-on:click="deleteValue(number)" type="submit">  <font-awesome-icon :icon="['fas', 'minus-circle']" class="mx-2 text-yellow-700 fa-lg icon alt"/> </button>
            <h1>{{ msg }}, your id is {{ id }}</h1>
    </div>
    </div>
    
    <div id="show" class="bg-gray-400"> 
      <h2 class="text-2xl font-semibold leading-normal mt-4 mb-2 text-pink-800"> Draw </h2>
     </div>
  </div>
</div>
</template>

<script>
export default {
        name: 'Draw',
        data () {
            return {
                id: 0,
                ndraw: []
            }
        },
        created() {
            this.id = this.$route.params.id;
        },
        methods: {
          
         getRandomNumberBetween: function (min,max)
         {
             return Math.floor(Math.random()*(max-min+1)+min);
          } 
        }
    }
</script>