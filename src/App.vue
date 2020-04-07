<template>
  <div id="app">
    <h1>根组件</h1>
    <input type="text" v-model="$store.state.num">
    <add-item></add-item>
    <sub-item></sub-item>
  </div>
</template>

<script>
import AddItem from "./components/AddItem.vue";
import SubItem from "./components/SubItem.vue";

export default {
  name: "App",
  components: {
    AddItem,
    SubItem
  }
};
</script>

<style>
#app {
  width: 300px;
  margin: 20px auto;
  border: 1px solid #ccc;
  padding: 4px;
}
</style>
