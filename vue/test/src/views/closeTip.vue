<template>
    <div>

    </div>
</template>
<script>
export default {
    created() {
  window.addEventListener('beforeunload', e => this.beforeunloadFn(e))
},
   methods: {
  beforeunloadFn(e) {
    console.log('刷新或关闭')
    // ...
  }
},
destroyed() {
  window.removeEventListener('beforeunload', e => this.beforeunloadFn(e))
}
}
</script>

