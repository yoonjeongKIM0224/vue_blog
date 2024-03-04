<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="(item, idx) in blogDoc" :key="idx">
            <router-link to="/Detail" class="nav-link">
                <h2>{{ item.title }}</h2>
                <p>{{ item.content }}</p>
                <span>{{ item.date }}</span>
            </router-link>
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