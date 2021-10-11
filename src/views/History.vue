<template>
<div>
  <navbar></navbar>

</div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  async created() {

   
  },
  data() {
    return {
      history: [],
    };
  },
  computed: {
    ...mapGetters(["getUser", "isUserAuth"]),
  },
};
</script>

<style></style>