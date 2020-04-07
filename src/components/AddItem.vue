<template>
  <div class="add">
    <h3>additem</h3>从父组件中获取的值:
    <label for>{{$store.state.num}}</label>
    <br>
    <button @click="add">加1</button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    add() {
      this.$store.state.num++;
    }
  }
};
</script>

<style lang="css">
.add {
  border: 1px solid #ccc;
  width: 200px;
  padding: 5px;
  margin: 20px;
}
</style>