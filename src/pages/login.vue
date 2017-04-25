<template>
    <f7-login-screen>
        <f7-view>
            <f7-pages>
                <f7-page login-screen>
                    <f7-login-screen-title>My App 1</f7-login-screen-title>
                    <f7-list form>
                        <f7-list-item>
                            <f7-label>Username</f7-label>
                            <f7-input name="username" placeholder="Username"></f7-input>
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
