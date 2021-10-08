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
      <div v-for="bets in ndraw" :key="bets"> 
            <button class="bg-pink-800 hover:bg-blue-dark w-15 my-1 py-2 px-2 text-sm md:text-3xl text-white font-bold md:h-20 md:w-20 rounded">{{bets}}</button>
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
        data: function() {
          return {
          name: "",
          ndraw:[],
          numbers:[],
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
          this.doDraw()
         },
        
        methods: {
          
         show: function()
         {
           console.log(this.doDraw.this.ndraw);
         },
        
        Draw: function()
            {  
             var n;
             n = Math.floor(Math.random()*30)+1;
             var counter = 0;
             while(counter!=5)
             {
               if(!this.ndraw.includes(n))
               {
               this.ndraw.push(n);
               n = Math.floor(Math.random()*30)+1;
               counter+=1
               }

             }
            return this.ndraw
             
             },
         
         checkBet: function()
        {
          for(let i = 0; i < this.numbers.length; i++) {
          
             for(let j = 0; j < this.ndraw.length; j++) {
              
                 if(this.numbers[i] === this.ndraw[j]) {
                      console.log("sss")
                      alert(this.numbers[i])
                }
          }
          }
        },
        doDraw: function()
        {
           setTimeout(function(){this.Draw()}.bind(this), 3000);
         
        },

        
    
        }
    
            
            
        
        
        
        

          
}
</script>


