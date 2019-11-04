import Vue from 'vue';
import Hello from './components/hello';
import Hello2 from './components/hello2';
import Hello3 from './components/hello3';
 
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    components: {
        Hello2,
        Hello3
    }
});