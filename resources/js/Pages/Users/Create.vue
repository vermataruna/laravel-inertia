<template>
    <Head title="Create Users" />
    <h1 class="text-3xl">Create New User</h1>

    <form class="max-w-md mx-auto mt-8" @submit.prevent="submit">
        <div class="mb-6">
            <label for="name" class="mb-2 block font-bold text-xs text-gray-700 uppercase">
                Name
            </label>
            <input class="border border-gray-400 p-2 w-full" 
                    type="text" 
                    id="name" 
                    v-model="form.name"
                    >
                    <span v-if="form.errors.name" v-text="form.errors.name" 
                    class="text-red-500 text-xs mt-1"></span>
        </div>
        <div class="mb-6">
            <label for="email" class="mb-2 block font-bold text-xs text-gray-700 uppercase">
                Email
            </label>
            <input class="border border-gray-400 p-2 w-full" 
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
            <input class="border border-gray-400 p-2 w-full" 
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
                Submit
            </button>
        </div>
    </form>
</template>

<script>
import { useForm } from '@inertiajs/vue3';
import Layout from '../../Shared/Layout.vue';

export default {
layout: Layout,

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
            this.form.post('/users');
        }
    }
};
</script>