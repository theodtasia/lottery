<template>
<div>
 <navbar> </navbar>
 <h1 class="text-6xl font-normal leading-normal mt-4 mb-2 text-pink-800">History</h1>

  <ShowHistory
      v-for="(game, index) in history"
      :key="index"
      :game="game"
       v-on:remove-game="deleteGame"
    />
 </div>
</template>

<script>
import {where,orderBy,query, collection, getDocs, getFirestore } from "firebase/firestore";
import {getAuth,} from "firebase/auth";
import ShowHistory from "../components/ShowHistory.vue";

export default {
  components: { ShowHistory},
   data() 
  {
    return {
      history: [],
    };
  },
  async created() 
  {
    const db = getFirestore();
    var userID = getAuth().currentUser.uid;
    const q = query(collection(db, "history"), orderBy("date","desc"));
    const quer = await getDocs(q);
    quer.forEach((doc) => 
    {    
      console.log(doc.data().userID);
      if (doc.data().user == userID) 
      {
        this.history.push(doc.data());
      }
    });
  },
  methods: {
  deleteGame(g) 
  {
      this.history = this.history.filter
      (
        (game) => game.date.seconds !== g.date.seconds
      );
      const db = getFirestore();
      const q = query(collection(db, "history"), where("date", "==", g.date));
      const quer = getDocs(q);
      console.log(g.date);
      
  }, 
}
}
</script>

