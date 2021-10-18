<template>
<div class="grid grid-cols-3 gap-3">
    <div></div>
  <div class=" border-4 p-1 m-auto text-align-center rounded w-80 border-gray-400 text-center mb-5">
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
      <p class="px-1 " v-for="num in game.playedNumbers" :key="num" > {{num}}  </p>
    </div>
     <div class="mx-2 flex">
      <p class="font-bold">Drawn Numbers: </p>
      <p class="px-1" v-for="num in game.drawNumbers" :key="num" > {{num}}  </p>
    </div>
    <div class="mx-2 flex flex-grow">
      <p class="font-bold">Total amount: </p>
      <p class="px-1"> {{game.amount}} </p>
    </div>
    <button
      class="
        bg-red-500
        text-gray-200
        rounded
        hover:bg-red-400
        px-2
        py-1
        focus:outline-none
        inline-flex
        align-middle
        text-xs
        object-right
      "
      @click="removeGame(game)"
    >
      X
    </button>
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
   methods: {
    removeGame(game) {
      this.$emit("remove-game", game);
    }
   }
};
</script>

