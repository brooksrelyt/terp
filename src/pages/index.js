/* eslint-disable */
import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

import Background from '../img/background.gif';

const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div class="hero-wrapper">
      <div id="hero" class="header-banner" style={{background: 'url(' + `${Background}` + ')'}} role="img" aria-label="website hero banner image for Maryland Day 2019"></div>
      <div class="container h-textarea">
        <div class="row">
          <div class="col-lg-12 columns h-textarea-inner">
            <div class="textarea-intro center">
              <div class="hero-box fadeInDown">
                <div class="hero-box-inner">
                  <h1 class="white uppercase large no-marg-top">Maryland Day<br />APRIL 27, 2019</h1>
                  <h5 class="white uppercase">10 A.M.-4 P.M. / Free Admission and Parking</h5>
                  <hr />
                  <p class="white">Enjoy a day of learning, fun and discovery. At the 21st annual Maryland Day, you’ll find a wide variety of family-friendly events and activities where you can explore our world of Fearless Ideas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
