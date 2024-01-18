// .components/header/Header.jsx
import React, { useState, useEffect } from "react";
import "./index-UVVILMGJ.css";
import { Link } from "react-router-dom";
var Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("no-scroll");
  };
  useEffect(() => {
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && menuOpen) {
        setMenuOpen(false);
        document.body.classList.toggle("no-scroll");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        backgroundColor: "#092635",
        position: "sticky",
        top: "0",
        zIndex: "4"
      },
      className: "header-con"
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          maxWidth: "1500px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }
      },
      /* @__PURE__ */ React.createElement("h1", { style: { margin: "0", lineHeight: 1, display: "inline", maxHeight: "contain" } }, /* @__PURE__ */ React.createElement(Link, { to: "/", style: { backgroundColor: "transparent", lineHeight: 1 } }, /* @__PURE__ */ React.createElement(
        "img",
        {
          src: props.props.logo.imageUrl,
          alt: "fable logo",
          style: {
            height: "48px",
            width: "112px"
          }
        }
      ))),
      /* @__PURE__ */ React.createElement("div", { className: "menu-screen" }, /* @__PURE__ */ React.createElement(
        "ul",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            fontSize: "0.9rem",
            listStyleType: "none",
            padding: 0,
            margin: 0
          }
        },
        props.props.navLinks.links.map((link, idx) => {
          if (link?.sublinks) {
            return /* @__PURE__ */ React.createElement("li", { key: idx, className: "header-link-con" }, /* @__PURE__ */ React.createElement(
              Menu,
              {
                title: link.title,
                subTitle: link.subtitle,
                subLinks: link.sublinks
              }
            ));
          }
          return /* @__PURE__ */ React.createElement("li", { className: "header-link-con", key: idx }, /* @__PURE__ */ React.createElement(
            Link,
            {
              className: "header-link",
              to: "#"
            },
            link.title
          ));
        })
      )),
      /* @__PURE__ */ React.createElement("div", { className: `hamburger-icon ${menuOpen ? "open" : ""}`, onClick: handleToggleMenu }, /* @__PURE__ */ React.createElement("div", { className: "bar" }), /* @__PURE__ */ React.createElement("div", { className: "bar" }), /* @__PURE__ */ React.createElement("div", { className: "bar" })),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "cta-con",
          style: {
            alignItems: "center",
            gap: "1.2rem"
          }
        },
        props.props.ctas.map((cta, idx) => {
          return /* @__PURE__ */ React.createElement(
            Link,
            {
              style: {
                border: "2px solid #9ec8b9",
                transition: "all .2s ease-out",
                padding: "1rem 2rem",
                font: "inherit",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: 500
              },
              className: `${cta.type === "secondary" ? "cta-secondary" : "cta-primary"}`,
              to: cta.url,
              key: `${cta.url}-${idx}`
            },
            cta.title
          );
        })
      )
    )
  ), /* @__PURE__ */ React.createElement("div", { className: `overlay ${menuOpen ? "open" : ""}`, onClick: handleToggleMenu }), /* @__PURE__ */ React.createElement("div", { className: `menu-content ${menuOpen ? "open" : ""}` }, /* @__PURE__ */ React.createElement("div", { style: { height: "100%", padding: "1rem" } }, /* @__PURE__ */ React.createElement("div", { className: "menu-content-mobile" }, props.props.navLinks.links.map((link) => /* @__PURE__ */ React.createElement(MenuItemMobile, { key: link.title, item: link }))))));
};
var MenuItemMobile = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleCollapsible = () => {
    setIsOpen(!isOpen);
  };
  const hasSublinks = props.item.sublinks && props.item.sublinks.length > 0;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `menu-item ${hasSublinks ? "collapsible" : ""} ${isOpen ? "open" : ""}`
    },
    hasSublinks ? /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "menu-item-header",
        onClick: handleToggleCollapsible,
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }
      },
      /* @__PURE__ */ React.createElement("span", null, props.item.title),
      /* @__PURE__ */ React.createElement(
        "img",
        {
          src: "https://github.com/sid-patri-fable/fable-blog/assets/117962421/ce8148a2-9141-43be-ba29-d04c908af25d",
          style: {
            height: "8px",
            marginLeft: "5px",
            transform: `${isOpen ? "rotate(180deg)" : "rotate(0)"}`,
            transition: "all 0.3s ease-out"
          },
          alt: "icon"
        }
      )
    ) : /* @__PURE__ */ React.createElement(
      Link,
      {
        className: "menu-item-header",
        to: props.item.url,
        style: {
          width: "100%",
          color: "inherit",
          display: "block",
          background: "inherit"
        }
      },
      props.item.title
    ),
    hasSublinks && /* @__PURE__ */ React.createElement("div", { className: "menu-item-content" }, props.item.sublinks.map((sublink, idx) => /* @__PURE__ */ React.createElement(Link, { to: sublink.url, key: `${sublink.title}-${idx}`, target: "_blank", rel: "noopener noreferrer", style: { display: "flex", alignItems: "center", gap: "0.8rem" } }, /* @__PURE__ */ React.createElement("img", { src: sublink.logo, alt: "logo" }), /* @__PURE__ */ React.createElement("div", { key: sublink.title }, sublink.title))))
  );
};
function Menu(props) {
  const [showMenu, setShowMenu] = useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(
    "span",
    {
      className: "header-link",
      onMouseEnter: () => setShowMenu(true),
      onMouseLeave: () => setShowMenu(false),
      style: {
        cursor: "pointer"
      }
    },
    props.title,
    /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "https://github.com/sid-patri-fable/fable-blog/assets/117962421/ce8148a2-9141-43be-ba29-d04c908af25d",
        style: {
          width: "1rem",
          height: "1rem",
          marginLeft: "5px",
          marginTop: "5px",
          transform: `${showMenu ? "rotate(180deg)" : "rotate(0)"}`,
          transition: "all 0.3s ease-out"
        },
        alt: "icon"
      }
    )
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      onMouseEnter: () => setShowMenu(true),
      onMouseLeave: () => setShowMenu(false),
      className: `menu ${showMenu ? "menu-visible" : "menu-hidden"}`,
      style: {
        width: "fit-content",
        minWidth: "360px",
        maxWidth: "1500px",
        height: "fit-content",
        backgroundColor: "transparent",
        position: "absolute",
        top: "40px",
        left: "50%",
        zIndex: -1
      }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          margin: "0.5rem",
          height: "100%",
          backgroundColor: "#fff",
          borderRadius: "0.6rem",
          display: "flex",
          padding: "1rem",
          alignItems: "stretch"
        }
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            flex: "0.6",
            padding: "1rem"
          }
        },
        /* @__PURE__ */ React.createElement(
          "ul",
          {
            style: {
              listStyle: "none",
              padding: 0,
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "0.4rem",
              marginTop: "1rem"
            }
          },
          props.subLinks.map((link, idx) => {
            return /* @__PURE__ */ React.createElement(
              "li",
              {
                key: idx,
                style: {
                  margin: "0"
                }
              },
              /* @__PURE__ */ React.createElement(
                Link,
                {
                  to: link.url,
                  style: {
                    color: "#000",
                    fontSize: "0.9rem",
                    display: "flex",
                    gap: "0.6rem",
                    alignItems: "center",
                    padding: "0.5rem",
                    borderRadius: "8px"
                  },
                  className: "menu-links"
                },
                /* @__PURE__ */ React.createElement(
                  "div",
                  null,
                  /* @__PURE__ */ React.createElement(
                    "p",
                    {
                      style: {
                        fontSize: "0.9rem",
                        margin: 0,
                        fontWeight: "600",
                        lineHeight: "1"
                      }
                    },
                    link.title
                  ),
                  /* @__PURE__ */ React.createElement(
                    "p",
                    {
                      style: {
                        fontSize: "0.9rem",
                        margin: 0,
                        lineHeight: "1",
                        marginTop: "4px"
                      }
                    },
                    link.subtitle
                  )
                )
              )
            );
          })
        )
      )
    )
  )));
}
var Header_default = Header;
export {
  Header_default as default
};
