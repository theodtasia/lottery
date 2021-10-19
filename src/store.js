import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null,
      numbers: [],
    }
  },

  getters: {
    user(state){
      return state.user
    }
  },
  mutations: 
  {
    SET_LOGGED_IN(state, value) 
    {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) 
    {
      state.user.data = data;
    },
    SET_NUMBERS(state,value)
    {
      state.user.numbers = value;
    },
 
  },
  actions: {
    fetchUser({ commit }, user) 
    {
      commit("SET_LOGGED_IN", user !== null);

      if (user) 
      {
        commit("SET_USER", {
          email: user.email
        });
      } 
      else 
      {
        commit("SET_USER", null);
      }
    },
    set_numbers({ commit }, value) {
          commit("SET_NUMBERS", value);
    },
   
    
  }
});