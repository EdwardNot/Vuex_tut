<template>
  <div>
      <h3>ToDos</h3>
      <div class = "legend">
        <span>Double click to mark as comlete  </span>
        <span>
          <span class ="incomplete-box"></span> = Incomplete
        </span>
        <span>
          <span class ="complete-box"></span> = Complete
        </span>
      </div>
      <div class="todos">
        <div 
          @dblclick="onDblClick(todo)"
          class="todo"
          v-for="todo in allTodos"
          :key="todo.id"
          v-bind:class="{'is-complete':todo.completed}"
        >
          {{todo.title}}
          <i @click="deleteTodo(todo.id)" class = "fas fa-trash-alt"></i>
        </div>
      </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex"

export default {
    name: "Todos",
    methods: {
      ...mapActions(['fetchTodos', 'deleteTodo', "updateTodo"]),
      onDblClick(todo) {
        const updtTodo = {
          id: todo.id,
          title: todo.title,
          completed: !todo.completed
        }

        this.updateTodo(updtTodo);
      }
    },
    computed: mapGetters(['allTodos']),
    created() {
      this.fetchTodos()
    }
}
</script>

<style scoped>
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }

  .todo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }

  i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
  }

  .complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #35495e;
  }

  .is-complete {
    background: #35495e;
    color: white;
  }

  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #41b883;
  }
</style>