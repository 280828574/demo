<template functional>
    <div class="">
        <div>
            <p @click="props.itemClick(item);" v-for="item in props.items">
                {{ item }}
            </p>
        </div>
    </div>
</template>