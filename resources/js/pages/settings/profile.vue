<template>
	<div class="bg-background min-h-screen">
		<div class="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
			<div class="mb-6">
				<h1 class="text-foreground text-3xl font-bold">Profile Settings</h1>
			</div>

			<div class="bg-card text-card-foreground overflow-hidden rounded-lg shadow">
				<form class="p-6" @submit.prevent="submit">
					<div class="space-y-6">
						<div>
							<label for="name" class="text-foreground block text-sm font-medium">
								Name
							</label>
							<input
								id="name"
								v-model="form.name"
								type="text"
								required
								class="bg-input text-foreground focus:border-primary focus:ring-primary mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:text-sm"
							/>
							<div v-if="form.errors.name" class="text-destructive mt-1 text-sm">
								{{ form.errors.name }}
							</div>
						</div>

						<div>
							<label for="email" class="text-foreground block text-sm font-medium">
								Email
							</label>
							<input
								id="email"
								v-model="form.email"
								type="email"
								required
								class="bg-input text-foreground focus:border-primary focus:ring-primary mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:text-sm"
							/>
							<div v-if="form.errors.email" class="text-destructive mt-1 text-sm">
								{{ form.errors.email }}
							</div>
						</div>
					</div>

					<div class="mt-6 flex items-center justify-end">
						<button
							type="submit"
							:disabled="form.processing"
							class="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium disabled:opacity-50"
						>
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { PageProps, User } from '@/types/global';
	import { useForm } from '@inertiajs/vue3';

	interface ProfileProps extends PageProps {
		auth: {
			user: User;
		};
		mustVerifyEmail: boolean;
		status?: string;
	}

	const props = defineProps<ProfileProps>();

	const form = useForm({
		name: props.auth.user.name,
		email: props.auth.user.email,
	});

	const submit = () => {
		form.patch(route('profile.update'));
	};
</script>
