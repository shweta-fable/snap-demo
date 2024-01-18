// index.mdx
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// .components/all-posts/AllPosts.jsx
import React from "react";
import "./index-6QB5YSIS.css";
import { Link } from "react-router-dom";
var getLatestPosts = (manifest) => {
  const latestPosts = [];
  const queue = [manifest.tree];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node.nodeType === "file" && node.ext === ".mdx") {
      latestPosts.push({ ...node.frontmatter, link: node.pathName });
    }
    node.children?.forEach((child) => queue.push(child));
  }
  return latestPosts;
};
function AllPosts(props) {
  const latestPosts = getLatestPosts(props.manifest);
  const borderColor = ["#ff5cc5", "#37b8ff", "#c24ce3", "#ffc901"];
  return /* @__PURE__ */ React.createElement("div", { className: "posts-con" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "space-evenly",
        gap: "2rem",
        margin: "1rem auto",
        maxWidth: "1400px",
        flexDirection: "column"
      }
    },
    latestPosts.map((post, idx) => {
      if (post.link === "/blog/")
        return /* @__PURE__ */ React.createElement(React.Fragment, { key: `${post.link}-${idx}` });
      return /* @__PURE__ */ React.createElement(
        Link,
        {
          className: "post-banner",
          key: `${post.link}-${idx}`,
          to: post.link,
          style: {
            backgroundColor: "white",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            borderBottom: `2px solid ${borderColor[idx % borderColor.length]}`,
            alignItems: "center",
            boxShadow: "0 6px 16px 0 rgba(0, 0, 0, 0.05)"
          }
        },
        /* @__PURE__ */ React.createElement(
          "img",
          {
            src: post.bannerImg,
            style: {
              borderRadius: "10px",
              maxHeight: "376px"
            },
            className: "post-img"
          }
        ),
        /* @__PURE__ */ React.createElement(
          "div",
          {
            style: {
              height: "100%"
            },
            className: "post-content"
          },
          /* @__PURE__ */ React.createElement("div", { style: { textAlign: "left", color: "#2c2c2c" } }, /* @__PURE__ */ React.createElement("p", { style: { color: "#747474" } }, post.date), /* @__PURE__ */ React.createElement("h2", null, post.title), /* @__PURE__ */ React.createElement("p", null, post.subtitle)),
          /* @__PURE__ */ React.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                color: "#713aff",
                fontWeight: "500"
              }
            },
            /* @__PURE__ */ React.createElement("span", null, "Read more"),
            /* @__PURE__ */ React.createElement(
              "img",
              {
                src: "https://assets.website-files.com/632d5bc037481960cc880d53/633df61bb33515b8f0103b50_Vector.svg"
              }
            )
          )
        )
      );
    })
  ));
}

// .components/banner/index.jsx
import React2 from "react";
import "./index-F7PRPUBQ.css";
function Banner(props) {
  return /* @__PURE__ */ React2.createElement(
    "div",
    {
      className: "banner",
      style: {
        width: "100%",
        textAlign: "center",
        margin: "0 auto",
        paddingTop: "80px",
        paddingBottom: "80px",
        display: "flex",
        flexDirection: "column",
        gap: "80px",
        alignItems: "center",
        position: "relative",
        color: "#fff"
      }
    },
    /* @__PURE__ */ React2.createElement(
      "div",
      {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: props.height ? props.height : "95vh",
          backgroundColor: "#092635",
          zIndex: -10,
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px"
        }
      }
    ),
    props.children
  );
}

// index.mdx
var frontmatter = {
  "title": "The Den AI Blog",
  "ogTitle": "The Den AI Blog",
  "ogDescription": "A must follow blog for all the sales and marketing leaders."
};
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    span: "span",
    ...props.components
  };
  return _jsxs(Banner, {
    config: props.config,
    height: "60vh",
    children: [_jsxs("div", {
      style: {
        maxWidth: "546px",
        padding: "0 16px"
      },
      children: [_jsxs(_components.h1, {
        id: "blog",
        children: ["Blog", _jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#blog",
          children: _jsx(_components.span, {
            className: "icon icon-link"
          })
        })]
      }), _jsx(_components.p, {
        children: "Explore the world of demo automation and get insights into strategies that you can use to increase your conversion and close more deals."
      })]
    }), _jsx(AllPosts, {
      manifest: props.manifest,
      config: props.config
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
export {
  MDXContent as default,
  frontmatter
};
