<template>
    <Link
    class="text-blue-500 hover:underline"
    :class="{'font-bold': active}"
    >
        <slot></slot>
    </Link>
</template>

<script>
import { Link } from '@inertiajs/vue3'

export default {
    props: {
        active: Boolean
    },
    components: {
        Link
    }
}
</script>