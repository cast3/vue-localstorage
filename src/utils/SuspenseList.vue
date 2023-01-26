<template>
	<nav class="nav sticky-top nav-pills nav-justified bg-dark">
		<a
			class="nav-link active"
			aria-current="page"
			href="#"
			>All</a
		>
		<a
			class="nav-link"
			href="#"
			>Actives</a
		>
		<a
			class="nav-link"
			href="#"
			>Completed</a
		>
	</nav>
	<div class="list-group">
		<label class="list-group-item">
			<input
				class="form-check-input me-1"
				type="checkbox"
			/>
			Loading...
		</label>
		<label class="list-group-item item2">
			<input
				class="form-check-input me-1"
				type="checkbox"
			/>
			Loading...
		</label>
		<label class="list-group-item item3">
			<input
				class="form-check-input me-1"
				type="checkbox"
			/>
			Loading...
		</label>
	</div>
</template>

<script setup></script>

<style scoped>
	.list-group-item {
		animation: fade 1s infinite alternate;
	}
	.item2 {
		animation: fade 1.1s infinite alternate;
	}
	.item3 {
		animation: fade 1.2s infinite alternate;
	}
	@keyframes fade {
		from {
			opacity: 0.8;
		}
		to {
			opacity: 1;
		}
	}
</style>
