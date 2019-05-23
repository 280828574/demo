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
            // 单独设置权限
            // this.$store.dispatch('setRouteLists',['index','base64']);
            // 获取所有权限
            this.$store.dispatch('setRouteLists','admin');
            this.$router.push({ path: '/index' });
        }
    },
};
</script>

<style lang="scss">

</style>