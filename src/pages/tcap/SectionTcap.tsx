import React, { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { NumericFormat } from "react-number-format";
import { contractsContext, signerContext } from "../../context";
import mintIcon from "../../../static/website/features/mint.svg";
import tradeIcon from "../../../static/website/features/trade.svg";
import poolIcon from "../../../static/website/features/pool.svg";
import farmIcon from "../../../static/website/features/farm.svg";

type FeatureType = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

const features = [
  {
    id: "mint",
    title: "Mint",
    subtitle: "Create and approve a vault, add collateral and begin minting TCAP.",
    icon: mintIcon
  },
  {
    id: "trade",
    title: "Trade",
    subtitle: "Buy and sell TCAP on Uniswap.",
    icon: tradeIcon
  },
  {
    id: "pool",
    title: "Pool",
    subtitle: "Provide liquidity to TCAP pairs on Uniswap and earn a portion of the trading fees.",
    icon: poolIcon
  },
  {
    id: "farm",
    title: "Farm",
    subtitle: "Earn CTX Rewards for minting TCAP tokens and Staking TCAP LP tokens.",
    icon: farmIcon
  }
];


const SectionTcap = () => {
  const contracts = useContext(contractsContext);
  const signer = useContext(signerContext);
  const [tcapPrice, setTcapPrice] = useState("0.00");
  const [tcapTotalCap, setTcapTotalCap] = useState("0.00");

  useEffect(() => {
    const load = async () => {
      if (signer.ethcallProvider && contracts.tcapOracleRead) {
        const tcapOraclePriceCall = await contracts.tcapOracleRead?.getLatestAnswer();;
        // @ts-ignore
        const [currentTcapPrice] = await signer.ethcallProvider?.all([tcapOraclePriceCall]);
        const totalTcapPrice = currentTcapPrice.mul(10000000000);
        const tPrice = ethers.utils.formatEther(totalTcapPrice.div(10000000000));
      
        setTcapPrice(tPrice);
        setTcapTotalCap(ethers.utils.formatEther(totalTcapPrice));
      }
    };
    load();
  }, [signer.ethcallProvider, contracts.tcapOracleRead]);

  const item = (feature: FeatureType) => (
    <div key={feature.id} className="box feature-item">
      <div className="feature-info">
        <div className="icon-container">
          <img src={feature.icon} className="feature-icon" alt="Mint" />
        </div>
        <h2 className="heading-secondary">
          {feature.title}
        </h2>
      </div>
      <div className="feature-content">
        <p className="subtitle">
          {feature.subtitle}
        </p>
      </div>
    </div>
  );

  return (
    <div className="products-tcap">
      <h1 className="header">
        TCAP: Total Crypto Market Cap Index Token
      </h1>
      <div className="content">
        <div className="box main">
          <div className="info-top">
              <h2 className="heading-secondary">
                What is TCAP?
              </h2>
              <p className="subtitle">
                TCAP gives holders real-time price exposure to total cryptocurrency market cap.
                It's a new, 125% fully backed, fully collateralized asset that’s both audited
                and accurately representative of the entire cryptocurrency complex by
                total market capitalization.
              </p>
              <div className="icons">

              </div>
          </div>
          <div className="info-bottom">
              <div className="hl-divider" />
              <div className="prices">
                <div className="market-cap-box">
                  <NumericFormat
                    className="number-pink"
                    value={tcapTotalCap}
                    displayType="text"
                    thousandSeparator
                    prefix="$"
                    decimalScale={0}
                  />
                  <span className="label">
                      Total Crypto Market Capitalization
                  </span>
                </div>
                <div  className="vl-divider" />
                <div className="price-box">
                  <NumericFormat
                    className="number-blue"
                    value={tcapPrice}
                    displayType="text"
                    thousandSeparator
                    prefix="$"
                    decimalScale={2}
                  />
                  <span className="label">
                      TCAP Price
                  </span>
                </div>
              </div>
          </div>
        </div>
        <div className="features">
          {features.map((feature) => {
              return item(feature);
          })}
        </div>
      </div>
    </div>
  );    
};

export default SectionTcap;
