const { override, fixBabelImports,addDecoratorsLegacy } = require("customize-cra");
module.exports = override(
  // antd按需加载
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css"
  }),
  // 装饰器
  addDecoratorsLegacy()
);
