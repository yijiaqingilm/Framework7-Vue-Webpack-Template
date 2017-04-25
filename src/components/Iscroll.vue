<template>
    <div>
        Iscroll
        <div class="page-content infinite-scroll" @infinite="toScroll">
            <slot>数据加载中。。。</slot>
        </div>
        <!-- Preloader -->
        <div class="infinite-scroll-preloader">
            <div class="preloader"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return {}
        },
        props: {
            url: String,
            param: String
        },
        created: function () {
            console.log(this.url);
            console.log(this.param);
            this.$on('infinite', function (msg) {
                console.log(msg)
            })
        },
        methods: {
            toScroll: function () {
                console.log('ssss')
            }
        }
    }
</script>
<style lang="scss" scoped type="text/css">
</style>
