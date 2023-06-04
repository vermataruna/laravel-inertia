<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/users', function () {
    sleep(3);
    return Inertia::render('Users');
});

Route::get('/settings', function () {
    return Inertia::render('Settings');
});
