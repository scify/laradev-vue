<?php

declare(strict_types=1);

use App\Enums\RolesEnum;
use App\Models\User;
use Database\Seeders\RolesAndPermissionsSeeder;

beforeEach(function (): void {
    $this->seed(RolesAndPermissionsSeeder::class);
});

test('guests can see the dashboard page', function (): void {
    $this->get('/dashboard')->assertOk();
});

test('admin users can visit the dashboard', function (): void {
    $user = User::factory()->create([
        'email' => 'admin@example.com',
        'name' => 'Admin User',
    ])->assignRole(RolesEnum::ADMINISTRATOR->value);

    $this->actingAs($user);

    $this->get('/dashboard')->assertOk();
});

test('registered users are redirected to the dashboard page', function (): void {
    $user = User::factory()->create([
        'email' => 'user@example.com',
        'name' => 'Regular User',
    ])->assignRole(RolesEnum::REGISTERED_USER->value);

    $this->actingAs($user);

    $this->get('/dashboard')->assertOk();
});
