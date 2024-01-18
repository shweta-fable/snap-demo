import React, { useState, lazy, useEffect, memo } from 'react';
import { Routes, Route, } from "react-router-dom";
import Wrapper from './Wrapper';
import Layout from "./layouts/bundled-layout/Layout";
import Header from "./layouts/bundled-layout/components/header"
import Sidepanel from "./layouts/bundled-layout/components/sidepanel"
import Footer from "./layouts/bundled-layout/components/footer"
import Toc from './layouts/bundled-layout/components/toc';
import { useApplicationContext } from './application-context';

const MemoizedWrapper = memo((props) => {
  return (
    <Wrapper {...props}>
      {props.children}
    </Wrapper>
  )
});

const Index = lazy(() => import('./mdx-dist/index'));
const TheUltimateProductDemoGuideForSalesTeamsToCloseMoreDeals = lazy(() => import('./mdx-dist/the-ultimate-product-demo-guide-for-sales-teams-to-close-more-deals'));

const filePaths = ["/blog/","/blog/the-ultimate-product-demo-guide-for-sales-teams-to-close-more-deals"]
const bodyEl = document.querySelector("body");

if (!document.querySelector("#invisible-links")) {
  const linksWrapperEl = document.createElement("div");
  linksWrapperEl.setAttribute("id", "invisible-links");
  linksWrapperEl.style.display = "none";

  filePaths.forEach((filePath) => {
    const linkEl = document.createElement("a");
    linkEl.setAttribute("href", filePath);
    linksWrapperEl.appendChild(linkEl);
  });

  bodyEl.appendChild(linksWrapperEl);
}

