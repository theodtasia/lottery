<template>
  <div class=" border-4 my-5 mx-auto p-1 rounded border-black  w-1/2 text-center mb-5">
    <div class="mx-2 flex">
      <p class="font-bold">Date: </p>
      <p class="px-1">{{ game.date.toDate().toDateString() }}</p>
    </div>
     <div class="mx-2 flex">
      <p class="font-bold">Status: </p>
       <p class="px-1"> {{game.status}} </p>
    </div>
    <div class="mx-2 flex">
      <p class="font-bold">Winning Numbers: </p>
      <p class="px-1" v-for="num in game.winningNumbers" :key="num" > {{num}}  </p>
    </div>
    <div class="mx-2 flex">
      <p class="font-bold">Played Numbers: </p>
      <p class="px-1" v-for="num in game.playedNumbers" :key="num" > {{num}}  </p>
    </div>
     <div class="mx-2 flex">
      <p class="font-bold">Drawn Numbers: </p>
      <p class="px-1" v-for="num in game.drawNumbers" :key="num" > {{num}}  </p>
    </div>
    <div class="mx-2 flex flex-grow">
      <p class="font-bold">Total amount: </p>
      <p class="px-1"> {{game.amount}} </p>
    </div>
  </div>

    
</template>

<script>
export default 
{
  name: "ShowHistory",
  props: 
  {
    game: [],
  },
};
</script>

