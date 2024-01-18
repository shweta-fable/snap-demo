// ../docs/packages/cli/dist/static/layouts/standard-blog-layout/Layout.js
import React, { lazy } from "react";
function Layout(props) {
  const {
    headerComp: Header,
    sidepanelComp: Sidepanel,
    footerComp: Footer,
    tocComp: Toc
  } = props;
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
  return /* @__PURE__ */ React.createElement("div", { className: "con", key: "a" }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("div", { className: "main-wrapper" }, /* @__PURE__ */ React.createElement(Sidepanel, null), /* @__PURE__ */ React.createElement("main", { className: "main-con", style: { backgroundColor: generateNewColor() } }, props.children), props.config.props.toc.show && /* @__PURE__ */ React.createElement(Toc, null)), /* @__PURE__ */ React.createElement(Footer, null));
}
export {
  Layout as default
};
