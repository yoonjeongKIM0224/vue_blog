<template>
    <section>
        <h2>{{ blogDoc[$route.params.id].title }}</h2>
        <span>{{ blogDoc[$route.params.id].date }}</span>
        <p>{{ blogDoc[$route.params.id].content }}</p>
    </section>

    <section>
        <router-view></router-view>
    </section>
</template>

<script>
export default {
    name: 'App',
    props: {
        blogDoc: Array,
    }
}
</script>