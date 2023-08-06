import axios from "axios";

const state = {
  todos: [],
  loader: false,
};

const getters = {
  allTodos: (state) => state.todos,
  loader: (state) => state.loader,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    commit("setTodos", response.data);
  },

  async addTodo({ commit }, title) {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/todos`,
      {
        title,
        completed: false,
      }
    );
    commit("newTodo", response.data);
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    commit("removeTodo", id);
  },

  async filterTodo({ commit }, e) {
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerHTML
    );

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    commit("setTodos", response.data);
  },

  async searchText({ commit }, e) {
    const text = e.target.value;
    if (text.trim() !== "") {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?q=${text}`
      );
      commit("setTodos", response.data);
    }
  },

  async updateTodo({ commit }, uptTodo) {
    commit("setLoader", true);
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${uptTodo.id}`,

      uptTodo
    );
    console.log(response.data);
    commit("updateTodo", response.data);
    commit("setLoader", false);
  },
};

const mutations = {
  setLoader: (state, loader) => {
    state.loader = loader;
  },
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id != id)),
  updateTodo: (state, updateTodo) => {
    const index = state.todos.findIndex((todo) => todo.id == updateTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updateTodo);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
