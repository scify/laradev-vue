<template>
	<div class="bg-background min-h-screen">
		<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
			<div class="mb-6 flex items-center justify-between">
				<h1 class="text-foreground text-3xl font-bold">Users</h1>
				<a
					:href="route('users.create')"
					class="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium"
				>
					Create User
				</a>
			</div>

			<div class="bg-card text-card-foreground overflow-hidden rounded-lg shadow">
				<div class="p-6">
					<div v-if="users.data && users.data.length > 0" class="overflow-x-auto">
						<table class="divide-border min-w-full divide-y">
							<thead>
								<tr>
									<th
										class="text-foreground px-6 py-3 text-left text-xs font-medium tracking-wider uppercase"
									>
										Name
									</th>
									<th
										class="text-foreground px-6 py-3 text-left text-xs font-medium tracking-wider uppercase"
									>
										Email
									</th>
								</tr>
							</thead>
							<tbody class="divide-border divide-y">
								<tr v-for="user in users.data" :key="user.id">
									<td class="text-foreground px-6 py-4 whitespace-nowrap">
										{{ user.name }}
									</td>
									<td class="text-foreground px-6 py-4 whitespace-nowrap">
										{{ user.email }}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div v-else class="text-muted-foreground py-8 text-center">No users found.</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { PageProps } from '@/types/global';

	interface User {
		id: number;
		name: string;
		email: string;
	}

	interface UsersIndexProps extends PageProps {
		users: {
			data: User[];
		};
		filters: {
			search?: string;
		};
	}

	defineProps<UsersIndexProps>();
</script>
