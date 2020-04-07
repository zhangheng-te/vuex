<template>
  <div class="sub">
    <h3>subitem</h3>从父组件中获取的值:
    <label for>{{$store.state.num}}</label>
    <br>
    <button @click="sub">减一</button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    sub() {
      this.$store.state.num--;
    }
  }
};
</script>

<style lang="css">
.sub {
  border: 1px solid #ccc;
  width: 200px;
  padding: 5px;
  margin: 20px;
}
</style>