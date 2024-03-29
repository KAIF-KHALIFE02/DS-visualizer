import React from "react";
import "../StyleSheets/Landing.css";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import sortimg from '../Header/SortingFeature.png';
import pathimg from '../Header/PathFeature.png';
import compare from '../Header/CompareFeature.jpg';
// import '../StyleJS/main.min.js'

export default function Blankurl() {

// componentDidMount(){
//   console.log('mounted')
// }

  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-copy">
                <h1 className="hero-title mt-0">
                  Data Structures Visualizer
                </h1>
                <p className="hero-paragraph">
                  This website is comprised of visualization of <b>Sorting</b> and <b>Path Finding</b> algorithms. It will help 
                  in learning algorithms in much more efficient way.
                </p>
                {/* <div className="hero-cta">
                  <a className="button button-primary" href="#">
                    Pre order now
                  </a>
                  <a className="button" href="#">
                    Get in touch
                  </a>
                </div> */}
              </div>
              <div className="hero-figure anime-element">
                <svg
                  className="placeholder"
                  width="528"
                  height="396"
                  viewBox="0 0 528 396"
                >
                  <rect
                    width="528"
                    height="396"
                  />
                </svg>
                <div
                  className="hero-figure-box hero-figure-box-01"
                  data-rotation="45deg"
                ></div>
                <div
                  className="hero-figure-box hero-figure-box-02"
                  data-rotation="-45deg"
                ></div>
                <div
                  className="hero-figure-box hero-figure-box-03"
                  data-rotation="0deg"
                ></div>
                <div
                  className="hero-figure-box hero-figure-box-04"
                  data-rotation="-135deg"
                ></div>
                <div className="hero-figure-box hero-figure-box-05"></div>
                <div className="hero-figure-box hero-figure-box-06"></div>
                <div className="hero-figure-box hero-figure-box-07"></div>
                <div
                  className="hero-figure-box hero-figure-box-08"
                  data-rotation="-22deg"
                ></div>
                <div
                  className="hero-figure-box hero-figure-box-09"
                  data-rotation="-52deg"
                ></div>
                <div
                  className="hero-figure-box hero-figure-box-10"
                  data-rotation="-50deg"
                ></div>
              </div>
            </div>
          </div>
        </section>

        <section className="features section">
          <div className="container">
            <div className="features-inner section-inner has-bottom-divider">
              <div className="features-wrap">
                <div className="feature text-center is-revealing">
                  <div className="feature-inner">
                    <div className="feature-icon">
                      <img
                      className="features-img"
                        src={sortimg}
                        alt="Feature 01"
                      />
                    </div>
                    <h4 className="feature-title mt-24">Be Productive</h4>
                    <p className="text-sm mb-0">
                      Fermentum posuere urna nec tincidunt praesent semper
                      feugiat nibh. A arcu cursus vitae congue mauris. Nam at
                      lectus urna duis convallis. Mauris rhoncus aenean vel elit
                      scelerisque mauris.
                    </p>
                  </div>
                </div>
                <div className="feature text-center is-revealing">
                  <div className="feature-inner">
                    <div className="feature-icon">
                      <img
                        className="features-img"
                        src={pathimg}
                        alt="Feature 02"
                      />
                    </div>
                    <h4 className="feature-title mt-24">Be Productive</h4>
                    <p className="text-sm mb-0">
                      Fermentum posuere urna nec tincidunt praesent semper
                      feugiat nibh. A arcu cursus vitae congue mauris. Nam at
                      lectus urna duis convallis. Mauris rhoncus aenean vel elit
                      scelerisque mauris.
                    </p>
                  </div>
                </div>
                <div className="feature text-center is-revealing">
                  <div className="feature-inner">
                    <div className="feature-icon">
                      <img
                        className="features-img"
                        src={compare}
                        alt="Feature 03"
                      />
                    </div>
                    <h4 className="feature-title mt-24">Be Productive</h4>
                    <p className="text-sm mb-0">
                      Fermentum posuere urna nec tincidunt praesent semper
                      feugiat nibh. A arcu cursus vitae congue mauris. Nam at
                      lectus urna duis convallis. Mauris rhoncus aenean vel elit
                      scelerisque mauris.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="pricing section">
          <div className="container-sm">
            <div className="pricing-inner section-inner">
              <div className="pricing-header text-center">
                <h2 className="section-title mt-0">Unlimited for all</h2>
                <p className="section-paragraph mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut ad quis nostrud.
                </p>
              </div>
              <div className="pricing-tables-wrap">
                <div className="pricing-table">
                  <div className="pricing-table-inner is-revealing">
                    <div className="pricing-table-main">
                      <div className="pricing-table-header pb-24">
                        <div className="pricing-table-price">
                          <span className="pricing-table-price-currency h2">
                            $
                          </span>
                          <span className="pricing-table-price-amount h1">
                            49
                          </span>
                          <span className="text-xs">/month</span>
                        </div>
                      </div>
                      <div className="pricing-table-features-title text-xs pt-24 pb-24">
                        What you will get
                      </div>
                      <ul className="pricing-table-features list-reset text-xs">
                        <li>
                          <span>Lorem ipsum dolor sit nisi</span>
                        </li>
                        <li>
                          <span>Lorem ipsum dolor sit nisi</span>
                        </li>
                        <li>
                          <span>Lorem ipsum dolor sit nisi</span>
                        </li>
                        <li>
                          <span>Lorem ipsum dolor sit nisi</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-table-cta mb-8">
                      <a
                        className="button button-primary button-shadow button-block"
                        href="#"
                      >
                        Pre order now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta section">
          <div className="container">
            <div className="cta-inner section-inner">
              <h3 className="section-title mt-0">
                Still not convinced on buying?
              </h3>
              <div className="cta-cta">
                <a
                  className="button button-primary button-wide-mobile"
                  href="#"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}
