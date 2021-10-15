<template>
<div>
 <navbar> </navbar>
 <h1 class="text-6xl font-normal leading-normal mt-4 mb-2 text-pink-800">History</h1>

  <ShowHistory
      v-for="(game, index) in history"
      :key="index"
      :game="game"
    />
 </div>
</template>

<script>
import { collection, getDocs, getFirestore } from "firebase/firestore";
import {getAuth,} from "firebase/auth";
import ShowHistory from "../components/ShowHistory.vue";

export default {
  components: { ShowHistory},
  async created() 
  {
    
    const db = getFirestore();
    var userID = getAuth().currentUser.uid;
    const query = await getDocs(collection(db, "history"));
    query.forEach((doc) => 
    {    
      console.log(doc.data().userID);
      if (doc.data().user == userID) 
      {
        this.history.push(doc.data());
      }
    });
  },
  data() 
  {
    return {
      history: [],
    };
  },
  
};
</script>

<style></style>