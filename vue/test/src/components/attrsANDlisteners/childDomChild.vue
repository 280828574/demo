<template>
    <div>
        <p>childDomChild:</p>
        <p>coo:{{coo}}</p>
        <button @click="startUpRocket">我要发射火箭</button>
    </div>
</template>
<script>
export default {
    name:'childDomChild',
    props:["coo"],
    methods: {
        startUpRocket() {
            this.$emit("upRocket",222);
        }
    }
};
</script>