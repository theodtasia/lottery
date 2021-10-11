<template>
<div>
<transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">

            <div class="font-bold text-lg">
              <slot name="header">
               Total Amount Won: {{amount}} €.
              </slot>
            </div>
            <div class="modal-body">
              <slot name="body">
                You' ve got {{ this.win.length }}/5 Numbers.
              </slot>
            </div>
        
         <router-link to="/Home">
         <button
          class=" bg-yellow-600 hover:bg-blue-dark text-white text-md px-3 md:text-l font-bold my-5 py-4 md:px-5 rounded-full"
         >Go Back </button>
      </router-link>
      <button
        class=" bg-yellow-600 hover:bg-blue-dark text-white text-md px-3 m-1 md:m-2 md:text-l font-bold my-5 py-4 md:px-5 rounded-full"
        @click="save" >Save</button>

          </div>
        </div>
      </div>
    </transition>
    </div>
</template>

<script>

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import '@firebase/firestore'

export default {
  name: "save",
  props: 
  {
    amount: 
    {
     default: 0
    },
    win:
    {
     default: []
    },
    status:
    {
        default:""
    }
  },


  methods: {
 
    async save() 
    {
       const firestore = firebase.firestore();
       var user = firebase.auth().currentUser.uid;
       const db = firebase.getFirestore();
       try {
        const docRef = await firestore.addDoc(firestore.collection(db, "history"), {
          amount: this.amount,
          numbers: this.win,
          status: "win",
          user: user,
          date: firestore.Timestamp.fromDate(new Date()),
          
        });
        alert(`Game ${docRef.id} was saved to history.`),
          this.$router.push("/");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
       },
     
    },
}

</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(81, 165, 109, 0.342);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>