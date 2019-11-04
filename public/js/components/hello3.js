define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    template: '<div class="hello3">{{ greeting }} <span><slot>{{ name }}</slot></span>!</div>',

    beforeCreate() {
      loadCss({
        content: '.hello3{color:aqua}'
      });
    },

    props: ['name'],

    data() {
      return {
        greeting: 'Hello3'
      };
    }

  };
  _exports.default = _default;
});