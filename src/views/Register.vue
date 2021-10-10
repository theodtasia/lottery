<template>
   <div class= " flex justify-center my-20">
 <div class="max-w-xs bg-gray-400 flex justify-center py-10 px-20 rounded-lg shadow-lg" > 
        <form @submit.prevent="register">
            <div class="form-group">
            <div class="text-gray-700 font-black m-2 py-2">Register</div>
            <input class="text-gray-700 p-2 rounded-full"
                type="email"
                placeholder="Email address..."
                v-model="email"
            />
            <input class="text-gray-700 my-5  p-2 rounded-full"
                type="password"
                placeholder="password..."
                v-model="password"
            />
            <button class="bg-yellow-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="submit">Sign Up</button>
            </div>
        </form>
    </div>
    </div>
</template>


<script>
import firebase from 'firebase';

export default {
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        register() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    alert('Successfully registered! Please login.');
                    this.$router.push('/');
                })
                .catch(error => {
                    alert(error.message);
                });
        },
    },
};
</script>
