<template>
    <f7-page>
        <f7-navbar title="order" back-link="Back" sliding></f7-navbar>
        <f7-block inner>
            <div class='test'>园丁 订单页面</div>
            <div class='test2'>测试rem</div>
            <div><img src="../../assets/test.png" alt=""></div>
        </f7-block>
    </f7-page>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return {}
        }
    }
</script>
<style lang="scss" scoped type="text/css">
    @import "../../css/global.scss";
    @import "test.scss";

    .test {
    @include setFontSize(12 px)
    }

    .test2 {
        width: 300px;
    }
</style>
