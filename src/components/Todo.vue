<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click and complete todo</span>
      <span> <span class="incomplete-box"></span> = Incomplete </span>
      <span> <span class="complete-box"></span> = Complete-box </span>
    </div>
    <div class="todos">
      <div
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
        :class="{ 'is-completed': todo.completed }"
        @dblclick="updateTheTodo(todo)"
      >
        {{ loader ? "Updating...." : todo.title }}
        <i class="fa fa-trash-alt" @click="deleteTodo(todo.id)"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),

    updateTheTodo(todo) {
      const uptTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updateTodo(uptTodo);
    },
  },
  computed: mapGetters(["allTodos", "loader"]),
  created() {
    this.fetchTodos();
  },
};
</script>


<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.todo {
  background-color: green;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.todo i {
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 20px;
  color: #fff;
}

.legend {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  margin-bottom: 2rem;
  overflow-x: auto;
  gap: 20px;
}
.legend::-webkit-scrollbar {
  width: 0;
}
.legend > * {
  flex-shrink: 0;
}

.legend > span {
  display: flex;

  align-items: center;
  gap: 5px;
}
.is-completed {
  background: blueviolet;
  color: #fff;
}
.incomplete-box {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: blueviolet;
}
.complete-box {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: green;
}

@media (max-width: 576px) {
  .todos {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
