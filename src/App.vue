<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import { getAuth, signOut,} from "firebase/auth";
import './assets/index.css';
import './assets/index.css';

export default {
    methods: {
        logout() {
                getAuth()
                signOut()
                .then(() => {
                    alert('Successfully logged out');
                    this.$router.push('/');
                })
                .catch(error => {
                    alert(error.message);
                    this.$router.push('/');
                });
        },
    },
};
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

input {
    margin-right: 20px;
}
</style>
