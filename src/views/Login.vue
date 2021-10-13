<template>
<div>
<h1 class="text-6xl font-normal leading-normal mt-8 text-pink-800">Lottery</h1>

   <div class= "flex justify-center mt-20">
 <div  class="max-w-xs bg-gray-400 flex justify-center py-10 px-20 rounded-lg shadow-lg"   >
   
          
            <form action="#" @submit.prevent="submit">
              <div class="form-group">
                    <div v-if="error" class="alert alert-danger">{{error}}</div>

                <label for="email" class="text-gray-700 font-bold py-2 rounded-full">Email</label>
                  <input class="form control text-gray-700 shadow border m-2 rounded-full border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
                    id="email"
                    type="email"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                
        
                <label for="password" class="text-gray-700 font-bold py-2">Password</label>
                  <input class="form control text-gray-700 shadow border m-2 rounded-full border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
                    id="password"
                    type="password"
                    name="password"
                    required
                    v-model="form.password"
                  />
                
              </div>

              <div class="form-group row mt-3 mb-0">
                  <button type="submit" class="bg-yellow-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">Login</button>
                  <button @click="SignUp()" class="bg-yellow-600 hover:bg-blue-dark mx-5 text-white font-bold py-2 px-4 rounded">Sign Up</button>
                
              </div>
            </form>
            </div>
  </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";

export default 
{
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {

       const auth = getAuth();
       signInWithEmailAndPassword(auth, this.form.email, this.form.password)
        .then(
            data => { 
          console.log(data)
          this.$router.replace({name: "Home" });
        })
        .catch(err => {
          this.error = err.message;
        });
    },
    SignUp(){
   this.$router.push('/register'); 
      }

  }
};
</script>
