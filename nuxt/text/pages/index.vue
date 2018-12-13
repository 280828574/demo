<template>
  <ul class="done">
    <li>{{ todos }}</li>
    <li>
      <input
        placeholder="What needs to be done?"
        @keyup.enter="addTodo">
    </li>
  </ul>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    computed: {
      todos () { return this.$store.state.todos.list }
    },
    methods: {
      addTodo (e) {
        this.$store.commit('todos/add', e.target.value);
        e.target.value = ''
      },
      ...mapMutations({
        toggle: 'todos/toggle'
      })
    }
  }
</script>

<style>
  .done {
    text-decoration: line-through;
  }
</style>
