<script setup>
	import SuspenseList from '../utils/SuspenseList.vue';
	import TodosList from '../components/TodosList.vue';
	import FormTodo from '../components/FormTodo.vue';
</script>

<template>
	<main>
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-12 col-large-4 col-xl-4">
					<label
						for="tweet"
						class="h1 fw-bold text-white"
						>TODOS:</label
					>
					<Suspense>
						<FormTodo />
					</Suspense>
					<hr class="text-white border border-2" />
				</div>
				<!-- Lista -->
				<div
					class="side-right custom-scrollbar overflow-scroll col-sm-12 col-md-12 col-large-8 col-xl-8"
				>
					<div class="container-fluid d-grid gap-3">
						<Suspense>
							<template #default>
								<TodosList />
							</template>
							<template #fallback>
								<SuspenseList />
							</template>
						</Suspense>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped>
	.side-right {
		height: 90vh !important;
	}

	.custom-scrollbar {
		height: 70px;
		overflow-y: scroll;
	}

	.custom-scrollbar::-webkit-scrollbar {
		width: 8px;
	}

	.custom-scrollbar::-webkit-scrollbar-track {
		background: #111;
		border-radius: 12px;
	}

	.custom-scrollbar::-webkit-scrollbar-thumb {
		background: #d0c9c9;
		border-radius: 12px;
	}
</style>
