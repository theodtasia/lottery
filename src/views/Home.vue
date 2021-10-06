<template>
<div>
    <navbar></navbar>
    <h1>Home</h1>
<div class="flex flex-row w-full">
    
  <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
    <div class="h-64 grid grid-rows-3 grid-flow-col gap-4">
       <div  v-for="index in 30" :key="index">
            <button type="submit" class="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">{{index}}</button>
        </div>
    </div>
    </div>
  <div class="divider divider-vertical"></div> 
  <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
</div>
</div>

</template>


<script>

export default {
    name: 'Home',
};
</script>

<style lang="scss" scoped></style>

<style>
   .white {
       background-color: white;
       width: 200px;
       height: 200px;  

   }
   .blue {
       width: 200px;
       height: 200px;
       background-color: blue;

   }


</style>