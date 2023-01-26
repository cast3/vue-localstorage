<script setup>
	import useTodos from '../composables/useTodos';

	const { toggleTodo, getTodosByTab, currentTab } = await useTodos();
</script>

<template>
	<nav class="nav sticky-top nav-pills nav-justified bg-dark">
		<a
			class="nav-link"
			@click="currentTab = 'all'"
			:class="{ active: currentTab === 'all' }"
			>All</a
		>
		<a
			class="nav-link"
			@click="currentTab = 'active'"
			:class="{ active: currentTab === 'active' }"
			>Active</a
		>
		<a
			class="nav-link"
			@click="currentTab = 'completed'"
			:class="{ active: currentTab === 'completed' }"
			>Completed</a
		>
	</nav>
	<div class="list-group">
		<label
			class="list-group-item"
			v-for="todo in getTodosByTab"
			:key="todo.id"
		>
			<input
				class="form-check-input me-1"
				type="checkbox"
				:checked="todo.completed"
				@click="toggleTodo(todo.id)"
			/>
			{{ todo.title }}
		</label>
	</div>
</template>

<style scoped></style>
