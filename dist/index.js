function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {"container":"_ExampleModule__container__UdHrY"};

var ExampleModule = function ExampleModule(_ref) {
  var appName = _ref.appName;
  return React.createElement("div", {
    className: styles.container
  }, React.createElement("h1", null, "Hello: "), React.createElement("span", null, appName));
};

var Example = function Example(_ref) {
  var appName = _ref.appName;
  return React.createElement(ExampleModule, {
    appName: appName
  });
};

exports.Example = Example;
//# sourceMappingURL=index.js.map
