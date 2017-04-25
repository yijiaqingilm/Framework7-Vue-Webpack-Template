<template>
    <div>
        <f7-page>
            <f7-navbar title="test Param" back-link="Back" sliding></f7-navbar>
            <f7-block inner>
                <div class="test">测试 路由 参数
                    <div class="child">child</div>
                </div>
                <div @click="back">xx{{context.Back}}</div>
                <ul>
                    <li>Url: {{$route.url}}</li>
                    <li>Path: {{$route.path}}</li>
                    <li>query ID: {{$route.query}}</li>
                    <li>hash: {$route.hash}</li>
                    <li>params: {{$route.params}}</li>
                </ul>

                <ul>
                    <li @click="loadVue('about')">load about vue</li>
                    <li @click="refreshPage">refreshPage</li>
                    <li>
                        <f7-link href='about'>link about vue</f7-link>
                    </li>
                    <li @click="showMsg">
                        调用通知
                    </li>
                    <li>
                        <f7-link open-popup="#popupLogin"> f7link 调用popup</f7-link>
                    </li>
                    <li @click="myAlert">
                        调用alert
                    </li>
                    <li>
                        <f7-link href="/slot">goto slot 测试页面</f7-link>
                    </li>
                    <li>
                        <input type="text" v-focus>
                    </li>
                </ul>
            </f7-block>

            <f7-popup tablet-fullscreen id="popupLogin">
                <!-- Popup content goes here -->
                <div>popup content ...</div>
                <div>
                    <f7-link close-popup="#popupLogin">close popup</f7-link>
                </div>
            </f7-popup>
        </f7-page>


    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        data(){
            return {
                context: {},
                msg: 'hi'
            }
        },
        created: function () {
            this.context = this.setLangs('common').langs;
            console.log(this.context);
            console.log('语言包')
            console.log("测试路由参数");
            console.log(this.$route);

            console.log('测试路由');
            console.log(this.$router);

        },
        destroyed: function () {
            console.log("销毁组件param")
        },
        methods: {
            back: function () {
                console.log("返回");
                console.log(this.$route);
            },
            loadVue: function (vueName) {
                console.log(`go to  ${vueName}`);
                this.$router.loadPage(vueName);
            },
            refreshPage: function () {
                this.$router.refreshPage();
            },
            showMsg: function () {
                //addNotification
                this.$f7.addNotification({
                    title: 'tes',
                    message: 'xxx',
                    hold: 3000,
                    onClose: function () {
                        console.log('关闭回调');
                    }

                })
            },
            myAlert: function () {
                this.$f7.alert('hi', '友情提示', function () {
                    console.log('alert 回调');
                });
            }
        },
        computed: {}
    }
</script>
<style lang="scss" scoped type="text/css">
    .test {
        color: red;

    .child {
        color: #2196F3;
    }

    }
</style>
