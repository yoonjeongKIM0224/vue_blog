<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="(item, idx) in blogDoc" :key="idx">
            <h2>{{ item.title }}</h2>
            <p>{{ item.content }}</p>
            <span>{{ item.date }}</span>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'TheList',
    props: {
        blogDoc: Array,
    }
}
</script>