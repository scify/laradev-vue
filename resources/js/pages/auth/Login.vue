<template>
	<div class="bg-background flex min-h-screen items-center justify-center">
		<div class="w-full max-w-md space-y-8 px-4">
			<div>
				<h2 class="text-foreground mt-6 text-center text-3xl font-bold">
					Sign in to your account
				</h2>
			</div>
			<form class="mt-8 space-y-6" @submit.prevent="submit">
				<div class="space-y-4 rounded-md shadow-sm">
					<div>
						<label for="email" class="text-foreground block text-sm font-medium">
							Email address
						</label>
						<input
							id="email"
							v-model="form.email"
							type="email"
							required
							class="bg-input text-foreground focus:border-primary focus:ring-primary relative block w-full appearance-none rounded-md border px-3 py-2 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm"
							placeholder="Email address"
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
							class="bg-input text-foreground focus:border-primary focus:ring-primary relative block w-full appearance-none rounded-md border px-3 py-2 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm"
							placeholder="Password"
						/>
						<div v-if="form.errors.password" class="text-destructive mt-1 text-sm">
							{{ form.errors.password }}
						</div>
					</div>
				</div>

				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<input
							id="remember"
							v-model="form.remember"
							type="checkbox"
							class="border-input text-primary focus:ring-primary h-4 w-4 rounded"
						/>
						<label for="remember" class="text-foreground ml-2 block text-sm">
							Remember me
						</label>
					</div>
				</div>

				<div>
					<button
						type="submit"
						:disabled="form.processing"
						class="bg-primary text-primary-foreground group hover:bg-primary/90 focus:ring-primary relative flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:opacity-50"
					>
						Sign in
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { PageProps } from '@/types/global';
	import { useForm } from '@inertiajs/vue3';

	interface LoginProps extends PageProps {
		canResetPassword: boolean;
		status?: string;
	}

	defineProps<LoginProps>();

	const form = useForm({
		email: '',
		password: '',
		remember: false,
		captcha: 'dummy', // For testing purposes
	});

	const submit = () => {
		form.post(route('login'), {
			onFinish: () => {
				form.reset('password');
			},
		});
	};
</script>
