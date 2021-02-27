import { Vue } from 'vue-property-decorator';
import Component from 'vue-class-component';
import { App } from "./components";

require("./style.styl");
const init = async () => {
  let app = new Vue({
    el: '#app-container',
    components: { App },
    methods: {}
  });
}

window.addEventListener("load", event => init());
