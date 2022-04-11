import React from 'react';

var styles = {"container":"_ExampleModule__container__UdHrY"};

const ExampleModule = ({
  appName
}) => {
  return React.createElement("div", {
    className: styles.container
  }, React.createElement("h1", null, "Hello: "), React.createElement("span", null, appName));
};

const Example = ({
  appName
}) => {
  return React.createElement(ExampleModule, {
    appName: appName
  });
};

export { Example };
//# sourceMappingURL=index.modern.js.map
