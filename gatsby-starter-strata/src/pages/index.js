import React from 'react'
import {useState, useEffect} from 'react';
import Helmet from 'react-helmet'

import RequestNFTs from '../components/nfts.js'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'


const HomeIndex = () => {
  const siteTitle = 'NFTs Teatro Colón'
  const siteDescription = 'Subastas del Teatro'
  const [images, setImages] = useState([]);
  
  useEffect(() => {RequestNFTs().then(val => {setImages(val)})}, []);

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <h2>Subastas Activas</h2>

          <Gallery images={images} />

          <ul className="actions">
            <li>
              <a href="# " className="button">
                Ver Todas
              </a>
            </li>
          </ul>
        </section>
        <section id="two">
          <header className="major">
            <h2>
              Ipsum lorem dolor aliquam ante commodo
              <br />
              magna sed accumsan arcu neque.
            </h2>
          </header>
          <p>
            Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc
            nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae
            lobortis tortor primis integer massa.
          </p>
          <ul className="actions">
            <li>
              <a href="# " className="button">
                Saber más
              </a>
            </li>
          </ul>
        </section>
{/*         
        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            Accumsan pellentesque commodo blandit enim arcu non at amet id arcu
            magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem
            vulputate lorem neque lorem ipsum dolor.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  1234 Somewhere Rd.
                  <br />
                  Nashville, TN 00000
                  <br />
                  United States
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  000-000-0000
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="# ">hello@untitled.tld</a>
                </li>
              </ul>
            </div>
          </div>
        </section> */}
      </div>
    </Layout>
  )
}

export default HomeIndex
