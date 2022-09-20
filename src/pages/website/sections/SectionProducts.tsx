import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

type ProductType = {
  id: string;
  title: string;
  subtitle: string;
  link: string;
}

const products = [
  {
    id: "tcap",
    title: "TCAP",
    subtitle: "Real time exposure to the whole crypto market. ",
    link: "/tcap"
  },
  {
    id: "jpegz",
    title: "JPEGZ",
    subtitle: "Real time exposure to the top 10 most popular NFT collections",
    link: "/nft"
  }
]

const SectionProducts = () => {
  const [siteUrl, setSiteUrl] = useState("");
  const dataq = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }`);
  
  useEffect(() => {
    if (typeof (dataq.site) !== "undefined") {
      setSiteUrl(dataq.site.siteMetadata.siteUrl)
    } else {
      console.log("Error with props in team");
    }
  }, [dataq]);
  
  const item = (product: ProductType) => (
    <div key={product.id} className="box products-item">
      <div className="products-info">
        <h2 className="terciary-header">
          {product.title}
        </h2>
        <p className="subtitle">
          {product.subtitle}
        </p>
      </div>
      <div className="products-link">
        <a
          className="link"
          href={siteUrl.concat(product.link)}
          rel="noreferrer"
        >
          Learn More
        </a>
      </div>
    </div>
  );

  return (
    <div id="products" className="section-products">
      <h1 className="header">
        Index Tokens
      </h1>
      <div className="products">
        {products.map((product) => {
          return item(product);
        })}
      </div>
    </div>    
  );
};

export default SectionProducts; 
