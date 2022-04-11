const { override } = require("customize-cra");
const findWebpackPlugin = (plugins, pluginName) =>
  plugins.find((plugin) => plugin.constructor.name === pluginName);
const overrideProcessEnv = (value) => (configuracion) => {
  const plugin = findWebpackPlugin(configuracion.plugins, "DefinePlugin");
  const processEnv = plugin.definitions["process.env"] || {};
  plugin.definitions["process.env"] = { ...processEnv, ...value };
  return configuracion;
};
const getEnvToDefine = (envNames) =>
  envNames.reduce((a, value) => {
    a[value] = JSON.stringify(process.env[value]);
    return a;
  }, {});
const overridePassedProcessEnv = (names) =>
  overrideProcessEnv(getEnvToDefine(names));
module.exports = override(overridePassedProcessEnv(["REACT_APP_ENV"]));
