<template>
  <div class="">
    <p @click="classes">点我</p>
  </div>
</template>
<script>
    export default {
        data(){
           return{
               // 搜索数据
               formInline: {
                   total: 0,
                   page: 1,
                   page_size: 20,
                   course_category_id: '',
                   teach_way: '',
                   key: '',
                   status: '',
                   is_delete: '0',
                   sort: '',
                   sortID: ''
               },
           }
        },
        mounted() {
            // console.log(this.$store.state);
            // console.log(this.$scripts.zTime.format());
        },
        methods: {
            async classes() {
                const res = await this.$api.classes.fetchList(
                    {
                        formInline: this.formInline
                    }
                );
                if (res.success) {
                    console.log(1);
                }
            }
        },
    }
</script>