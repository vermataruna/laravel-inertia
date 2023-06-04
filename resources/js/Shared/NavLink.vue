<template>
    <Link
    class="text-blue-500 hover:underline"
    :class="{'font-bold': active}"
    >
        <slot></slot>
    </Link>
</template>

<script>

export default {
    props: {
        active: Boolean
    },
    components: {}
}
</script>