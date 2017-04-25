<template>
    <div>
        <h2>我是子组件的标题</h2>
        <slot name="header">head内容填充</slot>
        <slot>
            只有在没有要分发的内容时才会显示。
        </slot>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return {}
        }
    }
</script>
<style lang="sass" scoped type="text/css">
</style>
