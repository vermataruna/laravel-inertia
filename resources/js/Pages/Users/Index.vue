<template>
  <Head title="Users" />
  <div class="flex justify-between mb-6">
    <div class="flex items-center">
      <h1 class="text-3xl">Users</h1>
      <Link href="/users/create" class="text-blue-500 text-sm ml-3">+ new</Link>
    </div>
    <input type="text" 
           placeholder="search..." 
           class="border px-2 rounded-lg"
           v-model="search">
  </div>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700    hover:bg-gray-50 dark:hover:bg-gray-600"
          v-for="user in users.data" :key="user.id">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ user.name }}
          </th>
          <td class="px-6 py-4 text-right">
            <Link :href="`/users/${user.id}/edit`" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            Edit
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Paginator :links="users.links" class="mt-6" />
</template>

<script>
import Layout from '../../Shared/Layout.vue';
import Paginator from '../../Shared/Paginator.vue';
import debounce from "lodash/debounce";

export default {
  layout: Layout,

  props: {
    users: Object,
    filters: Object
  },

  data() {
    return {
      search: this.filters.search,
    }
  },
  watch: {
  search: debounce(function(newValue) {
    this.$inertia.get('/users', { search: newValue }, {
      preserveState: true,
      replace: true
    });
  }, 500)
},
  components: { Paginator }
}
</script>