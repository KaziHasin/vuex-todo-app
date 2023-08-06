<template>
  <div class="filter-box">
    <select @change="filterTodo($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="10">10</option>
    </select>
    <input
      type="text"
      name="search"
      id=""
      placeholder="Search Task..."
      @input="searchText($event)"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodo",
  methods: mapActions(["filterTodo", "searchText"]),
};
</script>

<style scoped>
.filter-box {
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: end;
  gap: 10px;
}
select {
  margin: 5px 0 15px;
  padding: 5px 15px;
  border: 1px solid green;
}

input[type="text"] {
  margin: 5px 0 15px;
  padding: 5px 15px;
  border: 1px solid green;
  width: 40%;
  outline: none;
}
</style>