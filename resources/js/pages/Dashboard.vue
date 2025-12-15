<template>
	<div class="bg-background min-h-screen">
		<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
			<h1 class="text-foreground mb-4 text-3xl font-bold">Dashboard</h1>
			<div class="bg-card text-card-foreground rounded-lg p-6 shadow">
				<p class="text-lg">Welcome to your dashboard!</p>
				<p class="text-muted-foreground mt-2">
					This is your home page built with Vue 3 and Tailwind CSS.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { PageProps } from '@/types/global';

	defineProps<PageProps>();
</script>
