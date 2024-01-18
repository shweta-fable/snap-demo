// ../docs/packages/cli/dist/static/layouts/standard-blog-layout/components/sidepanel/index.js
import React from "react";
import "./index-RNBKK7NF.css";
import { Link } from "react-router-dom";
import { useApplicationContext } from "../../../../application-context";
var Node = ({ node, onClick }) => {
  return /* @__PURE__ */ React.createElement("div", { onClick, style: { marginLeft: "1rem" } }, node.url && /* @__PURE__ */ React.createElement(Link, { to: node.url, "data-active": window.location.pathname === node.url }, node.title), !node.url && /* @__PURE__ */ React.createElement("div", null, node.title), node.children && /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "1rem" } }, node.children.map((child, idx) => /* @__PURE__ */ React.createElement(Node, { key: `${child.url}-${idx}`, node: child }))));
};
function Sidepanel(props) {
  const {
    showSidePanel,
    handleShowSidePanel,
    sidePanelLinks: linksTree
  } = useApplicationContext();
  const handleNodeClick = () => {
    if (window.innerWidth < 800) {
      handleShowSidePanel(false);
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    "aside",
    {
      className: "aside-con",
      style: {
        transform: showSidePanel ? "none" : "translateX(-100%)",
        display: showSidePanel ? "block" : "none"
      }
    },
    /* @__PURE__ */ React.createElement(
      Node,
      {
        onClick: handleNodeClick,
        key: linksTree.title,
        node: linksTree
      }
    )
  ));
}
export {
  Sidepanel as default
};
