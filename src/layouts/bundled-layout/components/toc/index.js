// ../docs/packages/cli/dist/static/layouts/standard-blog-layout/components/toc/index.js
import React from "react";
import "./index-2DBKIBMD.css";
function Toc(props) {
  if (!props.toc.length)
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  return /* @__PURE__ */ React.createElement("div", { className: "toc-wrapper" }, /* @__PURE__ */ React.createElement("div", { className: "toc-header" }, props.props.title), /* @__PURE__ */ React.createElement("aside", { className: "toc-aside-con" }, props.toc.map((heading) => /* @__PURE__ */ React.createElement(
    "a",
    {
      className: "toc-anchor-tag",
      style: { marginLeft: heading.depth * 10 },
      href: `#${heading.data.id}`,
      key: heading.data.id
    },
    heading.value
  ))));
}
export {
  Toc as default
};
