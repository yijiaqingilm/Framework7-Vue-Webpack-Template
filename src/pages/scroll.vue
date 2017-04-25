<template>
    <f7-page class="infinite-scroll">
        <f7-navbar title="scroll" back-link="Back" sliding></f7-navbar>

        <div class="page-content infinite-scroll" v-iscroll="{url:url,param:param,callBack:setDataList,$f7:$f7}">
            <div class="list-block">
                <ul>
                    <li class="item-content" v-for="item in dataList">
                        <div class="item-inner">
                            <div class="item-title">{{item.name}}</div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- Preloader -->
            <div class="infinite-scroll-preloader">
                <div class="preloader"></div>
            </div>
        </div>
    </f7-page>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return {
                dataList: [],
                url: '/list',
                message: 'hello!',
                param: 'pid=3'
            }
        },
        created: function () {
            for (var i = 0; i < 20; i++) {
                var obj = {
                    title: 'title ' + i,
                    name: 'item' + i
                }
                this.dataList.push(obj);
            }
        },
        computed: {
            getDataList: function () {

            }
        },
        methods: {
            setDataList: function (data) {
                this.dataList = [].concat(this.dataList).concat(data);
            }
        }
    }
</script>
<style lang="scss" scoped type="text/css">
</style>
