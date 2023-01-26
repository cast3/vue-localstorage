import { computed, ref } from 'vue';
import getTodosApi from '@/api/getTodosApi.js';

const useTodos = async () => {
    const localTodos = ref([]);
    const currentTab = ref('all');

    await (async () => {
        try {
            const { data } = await getTodosApi();
            localTodos.value = data;
            if (localStorage.getItem('todos') === null) {
                localStorage.setItem('todos', JSON.stringify(data));
            } else {
                const todos = JSON.parse(localStorage.getItem('todos'));
                localTodos.value = todos;
            }
        } catch (error) {
            console.log(error);
        }
    })();


    const getTodosByTab = computed(() => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            const todos = JSON.parse(localStorage.getItem('todos'));
            localTodos.value = todos;
        }
        switch (currentTab.value) {
            case 'all':
                return localTodos.value;
            case 'active':
                return localTodos.value.filter((todo) => !todo.completed);
            case 'completed':
                return localTodos.value.filter((todo) => todo.completed);
            default:
                return localTodos.value;
        }
    });

    const toggleTodo = computed(() => (id) => {
        const todo = localTodos.value.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        localStorage.setItem('todos', JSON.stringify(localTodos.value));
    });

    const createTodo = computed(() => (todo) => {
        localTodos.value.unshift(todo);
        localStorage.setItem('todos', JSON.stringify(localTodos.value));
    });


    return { localTodos, currentTab, getTodosByTab, toggleTodo, createTodo };
};


export default useTodos;
