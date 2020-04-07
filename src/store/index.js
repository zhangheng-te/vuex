import Vue from 'vue';
// 引入vuex
import Vuex from 'vuex';
// 以插件的方式加载vuex。类似于vue-router
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        num: 1 //全局的数据可以放在state
    }
});