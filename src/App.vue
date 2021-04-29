<template>
  <div class="container">
    <h3 class="text-info my-4">{{ title }}</h3>

    <HelloWorld></HelloWorld>

    <img src="./assets/logo.png" class="logo mb-4">

    <i class="fas fa-home text-info fa-3x"></i>

    <p class="h4 mb-3">Total Item - {{ total }}</p>

    <input type="text" v-model="newList" @keyup.enter="addList()" class="form-control w-50 " placeholder="add list">
    <ul class=" list-group w-50">
      <li class="list-group-item" v-for="list in lists" :key="list"> {{ list }} </li>
    </ul>

  </div>
</template>

<script>
// import HelloWorld from  "./components/HelloWorld";
import HelloWorld from './components/HelloWorld.vue';
  export default {
    name:"App",
    components:{
        HelloWorld
    },
    data() {
      return {
        title: "Vue First Test",
        newList:"",
        lists:[],
      }
    },
    computed:{
        total(){
          return this.lists.length;

      }
    },
    methods:{
      addList(){
        this.lists.push(this.newList);
        this.newList=""
      }
    }
  }
</script>

<style scoped>
.logo{
  height: 45px;
}

</style>
