<template>
  <nav  class="bg-black shadow">
    <div class="container flex items-center justify-center px-6 py-8 mx-auto text-gray-100 capitalize">
        <ul class="navbar-nav">
            <router-link  class="border-b-2 border-transparent hover:text-pink-800 hover:border-pink-800 mx-1.5 sm:mx-6" to="Home" > Home </router-link>
            <router-link class="border-b-2 border-transparent hover:text-pink-800 hover:border-pink-800 mx-1.5 sm:mx-6" to="History"> History </router-link>
            <router-link to="/" class="border-b-2 border-transparent hover:text-pink-800 hover:border-pink-800 mx-1.5 sm:mx-6" @click.prevent="signOut"> <font-awesome-icon :icon="['fas', 'user-alt']" class="mx-2 fa-lg icon alt"/> Logout</router-link>
        </ul>
        </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Login"
          });
        });
    }
  }
};
</script>

