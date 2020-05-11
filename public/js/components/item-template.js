define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    template: '<div></div>',

    beforeCreate() {
      loadCss({
        content: 'body{font-family:Menlo, Consolas, monospace;color:#444}.item{cursor:pointer}.bold{font-weight:bold}ul{padding-left:1em;line-height:1.5em;list-style-type:dot}'
      });
    }

  };
  _exports.default = _default;
});