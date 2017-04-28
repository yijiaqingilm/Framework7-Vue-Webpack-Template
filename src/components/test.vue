<template>
    <div>
        {{hello}}
        {{getNumber}}
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        created: function () {
            console.log('init test Vue');
            this.test2Fun();
        },
        data(){
            return {
                hello: 'hello'
            }
        },
        methods: {
            showHello: function () {
                console.log(this.hello);
            }
        },
        props: {
            test2Number: {
                type: Number
            },
            test2Fun: {
                type: Function
            }
        },
        computed: {
            getNumber: function () {
                return this.test2Number;
            }
        }
    }
</script>

