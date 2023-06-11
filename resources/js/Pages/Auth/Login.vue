<template>
    <Head title="Login"/>
    <main class="max-w-md mx-auto mt-20">
        <section class="bg-white p-8 rounded-xl max-w-md mx-auto border">
            <h1 class="text-3xl mb-6">Login</h1>
        
        <form @submit.prevent="submit">
        <div class="mb-6">
            <label for="email" class="mb-2 block font-bold text-xs text-gray-700 uppercase">
                Email
            </label>
            <input class="border p-2 w-full rounded" 
                   type="email" 
                   id="email" 
                   v-model="form.email"
                   >
                   <span v-if="form.errors.email" v-text="form.errors.email" 
                    class="text-red-500 text-xs mt-1"></span>
        </div>
        <div class="mb-6">
            <label for="password" class="mb-2 block font-bold text-xs text-gray-700 uppercase">
                Password
            </label>
            <input class="border p-2 w-full rounded" 
                   type="password" 
                   id="password" 
                   v-model="form.password"
                   >
                   <span v-if="form.errors.password" v-text="form.errors.password" 
                    class="text-red-500 text-xs mt-1"></span>
        </div>
        <div class="mb-6">
            <button type="submit" 
                    class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500"
                    :disabled="form.processing">
                Login
            </button>
        </div>
    </form>
        </section>
    </main>
</template>

<script>
import { useForm } from '@inertiajs/vue3';

export default {
    data() {
        return {
            form: null
        }
    },
    created() {
        this.form = useForm({
                name: '',
                email: '',
                password: ''
            });
    },
    methods: {
        submit() {
            this.form.post('/login');
        }
    }
};
</script>