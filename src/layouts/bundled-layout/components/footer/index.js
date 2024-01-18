// ../docs/packages/cli/dist/static/layouts/standard-blog-layout/components/footer/index.js
import React from "react";
import "./index-OQI7RTI5.css";
function Footer(props) {
  const footerLogoUrl = props.props.logo;
  const copyrightText = props.props.copyright || "";
  const links = props.props.links || [];
  return /* @__PURE__ */ React.createElement("footer", { className: "footer" }, /* @__PURE__ */ React.createElement("div", { className: "footer-con" }, /* @__PURE__ */ React.createElement("div", { className: "footer-con-main" }, /* @__PURE__ */ React.createElement("div", { className: "logo-con" }, footerLogoUrl ? /* @__PURE__ */ React.createElement(
    "img",
    {
      className: "footer-logo",
      src: footerLogoUrl,
      alt: "logo"
    }
  ) : /* @__PURE__ */ React.createElement(React.Fragment, null)), /* @__PURE__ */ React.createElement("div", { className: "footer-con-links" }, links.map(({ heading, links: links2 }, idx1) => {
    return /* @__PURE__ */ React.createElement("div", { key: idx1 }, /* @__PURE__ */ React.createElement("p", { className: "footer-link-title" }, heading), /* @__PURE__ */ React.createElement("ul", { className: "footer-links" }, links2?.map(({ title, url }, idx2) => {
      return /* @__PURE__ */ React.createElement("li", { key: `${idx1}.${idx2}` }, /* @__PURE__ */ React.createElement("a", { href: url }, title));
    })));
  }))), /* @__PURE__ */ React.createElement("div", { className: "copyright-con" }, footerLogoUrl && /* @__PURE__ */ React.createElement(
    "img",
    {
      className: "footer-logo-small",
      src: footerLogoUrl,
      alt: "logo"
    }
  ), /* @__PURE__ */ React.createElement("p", { className: "footer-copyright-text" }, copyrightText))));
}
export {
  Footer as default
};