export default function Router() {

  const {
    globalState,
    addToGlobalState,
    showSidePanel,
    handleShowSidePanel,
    config,
    manifest,
    sidePanelLinks
  } = useApplicationContext();

  
  return (
    <>
      <Routes>
        
      <Route
        path="/blog/"
        element={
          <Layout config={config} 
            headerComp={(props) => <Header 
              props={config.props.header} 
              manifest={manifest} 
              config={config} 
              {...props}
              /> 
            }
            sidepanelComp={(props) => <Sidepanel 
              manifest={manifest} 
              config={config} 
              linksTree={sidePanelLinks} 
              {...props}
              />
            }
            footerComp={(props) => <Footer 
              props={config.props.footer}
              {...props}
              />
            }
            tocComp={(props) => <Toc 
              props={config.props.toc}
              toc={[]}
              {...props}
              />
            }
            >
            <MemoizedWrapper config={config} frontmatter={{"title":"The Den AI Blog","ogTitle":"The Den AI Blog","ogDescription":"A must follow blog for all the sales and marketing leaders."}}>
              <Index  
                globalState={globalState} 
                addToGlobalState={addToGlobalState} 
                manifest={manifest} 
                config={config} 
                frontmatter={{"title":"The Den AI Blog","ogTitle":"The Den AI Blog","ogDescription":"A must follow blog for all the sales and marketing leaders."}}
                toc={[]}
                key="index"
            />
            </MemoizedWrapper>
          </Layout>
        }
      />
    

      <Route
        path="/blog/the-ultimate-product-demo-guide-for-sales-teams-to-close-more-deals"
        element={
          <Layout config={config} 
            headerComp={(props) => <Header 
              props={config.props.header} 
              manifest={manifest} 
              config={config} 
              {...props}
              /> 
            }
            sidepanelComp={(props) => <Sidepanel 
              manifest={manifest} 
              config={config} 
              linksTree={sidePanelLinks} 
              {...props}
              />
            }
            footerComp={(props) => <Footer 
              props={config.props.footer}
              {...props}
              />
            }
            tocComp={(props) => <Toc 
              props={config.props.toc}
              toc={[{"depth":2,"value":"What exactly is a product demo?","data":{"hProperties":{"id":"what-exactly-is-a-product-demo"},"id":"what-exactly-is-a-product-demo"}},{"depth":2,"value":"What is the significance of product demos?","data":{"hProperties":{"id":"what-is-the-significance-of-product-demos"},"id":"what-is-the-significance-of-product-demos"}},{"depth":2,"value":"Are product demos and sales demos the same?","data":{"hProperties":{"id":"are-product-demos-and-sales-demos-the-same"},"id":"are-product-demos-and-sales-demos-the-same"}},{"depth":2,"value":"At what stage in the sales process does a product demo typically occur?","data":{"hProperties":{"id":"at-what-stage-in-the-sales-process-does-a-product-demo-typically-occur"},"id":"at-what-stage-in-the-sales-process-does-a-product-demo-typically-occur"}},{"depth":2,"value":"How to create a high-converting and successful product demo?","data":{"hProperties":{"id":"how-to-create-a-high-converting-and-successful-product-demo"},"id":"how-to-create-a-high-converting-and-successful-product-demo"}},{"depth":3,"value":"1. Have a comprehensive understanding of both your customer and your product","data":{"hProperties":{"id":"1-have-a-comprehensive-understanding-of-both-your-customer-and-your-product"},"id":"1-have-a-comprehensive-understanding-of-both-your-customer-and-your-product"}},{"depth":3,"value":"2. Tailor your demo to fit the prospect's unique problem","data":{"hProperties":{"id":"2-tailor-your-demo-to-fit-the-prospects-unique-problem"},"id":"2-tailor-your-demo-to-fit-the-prospects-unique-problem"}},{"depth":3,"value":"3. Create an agenda for the demo","data":{"hProperties":{"id":"3-create-an-agenda-for-the-demo"},"id":"3-create-an-agenda-for-the-demo"}},{"depth":3,"value":"4. Talk less, listen more","data":{"hProperties":{"id":"4-talk-less-listen-more"},"id":"4-talk-less-listen-more"}},{"depth":3,"value":"5. Show, don't tell","data":{"hProperties":{"id":"5-show-dont-tell"},"id":"5-show-dont-tell"}},{"depth":3,"value":"6. Always follow-up with a crisp email after the product demo","data":{"hProperties":{"id":"6-always-follow-up-with-a-crisp-email-after-the-product-demo"},"id":"6-always-follow-up-with-a-crisp-email-after-the-product-demo"}},{"depth":3,"value":"7. Review and improve your demo","data":{"hProperties":{"id":"7-review-and-improve-your-demo"},"id":"7-review-and-improve-your-demo"}},{"depth":2,"value":"What are interactive product demos and how can you use them?","data":{"hProperties":{"id":"what-are-interactive-product-demos-and-how-can-you-use-them"},"id":"what-are-interactive-product-demos-and-how-can-you-use-them"}}]}
              {...props}
              />
            }
            >
            <MemoizedWrapper config={config} frontmatter={{"title":"The Ultimate Product Demo Guide for Sales Teams to Close More Deals","subtitle":"In this comprehensive guide, we will dive into everything you want to know about product demos and how you can nail your demos to close more deals.","date":"January 10, 2024","bannerImg":"https://github.com/sid-patri-fable/fable-blog/assets/155963795/adbda461-871c-45e7-8583-559cd0cd42f3","ogTitle":"The Ultimate Product Demo Guide for Sales Teams to Close More Deals","ogDescription":"Wondering what product demos are and how they can boost your sales? Look no further! This ultimate guide provides valuable insights and strategies to help you master the art of product demos.","ogImage":"https://github.com/sid-patri-fable/fable-blog/assets/155963795/adbda461-871c-45e7-8583-559cd0cd42f3)"}}>
              <TheUltimateProductDemoGuideForSalesTeamsToCloseMoreDeals  
                globalState={globalState} 
                addToGlobalState={addToGlobalState} 
                manifest={manifest} 
                config={config} 
                frontmatter={{"title":"The Ultimate Product Demo Guide for Sales Teams to Close More Deals","subtitle":"In this comprehensive guide, we will dive into everything you want to know about product demos and how you can nail your demos to close more deals.","date":"January 10, 2024","bannerImg":"https://github.com/sid-patri-fable/fable-blog/assets/155963795/adbda461-871c-45e7-8583-559cd0cd42f3","ogTitle":"The Ultimate Product Demo Guide for Sales Teams to Close More Deals","ogDescription":"Wondering what product demos are and how they can boost your sales? Look no further! This ultimate guide provides valuable insights and strategies to help you master the art of product demos.","ogImage":"https://github.com/sid-patri-fable/fable-blog/assets/155963795/adbda461-871c-45e7-8583-559cd0cd42f3)"}}
                toc={[{"depth":2,"value":"What exactly is a product demo?","data":{"hProperties":{"id":"what-exactly-is-a-product-demo"},"id":"what-exactly-is-a-product-demo"}},{"depth":2,"value":"What is the significance of product demos?","data":{"hProperties":{"id":"what-is-the-significance-of-product-demos"},"id":"what-is-the-significance-of-product-demos"}},{"depth":2,"value":"Are product demos and sales demos the same?","data":{"hProperties":{"id":"are-product-demos-and-sales-demos-the-same"},"id":"are-product-demos-and-sales-demos-the-same"}},{"depth":2,"value":"At what stage in the sales process does a product demo typically occur?","data":{"hProperties":{"id":"at-what-stage-in-the-sales-process-does-a-product-demo-typically-occur"},"id":"at-what-stage-in-the-sales-process-does-a-product-demo-typically-occur"}},{"depth":2,"value":"How to create a high-converting and successful product demo?","data":{"hProperties":{"id":"how-to-create-a-high-converting-and-successful-product-demo"},"id":"how-to-create-a-high-converting-and-successful-product-demo"}},{"depth":3,"value":"1. Have a comprehensive understanding of both your customer and your product","data":{"hProperties":{"id":"1-have-a-comprehensive-understanding-of-both-your-customer-and-your-product"},"id":"1-have-a-comprehensive-understanding-of-both-your-customer-and-your-product"}},{"depth":3,"value":"2. Tailor your demo to fit the prospect's unique problem","data":{"hProperties":{"id":"2-tailor-your-demo-to-fit-the-prospects-unique-problem"},"id":"2-tailor-your-demo-to-fit-the-prospects-unique-problem"}},{"depth":3,"value":"3. Create an agenda for the demo","data":{"hProperties":{"id":"3-create-an-agenda-for-the-demo"},"id":"3-create-an-agenda-for-the-demo"}},{"depth":3,"value":"4. Talk less, listen more","data":{"hProperties":{"id":"4-talk-less-listen-more"},"id":"4-talk-less-listen-more"}},{"depth":3,"value":"5. Show, don't tell","data":{"hProperties":{"id":"5-show-dont-tell"},"id":"5-show-dont-tell"}},{"depth":3,"value":"6. Always follow-up with a crisp email after the product demo","data":{"hProperties":{"id":"6-always-follow-up-with-a-crisp-email-after-the-product-demo"},"id":"6-always-follow-up-with-a-crisp-email-after-the-product-demo"}},{"depth":3,"value":"7. Review and improve your demo","data":{"hProperties":{"id":"7-review-and-improve-your-demo"},"id":"7-review-and-improve-your-demo"}},{"depth":2,"value":"What are interactive product demos and how can you use them?","data":{"hProperties":{"id":"what-are-interactive-product-demos-and-how-can-you-use-them"},"id":"what-are-interactive-product-demos-and-how-can-you-use-them"}}]}
                key="the-ultimate-product-demo-guide-for-sales-teams-to-close-more-deals"
            />
            </MemoizedWrapper>
          </Layout>
        }
      />
    
      </Routes>
    </>
  );
}