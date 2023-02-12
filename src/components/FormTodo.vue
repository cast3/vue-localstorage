<script setup>
  import { ref } from 'vue';
  import useTodos from '../composables/useTodos';

  const { createTodo, localTodos } = await useTodos();

  const text = ref('');
  const todosLength = ref(localTodos.value.length);

  const onSubmit = async () => {
    if (text.value.length === 0) return;
    createTodo.value({
      title: text,
      userid: 1,
      id: todosLength.value + 1,
      completed: false,
    });
    text.value = '';
    todosLength.value = localTodos.value.length;
  };
</script>

<template>
  <form
    action=""
    id="formulario"
    class="d-grid gap-3">
    <div class="form-floating">
      <textarea
        class="form-control"
        placeholder="Leave a comment here"
        id="floatingTextarea"
        style="height: 100px"
        v-model="text"></textarea>
      <label
        for="floatingTextarea"
        class="text-dark fst-italic text-opacity-50"
        >New todo</label
      >
    </div>
    <input
      class="btn btn-warning"
      type="submit"
      value="Save"
      @click.prevent="onSubmit" />
  </form>
</template>

<style lang="scss" scoped></style>
