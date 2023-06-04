<template>
    <Head title="My App"/>
    <section class="p-6 bg-gray-200">
        <header class="flex justify-between">
            <h1 class="text-blue-500 font-bold text-lg">My app</h1>
                <Nav/>
        </header>
    </section>

    <section class="p-6">
        <div class="max-w-3xl mx-auto">
            <slot/>
        </div>
    </section>
    
</template>

<script>
import Nav from '../Shared/Nav.vue';
import { Head } from '@inertiajs/vue3';

export default {
    components: {
        Nav,
        Head
    }
}
</script>