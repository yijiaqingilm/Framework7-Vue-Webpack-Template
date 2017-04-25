<template>
    <div>
        <f7-page>
            <f7-navbar title="accordion" back-link="Back" sliding></f7-navbar>
            <div class="test">
                <div class="child">
                    <f7-link href="/login"> go login</f7-link>
                </div>
            </div>
            <f7-list accordion>
                <f7-list-item v-for="item in dataList" :key="item" accordion-item :title="item.id">
                    <f7-accordion-content>
                        <f7-block>
                            <p>{{item.name}}</p>
                            <img alt="" :src="item.logo">
                        </f7-block>
                    </f7-accordion-content>
                </f7-list-item>
            </f7-list>
            <div @click="show">show {{showMsg}}</div>
            <f7-picker-modal :opened="showMsg" :overlay=true>
                <!-- Picker Modal content goes here -->
                xxxx
                <div @click="close">close</div>
            </f7-picker-modal>
            <f7-link open-popover="#testPopover">link方式 打开 popoverxxx</f7-link>
            <f7-button open-login-screen="#login-screen">button方式 打开 login</f7-button>


            <f7-link open-login-screen="#login-screen">link 方式 打开 login</f7-link>
            <f7-button open-popover="#testPopover">testPopover</f7-button>
            <f7-popover id="testPopover">
                <!-- Popover content goes here -->
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, necessitatibus!
            </f7-popover>


        </f7-page>
        <!-- Login Screen -->
        <f7-login-screen id="login-screen">
            <f7-view>
                <f7-pages>
                    <f7-page login-screen>
                        <f7-login-screen-title>Login</f7-login-screen-title>
                        <f7-list form>
                            <f7-list-item>
                                <f7-label>Username</f7-label>
                                <f7-input name="username" placeholder="Username" type="text"></f7-input>
                            </f7-list-item>
                            <f7-list-item>
                                <f7-label>Password</f7-label>
                                <f7-input name="password" type="password" placeholder="Password"></f7-input>
                            </f7-list-item>
                        </f7-list>
                        <f7-list>
                            <f7-list-button title="Sign In" close-login-screen></f7-list-button>
                            <f7-list-label>
                                <p>Click Sign In to close Login Screen</p>
                            </f7-list-label>
                        </f7-list>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-login-screen>
    </div>

</template>

<script type="text/ecmascript-6">
    /* style */
    /* 组件 */
    import Test from 'components/test.vue'

    export default {
        data(){
            return {
                dataList: {},
                showMsg: false,
                showModal: true,
            }
        },
        created: function () {
            ///mobile/brand-list?sign=98ef87928337a87bd3b7a1f1181b3704&timestamp=1492682748790&channel=browser&language=en-US&clientVersion=1.0.0
            this.$http.post('/mobile/type-list').then(response => {
                this.dataList = response.body.data;
                console.log(this.dataList)
            });
        },
        methods: {
            show: function () {
                console.log('show');
                this.showMsg = true;
            },
            close: function () {
                this.showMsg = false;
            },
            showPopover: function () {
                this.$refs.popover.open('popover-about');
            },
            showTest: function () {
                console.log('show test')
                this.$refs.t.showHello();
            }
        },
        components: {Test}
    }
</script>
<style lang="sass" scoped type="text/css">
</style>


