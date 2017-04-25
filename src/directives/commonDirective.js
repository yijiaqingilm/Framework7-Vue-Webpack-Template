/**
 * Created by Administrator on 2017/4/25.
 */
import Vue from 'vue'

Vue.directive('focus', {
    inserted: function (el) {
        console.log(el);
        console.log('inserted')
        el.focus();
    },
    update: function (el) {
        console.log('update')
    }
});

Vue.directive('iscroll', {
    inserted: function (el) {

    }
})

Vue.directive('iscroll', function (el, binding) {
    window.Dom7(el).on('infinite', function () {
        console.log('scroll');
        var arr = [{title: 'title', name: 'item'}]
        binding.value.callBack(arr);
        binding.value.$f7.detachInfiniteScroll(el);
    });
});