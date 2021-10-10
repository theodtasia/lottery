<template>
<div>
<navbar></navbar>
<h1 class="text-6xl font-normal leading-normal mt-4 mb-2 text-pink-800">Home</h1>
<div class="grid grid-cols-5 gap-3 bg-gray-800">
  <div class="col-span-4"> 
      <h2 class="text-2xl font-semibold leading-normal mt-4 mb-2 text-pink-800">
        Pick the numbers </h2>
    <div class="container mx-auto">
     <div class="grid grid-cols-5 gap-3 my-4"> 
        <div v-for="index in 30" :key="index">
            <button  v-on:click="takeValue(index)" type="submit"  class="bg-pink-800 hover:bg-blue-dark text-white md:text-2xl m- font-bold md:w-24 w-14 px-2 py-2 rounded">{{index}}</button>
        </div>
    </div>
    </div>
  </div>
  <div id="show" class="bg-gray-400">  <h2 class="text-2xl font-semibold leading-normal mt-4 mb-2 text-pink-800">
        Your bet </h2>
    <div v-for="number in this.numbers" :key="number"> 
            <button  class="bg-pink-800 hover:bg-blue-dark text-white md:text-2xl m-3 font-bold md:w-24 w-14 px-2 py-2 rounded-full">{{number}}</button>
            <button  v-on:click="deleteValue(number)" type="submit">  <font-awesome-icon :icon="['fas', 'minus-circle']" class="mx-2 text-yellow-700 fa-lg icon alt"/> </button>

    </div>
    <div v-if="this.numbers.length > 4">
    <button  v-on:click="bet(array)" type="submit"  class=" bg-blue-800 hover:bg-blue-dark text-white text-md px-3 md:text-2xl font-bold my-5 py-4 md:px-12 rounded-full">Submit</button>
   </div>

   
  </div>
  </div>
</div>
</template>


<script>

import { mapMutations} from "vuex";

export default {
    name: 'Home',
    data: function() {
    return {
     counter: 0,
     numbers:[],
     array: []
     };
    },
    
    computed:{
     
    ...mapMutations({
      SET_NUMBERS: ['SET_NUMBERS']
     }),
        
    },

    methods: 
    {
    takeValue: function (indexVal) {
        this.counter+=1;
        console.log(this.numbers.includes(indexVal))
        if(this.numbers.includes(indexVal))
        {
            alert("You have already select this number")
        }
        else
        {
            if( this.numbers.length > 4)
            {
                this.numbers.splice(0,1);
                this.numbers.push(indexVal)
            }
            else
            {
                this.numbers.push(indexVal)
            }

        }
        
      console.log(this.numbers)
    },
    
    deleteValue: function(indexVal)
    {
        this.numbers.splice(this.numbers.indexOf(indexVal),1);
        console.log(indexVal);
    },

    bet: function (number) 
    { 
        number=this.numbers;
        this.$store.dispatch("set_numbers", number);
        this.$router.push({name:'Draw'})
       }
  }
};

</script>
<style>
   .white {
       background-color: white;
       width: 200px;
       height: 200px;  

   }
   .blue {
       width: 200px;
       height: 200px;
       background-color: blue;

   }

</style>