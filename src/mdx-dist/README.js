// README.md
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var frontmatter = void 0;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    span: "span",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.h1, {
      id: "den-ai-blog",
      children: ["den-ai-blog", _jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#den-ai-blog",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      })]
    }), "\n", _jsx(_components.p, {
      children: "Repository for The Den AI blog"
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
