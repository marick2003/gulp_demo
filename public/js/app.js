define(["vue", "./components/hello", "./components/hello2", "./components/hello3"], function (_vue, _hello, _hello2, _hello3) {
  "use strict";

  _vue = _interopRequireDefault(_vue);
  _hello = _interopRequireDefault(_hello);
  _hello2 = _interopRequireDefault(_hello2);
  _hello3 = _interopRequireDefault(_hello3);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var app = new _vue.default({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    components: {
      Hello2: _hello2.default,
      Hello3: _hello3.default
    }
  });
});