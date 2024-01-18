var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../docs/packages/cli/dist/static/layouts/standard-blog-layout/Temp.js
var Temp_exports = {};
__export(Temp_exports, {
  default: () => Temp_default
});
import React from "react";
function Apple() {
  return /* @__PURE__ */ React.createElement("div", { style: { height: "1000px" } }, /* @__PURE__ */ React.createElement("p", null, "Loading Temp"));
}
var Temp_default;
var init_Temp = __esm({
  "../docs/packages/cli/dist/static/layouts/standard-blog-layout/Temp.js"() {
    Temp_default = Apple;
  }
});

// ../docs/packages/cli/dist/static/layouts/standard-blog-layout/Layout.js
import React2, { lazy } from "react";
var LazyTemp = lazy(() => Promise.resolve().then(() => (init_Temp(), Temp_exports)));
function Layout(props) {
  const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  function getCharacter(index) {
    return hexCharacters[index];
  }
  function generateNewColor() {
    let hexColorRep = "#";
    for (let index = 0; index < 6; index++) {
      const randomPosition = Math.floor(Math.random() * hexCharacters.length);
      hexColorRep += getCharacter(randomPosition);
    }
    return hexColorRep;
  }
  return /* @__PURE__ */ React2.createElement("div", { className: "con", key: "a" }, /* @__PURE__ */ React2.createElement("div", { className: "main-wrapper" }, /* @__PURE__ */ React2.createElement("main", { className: "main-con", style: { backgroundColor: "red" } })));
}
export {
  Layout as default
};
