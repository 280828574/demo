<template>
    <div class="app">
        <p class="tc">{{$route.path}}</p>
        <p class="tc">Vue过滤:{{aaa|one}}</p>
        <p class="tc" v-if="$store.state.userInfo.userInfo.role.includes('admin')">
            当前身份:管理员
            <span style="color: red;cursor: pointer" @click="changeUserInfo(2)">更改身份</span>
        </p>
        <p class="tc" v-if="!$store.state.userInfo.userInfo.role.includes('admin')">
            当前身份:普通用户
            <span style="color: red;cursor: pointer" @click="changeUserInfo(1)">更改身份</span>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            aaa: 'aaa'
        };
    },
    methods: {
        changeUserInfo(type) {
            this.$store.dispatch('setUserInfo', type);
            this.$forceUpdate();
        }
    }
};
</script>

<style lang="scss">
.app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    .wrapper{
        padding: 50px;
    }
    .change-user-jurisdiction{
        cursor: pointer;
        margin-bottom: 15px;
    }
}
</style>
