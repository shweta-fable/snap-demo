// the-ultimate-product-demo-guide-for-sales-teams-to-close-more-deals.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// .components/banner/index.jsx
import React from "react";
import "./index-F7PRPUBQ.css";
function Banner(props) {
  return /* @__PURE__ */ React.createElement(
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
    /* @__PURE__ */ React.createElement(
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

// .components/Promotion.jsx
import React2 from "react";
import "./index-K6YF3KOK.css";
function Promotion(props) {
  return /* @__PURE__ */ React2.createElement(
    "div",
    {
      className: "promotion-con",
      style: {
        maxWidth: "1200px",
        backgroundColor: "#092635",
        color: "#fff",
        padding: "5rem 2rem",
        borderRadius: "10px",
        textAlign: "center"
      }
    },
    /* @__PURE__ */ React2.createElement("div", { style: { maxWidth: "600px", margin: "0 auto" } }, props.children)
  );
}

// .components/Content.jsx
import React4 from "react";

// .components/toc/index.jsx
import React3 from "react";
import "./index-5OBCOGRB.css";
import { Link } from "react-router-dom";
var TOC = (props) => {
  return /* @__PURE__ */ React3.createElement("div", { className: "toc-con" }, /* @__PURE__ */ React3.createElement("p", { className: "toc-title" }, "Table of Contents"), /* @__PURE__ */ React3.createElement("ul", { className: "toc-list" }, props.toc.map((content) => {
    return /* @__PURE__ */ React3.createElement(
      "li",
      {
        style: {
          marginLeft: content.depth * 10
        },
        className: "toc-list-item",
        key: `${content.data.hProperties.id}`
      },
      /* @__PURE__ */ React3.createElement(Link, { to: `#${content.data.hProperties.id}` }, content.value)
    );
  })));
};
var toc_default = TOC;

// .components/Content.jsx
function Content(props) {
  return /* @__PURE__ */ React4.createElement("div", { className: "content-con" }, /* @__PURE__ */ React4.createElement(toc_default, { toc: props.toc }), /* @__PURE__ */ React4.createElement("div", { className: "content" }, props.children), /* @__PURE__ */ React4.createElement("div", null));
}

// .components/CoverImg.jsx
import React5 from "react";
function CoverImg(props) {
  return /* @__PURE__ */ React5.createElement(
    "img",
    {
      src: props.src,
      alt: "banner img",
      style: {
        objectFit: props?.objectFit ? props.objectFit : "cover",
        verticalAlign: "middle",
        width: "100%",
        height: "100%",
        maxHeight: "727px",
        maxWidth: "1164px",
        borderRadius: "10px"
      }
    }
  );
}

// .components/PromotionBannerCta.jsx
import React6 from "react";
import { Link as Link2 } from "react-router-dom";
function PromotionBannerCta(props) {
  return /* @__PURE__ */ React6.createElement(
    Link2,
    {
      style: {
        fontWeight: "600",
        fontSize: "1rem",
        background: "#9ec8b9",
        border: "none",
        padding: "12px 10px",
        color: "#000",
        borderRadius: "6px",
        cursor: "pointer",
        marginTop: "12px"
      },
      to: props.href
    },
    props.cta
  );
}

// the-ultimate-product-demo-guide-for-sales-teams-to-close-more-deals.mdx
var frontmatter = {
  "title": "The Ultimate Product Demo Guide for Sales Teams to Close More Deals",
  "subtitle": "In this comprehensive guide, we will dive into everything you want to know about product demos and how you can nail your demos to close more deals.",
  "date": "January 10, 2024",
  "bannerImg": "https://github.com/sid-patri-fable/fable-blog/assets/155963795/adbda461-871c-45e7-8583-559cd0cd42f3",
  "ogTitle": "The Ultimate Product Demo Guide for Sales Teams to Close More Deals",
  "ogDescription": "Wondering what product demos are and how they can boost your sales? Look no further! This ultimate guide provides valuable insights and strategies to help you master the art of product demos.",
  "ogImage": "https://github.com/sid-patri-fable/fable-blog/assets/155963795/adbda461-871c-45e7-8583-559cd0cd42f3)"
};
var bannerDate = "January 10, 2024";
var bannerTitle = "The Ultimate Product Demo Guide for Sales Teams to Close More Deals";
var bannerSubtitle = "In this comprehensive guide, we will dive into everything you want to know about product demos and how you can nail your demos to close more deals.";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    span: "span",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(Banner, {
      config: props.config,
      children: [_jsxs("div", {
        style: {
          maxWidth: "768px"
        },
        children: [bannerDate, _jsxs(_components.h1, {
          id: "banner-title",
          children: [bannerTitle, _jsx(_components.a, {
            "aria-hidden": "true",
            tabIndex: "-1",
            href: "#banner-title",
            children: _jsx(_components.span, {
              className: "icon icon-link"
            })
          })]
        }), bannerSubtitle]
      }), _jsx(CoverImg, {
        src: "https://github.com/sid-patri-fable/fable-blog/assets/155963795/adbda461-871c-45e7-8583-559cd0cd42f3"
      })]
    }), "\n", _jsxs(Content, {
      toc: props.toc,
      children: [_jsx(_components.p, {
        children: "Product demos are the perfect way to engage prospective customers or potential buyers and close more deals. From features to use cases and user management, there's much to show and tell about your product. However, the key is to ensure that your users know exactly how you can solve their problems. This is why it's often said that a product demo can make or break a deal. In this guide, we\u2019ll cover everything you need to know about product demos."
      }), _jsxs(_components.h2, {
        id: "what-exactly-is-a-product-demo",
        children: ["What exactly is a product demo?", _jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#what-exactly-is-a-product-demo",
          children: _jsx(_components.span, {
            className: "icon icon-link"
          })
        })]
      }), _jsx(_components.p, {
        children: "A product demonstration is an essential sales tool to demonstrate the value of your product and convince prospective buyers. During a product demo, you will explain how your customers can use your product\u2019s key features, the outcomes they can expect, and their overall impact when using your product. This software demo provides an opportunity for prospects to interact with the platform or software, which allows them to get more in-depth knowledge about what it is that you\u2019re offering. It isn\u2019t always necessary to go into every single detail of product features that are available and make it a technical demo but instead focus on relevant features that they might need for their business."
      }), _jsx(_components.p, {
        children: "A successful product demo requires thorough preparation and careful planning. It is important for the customer to have all the necessary information to make an informed decision based on their needs. It is crucial to clearly demonstrate how your product can solve their problems and emphasize the key product features that have been highlighted during the conversation."
      }), _jsxs(_components.h2, {
        id: "what-is-the-significance-of-product-demos",
        children: ["What is the significance of product demos?", _jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#what-is-the-significance-of-product-demos",
          children: _jsx(_components.span, {
            className: "icon icon-link"
          })
        })]
      }), _jsx(_components.p, {
        children: "Product demos are important because they demonstrate the value and capabilities of your product to prospects, helping them understand its benefits."
      }), _jsx(_components.p, {
        children: "If you\u2019re selling software-as-a-service (SaaS) products, a great way to capture customer attention is by demonstrating how easy it is to set up an account and start using the platform right away. Additionally, focusing on its core benefits such as increased productivity or automation can help show prospects why they should choose your SaaS product over others. Ultimately, no matter what type of product you\u2019re selling, creating compelling demos with clear-cut messages can be very influential in helping your prospective customers in their buying decisions."
      }), _jsxs(_components.h2, {
        id: "are-product-demos-and-sales-demos-the-same",
        children: ["Are product demos and sales demos the same?", _jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#are-product-demos-and-sales-demos-the-same",
          children: _jsx(_components.span, {
            className: "icon icon-link"
          })
        })]
      }), _jsx(_components.p, {
        children: "A product demo is different from a sales demo because it focuses on helping the viewer learn to use a product they already have, rather than trying to sell it to them."
      }), _jsx(_components.p, {
        children: "The purpose of a sales demonstration is to educate customers on the benefits of a product or service and ensure they have a thorough understanding of its usage before making a purchase."
      }), _jsxs(_components.h2, {
        id: "at-what-stage-in-the-sales-process-does-a-product-demo-typically-occur",
        children: ["At what stage in the sales process does a product demo typically occur?", _jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#at-what-stage-in-the-sales-process-does-a-product-demo-typically-occur",
          children: _jsx(_components.span, {
            className: "icon icon-link"
          })
        })]
      }), _jsx(_components.p, {
        children: "A product demo is when a sales rep presents a product or software to show its value and benefits to a prospect."
      }), _jsx(_components.p, {
        children: "Using a demo platform like Fable helps sales professionals shorten the sales cycle by sharing personalized interactive demos with prospects. Always send a follow-up email after the product demo to remind the prospect of the next steps in the sales process."
      }), _jsxs(_components.h2, {
        id: "how-to-create-a-high-converting-and-successful-product-demo",
        children: ["How to create a high-converting and successful product demo?", _jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#how-to-create-a-high-converting-and-successful-product-demo",
          children: _jsx(_components.span, {
            className: "icon icon-link"
          })
        })]
      }), _jsxs(_components.h3, {
        id: "1-have-a-comprehensive-understanding-of-both-your-customer-and-your-product",
        children: ["1. Have a comprehensive understanding of both your customer and your product", _jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#1-have-a-comprehensive-understanding-of-both-your-customer-and-your-product",
          children: _jsx(_components.span, {
            className: "icon icon-link"
          })
        })]
      }), _jsx(_components.p, {
        children: "Knowing your customer is just as important as knowing your product when it comes to sales. A comprehensive account plan can help you understand where the buyer is coming from and what they hope to get out of the product. It can also provide crucial insights regarding who they are, their position in the organization, and their role in the decision-making process."
      }), _jsx(_components.p, {
        children: "Having a good understanding of who will be present at your product demo before arriving is invaluable. Research about them may include looking into their roles in the organization, their decision-making authority, any pre-existing interactions with your team, or any other resources that might give you more insight into them. Doing this allows you to tailor your demo around their needs and objectives and increase your chances of success. Additionally, having a basic knowledge of your prospective customers' problems before meeting with them can prepare you for a more informed conversation that will ultimately impress them. When it comes to a product demo, sales teams must have knowledge that extends beyond the technical details of their product."
      }), _jsxs(_components.h3, {
        id: "2-tailor-your-demo-to-fit-the-prospects-unique-problem",
        children: ["2. Tailor your demo to fit the prospect's unique problem", _jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#2-tailor-your-demo-to-fit-the-prospects-unique-problem",
          children: _jsx(_components.span, {
            className: "icon icon-link"
          })
        })]
      }), _jsx(_components.p, {
        children: "Knowing the potential customer's needs beforehand allows you to craft a personalized demo that speaks directly to how they can benefit from the product or service. Focusing on key benefits rather than simply listing product features can help showcase how valuable your offering can be for them."
      }), _jsx(_components.p, {
        children: "By asking questions and identifying problem areas it is possible to demonstrate how each feature of your product may help your prospective customer successfully address their pain points. By providing more than just a generic sales pitch, you are increasing your chances of success."
      }), _jsx(_components.p, {
        children: "If you didn't know already - the average human's attention span is approximately 10 minutes. That too, if they're interested in the topic. So it is extremely critical for sales teams to not follow a routine script for every demo that they get into. The more tailored the product demo is for a potential buyer, the better it is for everyone involved."
      }), _jsxs(_components.h3, {
        id: "3-create-an-agenda-for-the-demo",
        children: ["3. Create an agenda for the demo", _jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#3-create-an-agenda-for-the-demo",
          children: _jsx(_components.span, {
            className: "icon icon-link"
          })
        })]
      }), _jsx(_components.p, {
        children: "The importance of having an agenda for your product demo can not be stressed enough. A structure should be applied to a product demo to ensure it flows in an organized and cohesive manner. A well-structured product demo allows the presenter to easily transition from one step to the next, making it easier for your prospective customers to understand and evaluate the merits of your product."
      }), _jsx(_components.p, {
        children: "In order to create an effective agenda, it is essential to take into account any information gathered through earlier research. This could include anything from important customer demographics or trends that are applicable when targeting newer leads. Additionally, all agendas should include an introduction that sets common ground with your prospects by establishing a human-to-human connection. When done correctly, your careful prep work will help create the perfect plan for success!"
      }), _jsxs(_components.h3, {
        id: "4-talk-less-listen-more",
        children: ["4. Talk less, listen more", _jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#4-talk-less-listen-more",
          children: _jsx(_components.span, {
            className: "icon icon-link"
          })
        })]
      }), _jsx(_components.p, {
        children: "On sales calls, it's essential to ensure that your customer feels heard and understood. One way to do this is to talk less and listen more. To ensure you achieve a good balance of conversing and listening during the call, try both an active technique and a passive technique. For the active technique, pause for a few seconds once your customer has finished speaking before you offer an answer or response. This pause will demonstrate that you are actively taking in what your prospect said. The passive technique is to pause regularly throughout your demo presentation so your customer can give feedback or ask questions. Taking the time to incorporate these techniques into your sales calls will show that you are really listening intently to what your prospective customer has to say. As a result, this will increase trust and create more successful sales opportunities further down the line."
      }), _jsxs(_components.h3, {
        id: "5-show-dont-tell",
        children: ["5. Show, don't tell", _jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#5-show-dont-tell",
          children: _jsx(_components.span, {
            className: "icon icon-link"
          })
        })]
      }), _jsx(_components.p, {
        children: "Rather than just talking through the entire demo, show your prospective customers exactly how your product helps them solve their problems. Using an interactive product demo can be one way to do this with minimal effort. By customizing these interactive demos based on use case, buyer persona, and a specific workflow - you can not just impress your prospects but can have a powerful weapon in your arsenal to increase your conversions."
      }), _jsx(_components.p, {
        children: "Interactive demos simplify the buying process for companies, eliminating the need for multiple demos for different stakeholders."
      }), _jsxs(_components.h3, {
        id: "6-always-follow-up-with-a-crisp-email-after-the-product-demo",
        children: ["6. Always follow-up with a crisp email after the product demo", _jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#6-always-follow-up-with-a-crisp-email-after-the-product-demo",
          children: _jsx(_components.span, {
            className: "icon icon-link"
          })
        })]
      }), _jsx(_components.p, {
        children: "A post-demo follow-up email should be more than just a quick hello to keep in touch. After providing your prospect with information about your product, they may still have questions or uncertainties that need to be addressed. Take some extra time to reflect on what topics were discussed during the demo and use this in the email to provide any additional insights and resources that could help them make a more informed decision."
      }), _jsx(_components.p, {
        children: "In addition, you can also share an interactive demo using a powerful tool like Fable. This type of guided walkthrough allows prospects to explore and interact with the product features on their own without talking to a sales rep \u2013 and potentially fall in love with it! Remember that patience is key when trying to close the deal!"
      }), _jsxs(_components.h3, {
        id: "7-review-and-improve-your-demo",
        children: ["7. Review and improve your demo", _jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#7-review-and-improve-your-demo",
          children: _jsx(_components.span, {
            className: "icon icon-link"
          })
        })]
      }), _jsx(_components.p, {
        children: "Measuring the success of your product demo can be done by understanding user behavior. With Fable, you can track each user\u2019s behavior as they go through your product\u2019s different features. This data gives you insights into what users think of your products and how to improve them. From here, it\u2019s possible to make quick adjustments that better fit a prospective customer's needs."
      }), _jsx(_components.p, {
        children: "As the team at HubSpot says: If you want an effective product demo that converts, you need to demonstrate real value. It's as simple as that."
      }), _jsxs(_components.h2, {
        id: "what-are-interactive-product-demos-and-how-can-you-use-them",
        children: ["What are interactive product demos and how can you use them?", _jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#what-are-interactive-product-demos-and-how-can-you-use-them",
          children: _jsx(_components.span, {
            className: "icon icon-link"
          })
        })]
      }), _jsx(_components.p, {
        children: "An Interactive product demo provides users with a self-serve guided walkthrough when it comes to familiarizing themselves with a product. Unlike traditional product demos, which are simply informative and narrative-driven, interactive demos give customers the opportunity to engage directly with the product they are learning about. Through this interactive buyer experience, prospective customers gain a better understanding of how the product works and what its features can do."
      }), _jsx(_components.p, {
        children: "In conclusion, product demos are an effective way to close the deal and provide potential customers with an informative experience. By using interactive product demos, sales teams can tap into the potential of real-time decision-making and make more informed buying decisions. This guide has outlined some key tips to help you demo your products successfully, thereby allowing you to close more deals."
      })]
    }), "\n", _jsxs(Promotion, {
      config: props.config,
      children: [_jsxs(_components.h2, {
        id: "start-your-14-day-free-trial-today",
        children: ["Start your 14-day free trial today!", _jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#start-your-14-day-free-trial-today",
          children: _jsx(_components.span, {
            className: "icon icon-link"
          })
        })]
      }), _jsx(_components.p, {
        children: "Want to get the right partner for your sales team and close more deals?"
      }), _jsx(PromotionBannerCta, {
        href: "https://www.theden.ai/join-the-waitlist",
        cta: "Get started"
      })]
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
  bannerDate,
  bannerSubtitle,
  bannerTitle,
  MDXContent as default,
  frontmatter
};
