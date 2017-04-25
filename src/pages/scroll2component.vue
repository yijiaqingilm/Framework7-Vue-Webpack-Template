<template>
    <f7-page class="infinite-scroll">
        <f7-navbar title="scroll2component" back-link="Back" sliding></f7-navbar>
        <f7-block inner>
            <div class="list-block">
                <ul>
                    <li class="item-content" v-for="item in dataList">
                        <div class="item-inner">
                            <div class="item-title">{{item.type}}</div>
                        </div>
                    </li>

                </ul>
            </div>
        </f7-block>
        <infinite-loading :on-infinite="loadData" ref="infiniteLoading" spinner="bubbles">
            <div slot="no-more">没有更多数据</div>
            <div slot="no-results">没有数据</div>
        </infinite-loading>
    </f7-page>
</template>

<script type="text/ecmascript-6">
    import InfiniteLoading from 'vue-infinite-loading'
    import moment from 'moment'
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
                    type: 'item' + i
                }
                this.dataList.push(obj);
            }
            console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
        },
        components: {InfiniteLoading},
        methods: {
            loadData: function () {
                console.log('触发loaddata');
                this.$http.post('/mobile/type-list').then(response => {
                    var result = response.body.data;
                    if (result.length > 0) {
                        this.dataList = [].concat(this.dataList).concat(result);
                        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
                        console.log('complete')
                    } else {
                        // this.$refs.infiniteLoading.$emit('$infiniteLoading:complete')
                    }

                });
            }
        }
    }
</script>
<style lang="scss" scoped type="text/css">
    @import "../assets/static/sass/scroll.scss";

    .list-block {
        font-size: 16px;
    }
</style>
