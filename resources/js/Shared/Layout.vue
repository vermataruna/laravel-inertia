<template>
    <Head title="My App"/>
    <section class="p-6 bg-gray-200">
        <header class="flex justify-between">
            <div class="flex items-center">
                <h1 class="text-blue-500 font-bold text-lg">
                    <Link href="/">My app</Link>
                </h1>
                <p class="text-sm ml-4">
                    Welcome back, {{ username }}
                </p>
            </div>
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
    },
    computed: {
        username() {
            return this.$page.props.auth.user.username;
        }
    }
}
</script>