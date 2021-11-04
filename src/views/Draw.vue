<template>
 <div>
  <nav  class="bg-black shadow">
    <div class="container flex items-center justify-center px-6 py-8 mx-auto text-gray-100 capitalize">
        <ul class="navbar-nav">
            <router-link  class="border-b-2 border-transparent hover:text-pink-800 hover:border-pink-800 mx-1.5 sm:mx-6" to="" > Home </router-link>
            <router-link class="border-b-2 border-transparent hover:text-pink-800 hover:border-pink-800 mx-1.5 sm:mx-6" to=""> History </router-link>
            <router-link to="" class="border-b-2 border-transparent hover:text-pink-800 hover:border-pink-800 mx-1.5 sm:mx-6" @click.prevent="signOut"> <font-awesome-icon :icon="['fas', 'user-alt']" class="mx-2 fa-lg icon alt"/> Logout</router-link>
        </ul>
    </div>
  </nav>
  <h1 class="text-6xl font-normal leading-normal mt-4 mb-2 text-pink-800">Draw Page</h1>
  <div class="grid grid-cols-2 gap-3 bg-gray-800">    
    <div class="col-span-1">    
      <h2 class="text-2xl font-semibold leading-normal mt-4 mb-2 text-pink-800"> Draw </h2>
      <div class="flex justify-center flex-row m-10 gap-4  md:grid-rows">
        <ul id="dnum" class=" flex justify-center">
          <li
            v-for="dnum in 5"
            :key="dnum"
            :class="['bg-pink-800','hover:bg-blue-dark','w-9', 'm-1','p-2', 'text-sm', 'md:text-3xl', 'text-white', 'font-bold', 'md:py-6', 'md:h-20', 'md:w-20', 'rounded-full']"
          ></li>
        </ul>
     </div>
    </div>
    <div class="bg-gray-400"> 
     <h2 id ="title" class="text-2xl font-semibold leading-normal mt-4 mb-2 text-pink-800"> Your Bet</h2> 
     <div class="flex justify-center flex-row m-10 gap-4  md:grid-rows">
       <ul id="Wnum" class=" flex justify-center">
          <li
            v-for="num in bet"
            :key="num"
            :class="['bg-pink-800','hover:bg-blue-dark','w-9', 'm-1','p-2', 'text-sm', 'md:text-3xl', 'text-white', 'font-bold', 'md:py-6', 'md:h-20', 'md:w-20', 'rounded-full']"
            
          >{{ num}}</li>
       </ul> 
     </div>
     <h2 class="flex justify-end text-2xl font-semibold leading-normal m-4 p-4 text-pink-800"> Total amount: {{totalAmount()}}</h2> 
     
     <div v-if="finish">
      <save :amount="this.amount" :win="this.win" :ndraw="this.ndraw" :status="this.status"></save>
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
          win:[],
          ndraw:[],
          numbers:[],
          finish: false,
          amount: 0,
          status: "Lost"
    };
  },
        
  computed:{
      ...mapGetters({ user: ['GET_USER']}),
       
      bet() {
            return this.$store.getters.user.numbers;
      }
  },
         
  mounted: function() {
   if (this.bet.length != 0) {
      this.start = true;
      setTimeout(() => {
         const run = (ms) => new Promise((num) => setTimeout(num, ms)); this.doDraw(run);}, 3000);
       }
   },

  methods: {
    async doDraw(t) {
      var num = this.draw();
      this.ndraw.push(num);
      var li = document.getElementById("dnum").querySelectorAll("li")[0];
      li.innerText = num;
      li.value = num;
      if (this.validate(num)) {
        var k = this.bet.indexOf(num);
        li = document.getElementById("Wnum").querySelectorAll("li")[k];
        li.classList.remove("bg-pink-800");
        li.classList.add("bg-green-600");
        this.win.push(num);
      } 
      
      for (var i = 1; i < 5; i++) {
        await t(4000);
        num = this.draw();
        this.ndraw.push(num);
        li = document.getElementById("dnum").querySelectorAll("li")[i];
        li.innerText = num;
        li.value = num;      
        
        if(this.win.length===3){
          this.status = "Win";
          var title = document.getElementById("title");
          title.classList.remove("text-pink-800");
          title.classList.add("text-green-600");
        }

        if (this.validate(num)) {
          this.win.push(num);
          k = this.bet.indexOf(num);
          li = document.getElementById("Wnum").querySelectorAll("li")[k];
          li.classList.remove("bg-pink-800");
          li.classList.add("bg-green-600");
        } 
            
      }
      await t(2000);
      this.finish = true;
    },
    
    draw() {
      var num;

      do {
       num = Math.floor(Math.random() * 30) + 1;
      }
      while (this.ndraw.includes(num));
      return num;
    },

    validate(number) {
      for(var j=0; j<5; j++){
          if(this.bet[j]===number){
             return true;
           }
      }
      return false;
    },

    totalAmount(){
      var amount=0;
      if(this.win.length===3){
        this.amount=5;
      }
      else if(this.win.length===4){
        this.amount=10;
      }
      else if(this.win.length===5){
        this.amount=20;
      }
      return amount;
    }
  }
}
</script>


