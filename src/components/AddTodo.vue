<template>
  <div class="add-todo-wrapper">
    <h3>Add Todo</h3>
    <div class="add-todo">
      <form action="" @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo...." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      title: "",
    };
  },
  name: "AddTodo",
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      if (this.title == "") {
        alert("Title is required");
      }
      this.addTodo(this.title);
      this.title = ""
    },
  },
};
</script>

<style scoped>
.add-todo-wrapper {
  margin: 20px 0;
}

.add-todo form {
  display: flex;
}
.add-todo input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid green;
  outline: 0;
  transition: 0.4s all;
}
.add-todo input[type="text"]:hover {
  border: 0.2em solid green;
}
.add-todo input[type="submit"] {
  flex: 2;
  padding: 12px;
  background-color: green;
  color: white;
  border: none;
  cursor: pointer;
}
</style>