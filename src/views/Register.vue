<template>
   <div class= " flex justify-center my-20">
 <div class="max-w-xs bg-green-100 flex justify-center py-10 px-20 rounded-lg shadow-lg" > 
        <form @submit.prevent="register">
            <div class="form-group">
            <div class="text-gray-700 font-bold py-2">Register</div>
            <input class="text-gray-700 py-2"
                type="email"
                placeholder="Email address..."
                v-model="email"
            />
            <input class="text-gray-700 my-5  py-2"
                type="password"
                placeholder="password..."
                v-model="password"
            />
            <button class="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="submit">Register</button>
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
