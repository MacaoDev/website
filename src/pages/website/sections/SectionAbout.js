import React from 'react'
import { Link } from 'gatsby'
// import { Container } from 'react-bootstrap'
import image from '../../../../static/website/about/about.webp'
import audit from '../../../../static/website/about/audit.svg'
import code from '../../../../static/website/about/code.svg'
import oracles from '../../../../static/website/about/oracles.svg'
import whitepaper from '../../../../static/website/about/whitepaper.svg'

const SectionAbout = () => {
  return (
      <section id="about" className="section-about">
            <div className="about-title header">
              What is TCAP?
            </div>
            <div className="about-content">
            TCAP gives holders real-time price exposure to total cryptocurrency market cap. It's a new, 150% fully backed, fully collateralized asset that’s both audited and accurately representative of the entire cryptocurrency complex by total market capitalization. 
            </div>
            <div className="about-image">
              <img src={image} alt="About" className="about-image" />
            </div>
            <div className="about-details">
              <div className="about-details-item">
                <Link to="https://docs.google.com/document/d/14dFpXqlzrFqUbG7RFWcyP5z-4VTeUFMNyKo81nbYySQ/edit" rel="noopener" rel="noreferrer" target="_blank" className="about-details-text"><img src={whitepaper} className="about-details-icons" alt="Whitepaper" />Whitepaper</Link>
              </div>
              <div className="about-details-divisor"></div>
              <div className="about-details-item">
                <Link to="https://docs.cryptex.finance" rel="noopener" rel="noreferrer" target="_blank" className="about-details-text"><img src={code} className="about-details-icons" alt="Code" />Code</Link>
              </div>
              <div className="about-details-divisor"></div>
              <div className="about-details-item">
                <Link to="https://docs.chain.link/docs/get-the-latest-price" rel="noopener" rel="noreferrer" target="_blank" className="about-details-text"><img src={oracles} className="about-details-icons" alt="Oracles" />Oracles</Link>
              </div>
              <div className="about-details-divisor"></div>
              <div className="about-details-item">
                <Link to="https://docs.chain.link/docs/get-the-latest-price" rel="noopener" rel="noreferrer" target="_blank" className="about-details-text"><img src={audit} className="about-details-icons" alt="Audit" />Audit</Link>
              </div>
            </div>
      </section>
  )
}

export default SectionAbout
