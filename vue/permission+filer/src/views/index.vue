<template>
    <div class="view-page-wrapper">
        <div class="absolute-fixed-wrapper">
            <div class="absolute-fixed-scroll-wrapper">
                <div class="index">
                    it's index!
                    <router-link to="/about">about</router-link>

                    {{aaa|one}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            aaa: 'aaa'
        };
    }
};
</script>

<style lang="scss">
.index {
    width: 100%;
}
</style>
