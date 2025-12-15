<template>
	<div class="bg-background min-h-screen">
		<div class="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
			<div class="mb-6">
				<h1 class="text-foreground text-3xl font-bold">Password Settings</h1>
			</div>

			<div class="bg-card text-card-foreground overflow-hidden rounded-lg shadow">
				<form class="p-6" @submit.prevent="submit">
					<div class="space-y-6">
						<div>
							<label
								for="current_password"
								class="text-foreground block text-sm font-medium"
							>
								Current Password
							</label>
							<input
								id="current_password"
								v-model="form.current_password"
								type="password"
								required
								class="bg-input text-foreground focus:border-primary focus:ring-primary mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:text-sm"
							/>
							<div
								v-if="form.errors.current_password"
								class="text-destructive mt-1 text-sm"
							>
								{{ form.errors.current_password }}
							</div>
						</div>

						<div>
							<label for="password" class="text-foreground block text-sm font-medium">
								New Password
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
								Confirm New Password
							</label>
							<input
								id="password_confirmation"
								v-model="form.password_confirmation"
								type="password"
								required
								class="bg-input text-foreground focus:border-primary focus:ring-primary mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:text-sm"
							/>
						</div>
					</div>

					<div class="mt-6 flex items-center justify-end">
						<button
							type="submit"
							:disabled="form.processing"
							class="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium disabled:opacity-50"
						>
							Update Password
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

	interface PasswordProps extends PageProps {
		mustVerifyEmail: boolean;
		status?: string;
	}

	defineProps<PasswordProps>();

	const form = useForm({
		current_password: '',
		password: '',
		password_confirmation: '',
	});

	const submit = () => {
		form.put(route('password.update'), {
			onSuccess: () => {
				form.reset();
			},
		});
	};
</script>
