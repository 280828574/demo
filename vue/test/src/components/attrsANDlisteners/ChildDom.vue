<template>
    <div>
        <p>childDomChild:</p>
        <p>foo:{{foo}}</p>
        <p>attrs:{{$attrs}}</p>
        <childDomChild v-bind="$attrs" v-on="$listeners"></childDomChild>
    </div>
</template>
<script>
import childDomChild from "@/components/attrsANDlisteners/childDomChild.vue";
export default {
    name:'child-dom',
    props:["foo"],
    components:{childDomChild},
};
</script>