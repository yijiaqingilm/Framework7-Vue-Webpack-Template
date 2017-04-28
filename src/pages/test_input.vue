<template>
    <f7-page>
        <f7-navbar title="test input" back-link="Back" sliding></f7-navbar>
        <f7-block inner>
            <input type="number" v-model.number="msg">
            <input type="button" value='submit' @click="toSubmit">
            <test :test2Number="msg" :test2Fun="test2Fun"></test>

            {{total}}
            <button-counter @increment="incrementTotal(msg)" ref="button"></button-counter>
            <button-counter @increment="incrementTotal('value')"></button-counter>
        </f7-block>
    </f7-page>
</template>

<script type="text/ecmascript-6">
    import Vue from 'vue';
    import Test from '../components/test.vue';
    import Indicator from 'vue-indicator'

    Vue.component('button-counter', {
        template: '<button v-on:click="increment">{{ counter }}</button>',
        data: function () {
            return {
                counter: 0
            }
        },
        methods: {
            increment: function () {
                this.counter += 1
                this.$emit('increment')
            }
        },
    });
    export default {
        beforeCreate: function () {
            console.log('beforeCreate');
            console.log(this.msg);
        },
        created: function () {
            console.log('created')
            console.log(this.$refs)
        },
        data(){
            return {
                msg: null,
                test2Fun: function () {
                    console.log('hi')
                },
                total: 0

            }
        },
        methods: {
            toSubmit: function () {
                console.log(this.msg);
            },
            incrementTotal: function (v) {
                console.log(v);
                this.total += 1
            }
        },
        watch: {
            msg: function (val, oldVal) {
                console.log(val + "-----" + oldVal);
            }
        },
        components: {Test}
    }
</script>
<style lang="scss" scoped type="text/css">
</style>
