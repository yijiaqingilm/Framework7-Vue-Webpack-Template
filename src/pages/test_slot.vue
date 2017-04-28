<template>
    <f7-page>
        <f7-navbar title="slot" back-link="Back" sliding></f7-navbar>
        <f7-block inner>
            测试 slot 页面
            <child>
                <h1 slot="header">child header 填充</h1>
                hi
            </child>
        </f7-block>
    </f7-page>
</template>

<script type="text/ecmascript-6">
    import common from 'src/lib/common.js'
    import Child from 'src/components/myComponent.vue'
    export default {
        data(){
            return {}
        },
        created: function () {
            common.getName();
        },
        components: {Child}
    }
</script>
<style lang="scss" scoped type="text/css">
</style>
