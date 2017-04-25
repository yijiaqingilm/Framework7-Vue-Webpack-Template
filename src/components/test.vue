<template>
    <div>
        {{hello}}
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return {
                hello: 'hello'
            }
        },
        methods: {
            showHello: function () {
                console.log(this.hello);
            }
        }
    }
</script>

