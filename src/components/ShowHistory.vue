<template>
  <div class="grid grid-cols-1 md:grid-cols-3 md:gap-3">
    <div class=" border-4 p-1 m-auto text-align-center rounded w-80 border-gray-400 text-center mb-5">
      <div class="item" v-for="index in 6" :key="index">
          <p class="font-bold"> {{content[index].title}} </p>
          <p v-if="!Array.isArray(content[index].item)" class="px-1"> {{content[index].item}} </p>
          <p class="px-1" v-else v-for="num in content[index].item" :key="num" > {{num}} </p>
      </div>
     <button
      class="
        bg-red-500  text-gray-100 rounded font-bold m-2  hover:bg-red-400 px-2 py-1 focus:outline-none
        inline-flex align-middle text-md"
      @click="deleteGame(game)"
     >
      delete
     </button>
    </div>
  </div>
</template>

<script>

export default {
  name: "ShowHistory",
  props: {
    game: [],
  },
  data: function() {
    return {
      content: 
      [
        {},
      {title:'Date: ', item: this.game.date.toDate().toDateString()},
      {title:'Status: ', item: this.game.status},
      {title:'Total Amount: ', item: this.game.amount},
      {title:'Winning Numbers: ', item: this.game.winningNumbers.length === 0 ? "-" : this.game.winningNumbers},
      {title:'Draw Numbers: ', item: this.game.drawNumbers},
      {title:'Played Numbers: ', item: this.game.playedNumbers},
      ]
    }
  },
   methods: {
    deleteGame(game) {
      this.$emit("remove-game", game);
    },
   }
}
</script>