<template>
    <div class="list">
        <h3 class="text-white">{{ obj.title }}</h3>
        <div>
            <ul>
                <li v-for="(link, index) in obj.links" :key="index">
                    <a :href="link.url">{{ link.text }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListLinksFooter',
        props: [
            'obj'
        ]
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

.list {
    width: calc(100% / 2);

    h3 {
        font-size: 20px;
        margin-bottom: 20px;
    }
}

ul {
    list-style: none;
    padding: 0;

    li a {
        text-decoration: none;
        color: $white;
        font-size: 16px;
        line-height: 35px;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: $yellow;
        }
    }
}
</style>