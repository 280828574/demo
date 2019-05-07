<template>
    <div class="">
        <slotShow>
            <template v-slot>
                <div>默认插槽</div>
            </template>
            <!--具名插槽-->
            <template #header>
                <div>具名插槽</div>
            </template>
            <!--作用域插槽-->
            <template #footer="slotProps">
                <div>
                    {{slotProps.testProps}}
                </div>
            </template>
        </slotShow>
    </div>
</template>

<script>
    import slotShow from '@/components/slot/slot'

    export default {
        components: {
            slotShow
        },
        name: '',
        data() {
            return {};
        }
    };
</script>

<style lang="scss">

</style>