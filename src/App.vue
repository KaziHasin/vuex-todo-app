<template>
  
    <div class="wrapper">
      <AddTodo/>
      <FilterTodo />
      <Todo/>
    </div>
</template>

<script setup>
import Todo from "./components/Todo.vue";
import AddTodo from "./components/AddTodo.vue";
import FilterTodo from "./components/FilterTodo.vue";


</script>

<style scoped>
.wrapper {
  max-width: 1120px;
  margin: 40px auto;
}
</style>
