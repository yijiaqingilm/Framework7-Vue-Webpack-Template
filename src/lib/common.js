/**
 * Created by Administrator on 2017/4/24.
 */
import $http from 'vue-resource';
class common {
    constructor() {
        this.name = "what";
        console.log('init');
    }

    getName() {
        console.log(this.name)
    }

}

export default new common();
