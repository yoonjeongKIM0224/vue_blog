<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="(item, idx) in blogDoc" :key="idx">
            <router-link :to="'/detail/' + idx" class="nav-link">
                <h2>{{ item.title }}</h2>
                <p>{{ item.content }}</p>
                <span>{{ item.date }}</span>
            </router-link>
        </li>
    </ul>

    <button type="button" @click="$router.push('/Detail/0')">
        이동~
    </button>
</template>

<script>
export default {
    name: 'TheList',
    props: {
        blogDoc: Array,
    }
}
</script>