<template>
    <div class="">
        <button @click="addRoutes">增加路由</button>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {};
    },
    methods: {
        addRoutes() {
            this.$store.dispatch('setRouteLists',['index','base64']);
            this.$router.push({ path: '/index' });
        }
    },
};
</script>

<style lang="scss">

</style>