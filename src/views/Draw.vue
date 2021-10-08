<template>
<div>
  <navbar></navbar>
  <h1 class="text-6xl font-normal leading-normal mt-4 mb-2 text-pink-800">Draw Page</h1>
  <div class="grid grid-cols-2 gap-3 bg-gray-800">
    
    <div class="col-span-1"> 
     <h2 class="text-2xl font-semibold leading-normal mt-4 mb-2 text-pink-800"> Your Bet</h2> 
     <div class="flex justify-center flex-row m-10 gap-4  md:grid-rows">
      <div v-for="bets in bet" :key="bets"> 
            <button class="bg-pink-800 hover:bg-blue-dark w-15 my-1 py-2 px-2 text-sm md:text-3xl text-white font-bold md:h-20 md:w-20 rounded">{{bets}}</button>
    </div>
    
     </div>
    </div>
    
    <div id="show" class="bg-gray-400"> 
      <h2 class="text-2xl font-semibold leading-normal mt-4 mb-2 text-pink-800"> Draw </h2>
      
      <div class="flex justify-center flex-row m-10 gap-4  md:grid-rows">
        <ul class=" flex justify-center">
        
        </ul>
      <div v-for="bets in 5" :key="bets"> 
            <button id="bets" class="bg-pink-800 hover:bg-blue-dark w-15 my-1 py-2 px-2 text-sm md:text-3xl text-white font-bold md:h-20 md:w-20 rounded">{{bets.value}}</button>
     </div>
     </div>
      
     </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
        name: 'Draw',
        data: function() 
        {
          return {
          name: "",
          ndraw:[],
          numbers:[],
          start: false,
          finished: false,
         };
        },
        computed:
         {
          ...mapGetters({
          user: ['GET_USER']}),

        bet() {
            return this.$store.getters.user.numbers;
        }
        },
         
         mounted: function() 
         {
          if (this.bet.length != 0) 
            {
            this.start = true;
            setTimeout(() => {
             const run = (ms) => new Promise((num) => setTimeout(num, ms)); this.doDraw(run);}, 3000);
           }
         },
       methods: {
         async doDraw(t) 
         {
            for (var i = 0; i < 5; i++) 
            {
             await t(4000);
             var num = this.draw();
             this.ndraw.push(num);
             alert(num)
              
            }
             await t(3000);
             this.start = false;
             this.finished = true;
        },
    
    
        draw() 
        {
          var num;
          do 
          {
            num = Math.floor(Math.random() * 30) + 1;
          }
          while (this.ndraw.includes(num));
          console.log(num)
          return num;
        },

       validate(number) 
       {
        if (this.getSpecificNumber(number).length >= 1) 
        {
          this.winningNumbers.push(number);
          return true;
        }
        return false;
       },
      }
        
}
</script>


