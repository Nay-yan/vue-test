<template>
  <div class="container">

    <router-view></router-view>
    
    
    <img src="./assets/logo.png" class="logo mb-4 mt-3" />

    <i class="fas fa-home text-info fa-2x  mt-3"></i>

    <p class="h4 mb-3 text-black-50">Total Item - {{ total }}</p>

    <input
      type="text"
      v-model="newList"
      @keyup.enter="addList()"
      class="form-control w-50"
      placeholder="add list"
    />
    <ul class="list-group w-50">
      <li class="list-group-item" v-for="list in lists" :key="list">
        {{ list }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      title: "Vue First Test",
      newList: "",
      lists: [],
    };
  },
  methods: {
    addList() {
      this.lists.push(this.newList);
      this.newList = "";
    },
  },
  computed: {
    total() {
      return this.lists.length;
    },
  },
};
</script>

<style scoped>
.logo {
  height: 35px;
}
</style>
