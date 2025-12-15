<template>
	<div class="bg-background min-h-screen">
		<div class="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
			<div class="mb-6">
				<h1 class="text-foreground text-3xl font-bold">Create User</h1>
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

						<div>
							<label for="password" class="text-foreground block text-sm font-medium">
								Password
							</label>
							<input
								id="password"
								v-model="form.password"
								type="password"
								required
								class="bg-input text-foreground focus:border-primary focus:ring-primary mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:text-sm"
							/>
							<div v-if="form.errors.password" class="text-destructive mt-1 text-sm">
								{{ form.errors.password }}
							</div>
						</div>

						<div>
							<label
								for="password_confirmation"
								class="text-foreground block text-sm font-medium"
							>
								Confirm Password
							</label>
							<input
								id="password_confirmation"
								v-model="form.password_confirmation"
								type="password"
								required
								class="bg-input text-foreground focus:border-primary focus:ring-primary mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:text-sm"
							/>
						</div>

						<div>
							<label for="role" class="text-foreground block text-sm font-medium">
								Role
							</label>
							<select
								id="role"
								v-model="form.role"
								required
								class="bg-input text-foreground focus:border-primary focus:ring-primary mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:text-sm"
							>
								<option value="">Select a role</option>
								<option v-for="role in roles" :key="role.value" :value="role.value">
									{{ role.label }}
								</option>
							</select>
							<div v-if="form.errors.role" class="text-destructive mt-1 text-sm">
								{{ form.errors.role }}
							</div>
						</div>
					</div>

					<div class="mt-6 flex items-center justify-end gap-3">
						<a
							:href="route('users.index')"
							class="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-md px-4 py-2 text-sm font-medium"
						>
							Cancel
						</a>
						<button
							type="submit"
							:disabled="form.processing"
							class="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium disabled:opacity-50"
						>
							Create User
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { PageProps } from '@/types/global';
	import { useForm } from '@inertiajs/vue3';

	interface Role {
		value: string;
		label: string;
	}

	interface UsersCreateProps extends PageProps {
		roles: Role[];
	}

	defineProps<UsersCreateProps>();

	const form = useForm({
		name: '',
		email: '',
		password: '',
		password_confirmation: '',
		role: '',
	});

	const submit = () => {
		form.post(route('users.store'));
	};
</script>
