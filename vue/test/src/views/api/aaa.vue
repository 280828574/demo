<template>
    <div class="">
{{count}}
    </div>
</template>

<script>
    import { store } from "@/components/store";
export default {
    name: '',
    data() {
        return {

        };
    },
    computed: {
        count() {
            return store.count;
        }
    },
};
</script>

<style lang="scss">

</style>