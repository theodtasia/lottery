<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div ref="total_amount" class="font-bold text-lg">
              Total Amount Won: {{ amount }} €.
            </div>
            <div class="modal-body">You' ve got {{ win.length }}/5 Numbers.</div>
            <router-link to="/Home">
              <button
                class=" bg-yellow-600 hover:bg-blue-dark text-white text-md px-3 md:text-l font-bold my-5 py-4 md:px-5 rounded-full"
              >
                Go Back
              </button>
            </router-link>
            <button
              class=" bg-yellow-600 hover:bg-blue-dark text-white text-md px-3 m-1 md:m-2 md:text-l font-bold my-5 py-4 md:px-5 rounded-full"
              @click="save"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export default {
  name: 'Save',
  props: {
    amount: {
      type: Number,
    },
    win: {
      type: Array,
      default: () => [0],
    },
    status: {
      default: 'Lost',
    },
    ndraw: {
      type: Array,
      default: () => [0],
    },
  },
  methods: {
    bet() {
      return this.$store.getters.user.numbers
    },

    async save() {
      var userID = getAuth().currentUser.uid
      const db = getFirestore()
      try {
        const docRef = await addDoc(collection(db, 'history'), {
          amount: this.amount,
          user: userID,
          date: Timestamp.fromDate(new Date()),
          playedNumbers: this.bet(),
          winningNumbers: this.win,
          drawNumbers: this.ndraw,
          status: this.status,
        })
        alert(`Game ${docRef.id} is saved.`), this.$router.push('/home')
      } catch (e) {
        console.error('Error: ', e)
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
