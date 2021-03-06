import Vuex from "vuex"
import Vue from "vue"
import todos from "./modules/todo"

//Load Vuex
Vue.use(Vuex);

//create store
export default new Vuex.Store({
    modules: {
        todos
    }
})