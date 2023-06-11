<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\Response;

class UserPolicy
{
    public function create(User $user): bool
    {
       return $user->email === 'admin@test.com';
    }
}
